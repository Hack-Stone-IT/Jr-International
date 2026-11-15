import { useEffect, useRef } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

const SESSION_STORAGE_KEY = "jr-scroll-positions"

interface ScrollPosition {
  x: number;
  y: number;
}

export default function RouteScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const prevKeyRef = useRef<string | null>(null)
  
  // Track scroll position in memory as fallback
  const memoryPositions = useRef<Record<string, ScrollPosition>>({})

  // Disable browser automatic scroll restoration to handle manually
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const original = window.history.scrollRestoration
      window.history.scrollRestoration = "manual"
      return () => {
        window.history.scrollRestoration = original
      }
    }
  }, [])

  // Save scroll position for the page we are leaving
  useEffect(() => {
    const handleSavePosition = () => {
      if (prevKeyRef.current) {
        const position = { x: window.scrollX, y: window.scrollY }
        memoryPositions.current[prevKeyRef.current] = position
        try {
          const stored = sessionStorage.getItem(SESSION_STORAGE_KEY)
          const parsed = stored ? JSON.parse(stored) : {}
          parsed[prevKeyRef.current] = position
          sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(parsed))
        } catch {
          // ignore
        }
      }
    }

    // Save position before updating to new location
    handleSavePosition()
    prevKeyRef.current = location.key
  }, [location.key])

  // Restore scroll or scroll to top/hash on navigation
  useEffect(() => {
    const getSavedPosition = (key: string): ScrollPosition | null => {
      try {
        const stored = sessionStorage.getItem(SESSION_STORAGE_KEY)
        if (stored) {
          const parsed = stored ? JSON.parse(stored) : {}
          if (parsed[key]) return parsed[key]
        }
      } catch {
        // fallback to memory
      }
      return memoryPositions.current[key] || null
    }

    const scrollToHash = (hash: string): boolean => {
      const id = decodeURIComponent(hash.replace("#", ""))
      if (!id) return false
      
      let attempts = 0
      const maxAttempts = 50 // Try for up to 1 second
      
      const tryScroll = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "instant" })
          refreshScrollTrigger()
          return true
        }
        
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(tryScroll, 20)
        } else {
          // Fallback to top if element is not found
          window.scrollTo({ top: 0, left: 0, behavior: "instant" })
          refreshScrollTrigger()
        }
        return false
      }
      
      return tryScroll()
    }

    const refreshScrollTrigger = () => {
      const win = window as unknown as {
        gsap?: unknown
        ScrollTrigger?: { refresh: () => void }
      }
      if (typeof window !== "undefined" && win.gsap && win.ScrollTrigger) {
        try {
          win.ScrollTrigger.refresh()
        } catch {
          // ignore
        }
      }
    }

    // Determine target behavior based on navigation type and hash
    if (location.hash) {
      // Hash links take precedence
      scrollToHash(location.hash)
    } else if (navigationType === "POP") {
      // Restore scroll on Back/Forward (POP)
      const savedPos = getSavedPosition(location.key)
      if (savedPos) {
        window.scrollTo({ top: savedPos.y, left: savedPos.x, behavior: "instant" })
        
        // Handle potential slow mounting / image loading by retrying
        let attempts = 0
        const maxAttempts = 10
        const verifyScroll = () => {
          if (Math.abs(window.scrollY - savedPos.y) > 2 && attempts < maxAttempts) {
            window.scrollTo({ top: savedPos.y, left: savedPos.x, behavior: "instant" })
            attempts++
            setTimeout(verifyScroll, 50)
          } else {
            refreshScrollTrigger()
          }
        }
        setTimeout(verifyScroll, 50)
      } else {
        // Fallback to top if no position saved
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        refreshScrollTrigger()
      }
    } else {
      // Normal PUSH/REPLACE navigates to top
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
      
      // Safety fallback on next frame for slower mounts
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        if (document.documentElement) document.documentElement.scrollTop = 0
        if (document.body) document.body.scrollTop = 0
        refreshScrollTrigger()
      })
    }
  }, [location.key, location.hash, navigationType])

  return null
}
