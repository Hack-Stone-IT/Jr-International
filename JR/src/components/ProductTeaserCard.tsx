import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, GraduationCap, Briefcase, Plane, ShieldCheck, ArrowRight } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

type PathwayNode = {
  id: string
  num: string
  name: string
  subtitle: string
  details: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const pathways: PathwayNode[] = [
  {
    id: "student-visa",
    num: "01",
    name: "STUDENT VISA",
    subtitle: "Study & education pathways",
    details: "Guidance on educational pathways, admissions, and student visa application requirements.",
    href: "/services/student-visa",
    icon: GraduationCap
  },
  {
    id: "work-visa",
    num: "02",
    name: "WORK VISA",
    subtitle: "Employment pathways",
    details: "Consultation for employment-based visa pathways and skills assessment compliance.",
    href: "/services/work-visa",
    icon: Briefcase
  },
  {
    id: "visitor-visa",
    num: "03",
    name: "VISITOR VISA",
    subtitle: "Tourism & short-term travel",
    details: "Assistance with visitor visas, tourist entry applications, and travel documentation checklists.",
    href: "/services/visitor-visa",
    icon: Plane
  },
  {
    id: "permanent-residence",
    num: "04",
    name: "PERMANENT RESIDENCE",
    subtitle: "Long-term residence pathways",
    details: "Strategic pathway planning for skilled migration, points-based residency, and settlement guidance.",
    href: "/services/permanent-residence",
    icon: ShieldCheck
  }
]

export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolumeLabel = "GLOBAL ADVISORY SERVICES",
    headline = "Your Trusted Gateway to Settle Abroad",
    subheadline = "JR International provides expert guidance for student, permanent residence, visitor, and work visa pathways.",
    description = "Our advisors help you navigate profile evaluations, document checklists, and submission requirements with complete compliance. We support applications for Australia, Canada, UK, Europe, and Dubai.",
    primaryButtonText = "Guided Assessment",
    primaryButtonHref = "/services",
    secondaryButtonText = "Explore Options",
    secondaryButtonHref = "/countries",
  } = props

  const navigate = useNavigate()
  const [activeNode, setActiveNode] = useState<PathwayNode | null>(null)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
    }
    return false
  })
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const motionHandler = (e: MediaQueryListEvent) => setShouldReduceMotion(e.matches)
    mediaQuery.addEventListener("change", motionHandler)

    return () => {
      window.removeEventListener("resize", handleResize)
      mediaQuery.removeEventListener("change", motionHandler)
    }
  }, [])

  // Removed unused network coordinates

  const handleNodeClick = (e: React.MouseEvent, href: string, node: PathwayNode) => {
    if (isMobile) {
      if (activeNode?.id !== node.id) {
        e.preventDefault()
        setActiveNode(node)
      } else {
        navigate(href)
      }
    } else {
      navigate(href)
    }
  }

  const handleNodeHover = (node: PathwayNode) => {
    if (!isMobile) {
      setActiveNode(node)
    }
  }

  const handleNodeLeave = () => {
    if (!isMobile) {
      setActiveNode(null)
    }
  }

  return (
    <section className="w-full px-8 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="col-span-12 lg:col-span-6 bg-[#e9e9e9] rounded-[40px] p-12 lg:p-16 flex flex-col justify-end aspect-square overflow-hidden text-left"
          >
            <div className="flex flex-col gap-1 text-[#9a9a9a] mb-6">
              <motion.span
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1], delay: 0.6 }}
                className="text-xs uppercase tracking-wider font-mono flex items-center gap-1 font-bold text-[#156d95]"
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
              </motion.span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-[#202020] mb-6 font-figtree"
            >
              {headline}
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed text-[#404040] mb-6 font-figtree"
            >
              {subheadline}
            </p>

            <p className="text-xs text-gray-500 leading-normal mb-8 font-figtree">
              {description}
            </p>

            <ul className="flex gap-3 flex-wrap">
              <li>
                <Link
                  to={primaryButtonHref}
                  className="block cursor-pointer text-white bg-[#156d95] rounded-full px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-150 hover:rounded-2xl shadow-sm"
                >
                  {primaryButtonText}
                </Link>
              </li>
              <li>
                <Link
                  to={secondaryButtonHref}
                  className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-150 hover:rounded-2xl hover:bg-gray-50"
                >
                  {secondaryButtonText}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Right Pathway Grid Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1], delay: 0.2 }}
            className="col-span-12 lg:col-span-6 bg-gradient-to-tr from-slate-50 via-white to-sky-50/50 border border-gray-150 rounded-[40px] flex flex-col justify-between p-8 lg:p-10 aspect-auto lg:aspect-square overflow-hidden relative shadow-sm text-left"
          >
            {/* Top Indicator Header */}
            <div className="flex justify-between items-start w-full z-10 mb-4 lg:mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
                  VISA PATHWAY SERVICES
                </span>
                <p className="text-xs text-slate-500 font-figtree mt-1">Personalized guidance across four pathways</p>
              </div>
              <div className="flex gap-1.5 flex-wrap max-w-[200px] justify-end">
                {["Student", "Work", "Visitor", "PR"].map((path, idx) => (
                  <span key={idx} className="text-[9px] font-mono font-semibold text-[#156d95] bg-[#156d95]/5 border border-[#156d95]/10 px-2 py-0.5 rounded">
                    {path}
                  </span>
                ))}
              </div>
            </div>

            {/* Center Area */}
            <div className="text-center my-auto py-2 z-10">
              <h3 className="text-sm font-mono font-bold tracking-widest text-[#111A4A] flex items-center justify-center gap-1.5">
                CHOOSE YOUR PATHWAY
              </h3>
              <p className="text-xs text-gray-500 font-figtree font-light mt-1 max-w-sm mx-auto">
                Explore the type of visa guidance you are looking for.
              </p>
              <motion.div 
                animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="mt-2 text-[#156d95] flex justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>

            {/* 2x2 Service Cards Grid */}
            <div className="grid grid-cols-2 gap-4 w-full z-10 my-auto">
              {pathways.map((node) => {
                const isActive = activeNode?.id === node.id
                const NodeIcon = node.icon
                return (
                  <motion.div
                    key={node.id}
                    whileHover={shouldReduceMotion ? {} : { y: -3 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative bg-white border rounded-2xl p-4 lg:p-5 flex flex-col justify-between aspect-auto min-h-[125px] md:min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-[#156d95] bg-[#156d95]/[0.03] shadow-[0_4px_16px_rgba(21,109,149,0.08)]"
                        : "border-gray-150 hover:border-[#156d95]/40 hover:bg-slate-50/[0.3] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                    }`}
                    onClick={(e) => handleNodeClick(e, node.href, node)}
                    onMouseEnter={() => handleNodeHover(node)}
                    onMouseLeave={handleNodeLeave}
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#156d95]/60 transition-colors">
                        {node.num}
                      </span>
                      <NodeIcon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-[#156d95]" : "text-slate-400 group-hover:text-[#156d95]"
                      }`} />
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-xs lg:text-[13px] font-bold text-[#111A4A] tracking-wider uppercase">
                        {node.name}
                      </h4>
                      <p className="text-[10px] lg:text-[11px] text-gray-500 font-figtree font-light mt-1 line-clamp-1">
                        {node.subtitle}
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 text-slate-400 group-hover:text-[#156d95] transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom Information Panel */}
            <div className="w-full bg-[#111A4A]/[0.02] border border-[#111A4A]/5 rounded-3xl p-4 lg:p-5 z-10 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-[320px] lg:max-w-[360px]">
                <h5 className="font-bold text-[#111A4A] text-xs uppercase tracking-wider font-mono">
                  Need help choosing a pathway?
                </h5>
                <p className="text-[11px] text-gray-500 font-figtree font-light leading-relaxed">
                  Start with a guided assessment and we'll help you understand the options relevant to your circumstances.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigate("/contact")
                }}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#156d95] hover:text-[#d97706] transition-colors cursor-pointer self-start md:self-auto flex-shrink-0"
              >
                <span>GUIDED ASSESSMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
