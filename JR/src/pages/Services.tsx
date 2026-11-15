import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { VisaTimeline } from "@/components/VisaTimeline"
import { AdvisorySupport } from "@/components/PricingSection"
import { Footer } from "@/components/Footer"
import { Languages, BookOpen, ClipboardList, PenTool, FileCheck } from "lucide-react"

const coachingItems = [
  {
    num: "01",
    title: "SPOKEN ENGLISH",
    subtitle: "Spoken English",
    description: "English communication and speaking skills coaching.",
    icon: Languages,
  },
  {
    num: "02",
    title: "IELTS",
    subtitle: "IELTS Coaching",
    description: "IELTS preparation and coaching.",
    icon: BookOpen,
  },
  {
    num: "03",
    title: "PTE",
    subtitle: "PTE Coaching",
    description: "PTE preparation and coaching.",
    icon: ClipboardList,
  },
  {
    num: "04",
    title: "TOEFL",
    subtitle: "TOEFL Coaching",
    description: "TOEFL preparation and coaching.",
    icon: PenTool,
  },
  {
    num: "05",
    title: "LANGUAGECERT",
    subtitle: "LanguageCert",
    description: "LanguageCert preparation and coaching.",
    icon: FileCheck,
  },
]

export default function Services() {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <PortfolioNavbar />
      <ProductTeaserCard />

      <VisaTimeline />
      <AdvisorySupport />

      {/* Language & Test Preparation Section */}
      <section className="py-24 bg-[#fafafa] border-t border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              LANGUAGE & TEST PREPARATION
            </span>
            <h2 className="text-[40px] font-normal leading-tight tracking-tight mt-4 mb-4 font-figtree text-[#202020]">
              Language & Test Preparation
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree font-light">
              Preparation and coaching support for English language development and internationally recognised language proficiency tests.
            </p>
          </div>

          {/* Grid of 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coachingItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="group relative p-6 rounded-[32px] text-left transition-all border-2 border-gray-200 hover:border-[#156d95]/50 bg-white hover:bg-[#156d95]/[0.01] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[260px] font-figtree"
                >
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#156d95]/70 transition-colors">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center text-[#156d95]/80 group-hover:text-[#156d95] group-hover:bg-[#156d95]/10 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1 font-mono">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#202020] mb-3">
                      {item.subtitle}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Section Disclaimer */}
          <div className="mt-12 p-6 bg-white border border-gray-200 rounded-[24px] text-center max-w-2xl mx-auto shadow-sm font-figtree">
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              * Prep courses focus on skills development and test strategies. Individual results depend on candidate effort and background. Official exam bookings are subject to third-party test provider schedules.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
