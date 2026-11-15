import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type CountryItem = {
  name: string
  flag: string
  program: string
}

type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
}

const topRowCountries: CountryItem[] = [
  { name: "Australia", flag: "🇦🇺", program: "Student, Work & PR Pathways" },
  { name: "Canada", flag: "🇨🇦", program: "Express Entry & Study Permits" },
  { name: "New Zealand", flag: "🇳🇿", program: "Green List & Post-Study Work" },
  { name: "United Kingdom", flag: "🇬🇧", program: "Skilled Worker & Graduate Visa" },
  { name: "Europe", flag: "🇪🇺", program: "Schengen Study & Residency" },
  { name: "Dubai", flag: "🇦🇪", program: "Golden Visa & Sponsor Permits" },
]

const bottomRowCountries: CountryItem[] = [
  { name: "Europe", flag: "🇪🇺", program: "Schengen Study & Residency" },
  { name: "Dubai", flag: "🇦🇪", program: "Golden Visa & Sponsor Permits" },
  { name: "Australia", flag: "🇦🇺", program: "Student, Work & PR Pathways" },
  { name: "Canada", flag: "🇨🇦", program: "Express Entry & Study Permits" },
  { name: "New Zealand", flag: "🇳🇿", program: "Green List & Post-Study Work" },
  { name: "United Kingdom", flag: "🇬🇧", program: "Skilled Worker & Graduate Visa" },
]

export const IntegrationCarousel = ({
  buttonText = "Explore Destinations",
  buttonHref = "/countries",
  title = "Global Visa & Settle Destinations",
  subtitle = "Secure admissions, work permits, visitor entries, and skilled migration pathways across key global destinations.",
}: IntegrationCarouselProps) => {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let topAnimationId: number
    let bottomAnimationId: number
    let topPosition = 0
    let bottomPosition = 0

    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition -= 0.5
        if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 2) {
          topPosition = 0
        }
        topRowRef.current.style.transform = `translateX(${topPosition}px)`
      }
      topAnimationId = requestAnimationFrame(animateTopRow)
    }

    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        bottomPosition -= 0.65
        if (Math.abs(bottomPosition) >= bottomRowRef.current.scrollWidth / 2) {
          bottomPosition = 0
        }
        bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`
      }
      bottomAnimationId = requestAnimationFrame(animateBottomRow)
    }

    topAnimationId = requestAnimationFrame(animateTopRow)
    bottomAnimationId = requestAnimationFrame(animateBottomRow)

    return () => {
      cancelAnimationFrame(topAnimationId)
      cancelAnimationFrame(bottomAnimationId)
    }
  }, [])

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-[680px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-[40px] leading-tight font-normal text-[#222222] tracking-tight mb-4 font-figtree">
            {title}
          </h2>
          <p className="text-lg leading-7 text-[#666666] max-w-[600px] mt-2 font-figtree">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex gap-3 mt-6"
          >
            <a
              href={buttonHref}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#222222] text-sm font-semibold tracking-wide border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 font-figtree"
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="h-[280px] relative overflow-hidden">
        {/* Top Row */}
        <div
          ref={topRowRef}
          className="flex items-start gap-6 absolute top-4 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...topRowCountries, ...topRowCountries].map((country, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center gap-4 bg-white border border-[#f0f0f0] rounded-[24px] px-6 py-4 flex-shrink-0"
              style={{
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-3xl shadow-sm">
                {country.flag}
              </div>
              <div className="text-left font-figtree">
                <div className="text-sm font-bold text-gray-800">{country.name}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{country.program}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradients to fade edges */}
        <div
          className="absolute top-0 right-0 bottom-0 w-60 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))" }}
        />
        <div
          className="absolute top-0 left-0 bottom-0 w-60 z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0))" }}
        />

        {/* Bottom Row */}
        <div
          ref={bottomRowRef}
          className="flex items-start gap-6 absolute top-[148px] whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...bottomRowCountries, ...bottomRowCountries].map((country, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center gap-4 bg-white border border-[#f0f0f0] rounded-[24px] px-6 py-4 flex-shrink-0"
              style={{
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center text-3xl shadow-sm">
                {country.flag}
              </div>
              <div className="text-left font-figtree">
                <div className="text-sm font-bold text-gray-800">{country.name}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{country.program}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
