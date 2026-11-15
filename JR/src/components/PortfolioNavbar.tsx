import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import logoImg from "@/assets/Logo.png"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Countries", href: "/countries" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/50 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center"
            >
              <img
                src={logoImg}
                alt="JR International"
                className="h-10 w-auto object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 relative group font-figtree ${isActive ? "text-[#156d95]" : "text-gray-600 hover:text-[#156d95]"
                    }`}
                >
                  <span>{link.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#156d95] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#156d95] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#156d95]/90 hover:rounded-2xl transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5 font-figtree"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-[#156d95] p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`block w-full text-left py-3 text-lg font-semibold transition-colors duration-200 font-figtree ${isActive ? "text-[#156d95]" : "text-gray-700 hover:text-[#156d95]"
                      }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="w-full bg-[#156d95] text-white px-6 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider hover:bg-[#156d95]/90 hover:rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 font-figtree"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
