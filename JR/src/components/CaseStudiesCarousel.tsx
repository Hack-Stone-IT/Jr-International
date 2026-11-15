import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

type CaseStudy = {
  id: string
  logo: React.ReactNode
  title: string
  features: string[]
  description: string
  accentColor: string
  focusItems1: string[]
  focusItems2: string[]
  pathwayName: string
  subPathwayName: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "student-advisory",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 38 48" width="38" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z"
          fill="#16b364"
        />
      </svg>
    ),
    title: "Student Visa Advisory",
    features: ["Course & Institution Selection", "Application Guidance", "Visa Documentation"],
    description: "Guidance for applicants planning to study abroad, including destination and course considerations, application preparation and visa documentation requirements.",
    accentColor: "#16b364",
    pathwayName: "STUDENT",
    subPathwayName: "STUDENT GUIDANCE",
    focusItems1: ["Course & Institution", "Visa Documentation", "Application Preparation"],
    focusItems2: ["Checklist Compliance", "Financial Guidelines", "Pre-Departure Briefings"]
  },
  {
    id: "work-advisory",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" fill="#0A0D12" r="20" />
        <circle cx="29" cy="19" fill="#fff" r="9" />
      </svg>
    ),
    title: "Work Visa Advisory",
    features: ["Work Pathways", "Eligibility Guidance", "Documentation"],
    description: "Guidance for applicants exploring work-related visa pathways and understanding destination-specific eligibility and documentation requirements.",
    accentColor: "#3b82f6",
    pathwayName: "WORK",
    subPathwayName: "WORK PATHWAYS",
    focusItems1: ["Eligibility", "Documentation", "Application Preparation"],
    focusItems2: ["Sponsor Verification", "Skills Assessment Info", "Filing Procedures"]
  },
  {
    id: "visitor-advisory",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#f59e0b" height="48" rx="12" width="48" />
        <path
          d="M16 28h16v-8H16v8zm8-18L12 20h24L24 10z"
          fill="#fff"
        />
      </svg>
    ),
    title: "Visitor Visa Advisory",
    features: ["Tourism", "Family Visits", "Short-Term Travel"],
    description: "Guidance for applicants preparing visitor visa applications, including documentation and destination-specific requirements.",
    accentColor: "#f59e0b",
    pathwayName: "VISITOR",
    subPathwayName: "VISITOR TRAVEL",
    focusItems1: ["Application Requirements", "Supporting Documents", "Travel Purpose"],
    focusItems2: ["Family Visit Guidelines", "Tourist Checklists", "Consulate Standards"]
  },
  {
    id: "pr-advisory",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#8b5cf6" height="48" rx="12" width="48" />
        <path
          d="M24 14.25c5.385 0 9.75 4.366 9.75 9.75s-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75 4.365-9.75 9.75-9.75z"
          fill="#fff"
        />
      </svg>
    ),
    title: "Permanent Residence Advisory",
    features: ["Migration Pathways", "Eligibility Review", "Documentation"],
    description: "Guidance for applicants exploring permanent residence and long-term migration pathways based on the applicable destination rules.",
    accentColor: "#8b5cf6",
    pathwayName: "PERMANENT RESIDENCE",
    subPathwayName: "PR STRATEGIES",
    focusItems1: ["Eligibility", "Migration Pathways", "Documentation"],
    focusItems2: ["Points Evaluation", "Expression of Interest", "State Nominations info"]
  }
]

const FeatureBadge = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2 bg-white/75 shadow-sm border border-black/5 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 font-figtree">
      <CheckCircle className="w-3.5 h-3.5 text-[#156d95]" />
      {name}
    </div>
  )
}

type AdvisoryCardProps = {
  pathwayName: string
  focusItems: string[]
  accentColor: string
  delay: number
  zIndex: number
  style: React.CSSProperties
}

const AdvisoryInfoCard = ({ pathwayName, focusItems, accentColor, delay, zIndex, style }: AdvisoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay }}
      className="absolute w-[360px] md:w-[380px] rounded-2xl p-6 backdrop-blur-xl text-left"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        ...style,
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-4 font-figtree">
        <div className="flex items-center justify-between border-b border-gray-150 pb-2">
          <div>
            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">VISA PATHWAY</span>
            <h4 className="text-sm font-bold text-gray-800 tracking-tight" style={{ color: accentColor }}>{pathwayName}</h4>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#156d95] bg-[#156d95]/10 px-2 py-1 rounded">
            ADVISORY ACTIVE
          </span>
        </div>

        <div className="space-y-3">
          <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">ADVISORY FOCUS</span>
          <div className="space-y-2">
            {focusItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="text-xs font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-mono">
          <span className="text-gray-400">STATUS</span>
          <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">CONSULTATION AVAILABLE</span>
        </div>
      </div>
    </motion.div>
  )
}

export const CaseStudiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<number | null>(null)
  const currentStudy = caseStudies[currentIndex]

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
    autoPlayRef.current = window.setInterval(() => {
      nextSlide()
    }, 5000)
  }, [nextSlide])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isAutoPlaying, currentIndex, startAutoPlay, stopAutoPlay])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="w-full min-h-[600px] bg-[#fafafa] border-t border-b border-[#e5e5e5] flex items-center justify-center py-24 px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            VISA PATHWAYS
          </span>
          <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4 font-figtree">
            Guidance Across Your Visa Journey
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree">
            Explore the visa pathways supported by JR International and understand the type of guidance available for your individual circumstances.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStudy.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="space-y-6"
              >
                <div className="text-gray-400">{currentStudy.logo}</div>

                <h3 className="text-3xl font-semibold text-[#202020] leading-tight tracking-tight font-figtree">
                  {currentStudy.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {currentStudy.features.map((feature, idx) => (
                    <FeatureBadge key={idx} name={feature} />
                  ))}
                </div>

                <div className="border-l-4 border-[#156d95] pl-6 py-2">
                  <p className="text-lg leading-7 text-gray-600 mb-3 font-figtree">
                    {currentStudy.description}
                  </p>
                  <p className="text-xs text-gray-400 font-mono uppercase">
                    Requirements and procedures vary by destination and visa type.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation */}
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-[#156d95]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <AdvisoryInfoCard
                  pathwayName={currentStudy.pathwayName}
                  focusItems={currentStudy.focusItems1}
                  accentColor={currentStudy.accentColor}
                  delay={0}
                  zIndex={1}
                  style={{ transform: "translate(-190px, -70px)" }}
                />
                <AdvisoryInfoCard
                  pathwayName={currentStudy.subPathwayName}
                  focusItems={currentStudy.focusItems2}
                  accentColor={currentStudy.accentColor}
                  delay={0.1}
                  zIndex={2}
                  style={{ transform: "translate(-170px, -50px)" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
