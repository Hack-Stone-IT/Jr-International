import { Link } from "react-router-dom"
import { GraduationCap, Briefcase, Plane, ShieldCheck, ArrowRight } from "lucide-react"

interface SupportItem {
  num: string
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const supportItems: SupportItem[] = [
  {
    num: "01",
    title: "STUDENT VISA",
    subtitle: "Study & Education Guidance",
    description: "Guidance for applicants exploring international study options, including pathway planning, documentation guidance, and preparation for the relevant application process.",
    icon: GraduationCap,
  },
  {
    num: "02",
    title: "WORK VISA",
    subtitle: "Work Visa Guidance",
    description: "Guidance for applicants exploring work-related visa pathways, including pathway considerations, documentation, and application preparation.",
    icon: Briefcase,
  },
  {
    num: "03",
    title: "VISITOR / TOURIST VISA",
    subtitle: "Visitor Visa Guidance",
    description: "Guidance for visitors preparing for short-term travel or tourism applications, including documentation and application preparation.",
    icon: Plane,
  },
  {
    num: "04",
    title: "PERMANENT RESIDENCE",
    subtitle: "Permanent Residence Guidance",
    description: "Guidance for applicants exploring long-term residence and migration pathways, including preliminary pathway considerations and application preparation.",
    icon: ShieldCheck,
  },
]

export function AdvisorySupport() {
  return (
    <section className="py-24 bg-white border-t border-b border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            ADVISORY SUPPORT
          </span>
          <h2 className="text-[40px] font-normal leading-tight tracking-tight mt-4 mb-4 font-figtree text-[#202020]">
            What We Help You With
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree font-light">
            Personalized guidance across student, work, visitor, and permanent residence visa pathways.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group relative p-8 rounded-[32px] text-left transition-all border-2 border-gray-200 hover:border-[#156d95]/50 bg-white hover:bg-[#156d95]/[0.01] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[340px] font-figtree"
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

        {/* Optional Process Roadmap */}
        <div className="border border-gray-200 rounded-[32px] overflow-hidden bg-white shadow-sm p-8 lg:p-10 font-figtree">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
              ADVISORY PROCESS ROADMAP
            </span>
            <p className="text-xs text-gray-400 font-figtree font-light mt-2">
              Our guidance is tailored to the applicant's circumstances and the requirements applicable to the selected pathway and destination.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto py-2">
            {[
              { step: "PROFILE", desc: "Background Evaluation" },
              { step: "PATHWAY", desc: "Optimal Route Selection" },
              { step: "DOCUMENTS", desc: "Checklists & Auditing" },
              { step: "APPLICATION", desc: "Preparation & Compliance" },
            ].map((stepObj, idx, arr) => (
              <div key={stepObj.step} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-gray-150/60 min-w-[150px] transition-all hover:border-[#156d95]/30">
                  <span className="text-[9px] font-mono text-[#156d95] font-bold">STEP 0{idx + 1}</span>
                  <span className="text-xs font-bold text-gray-800 tracking-wider font-mono mt-1">{stepObj.step}</span>
                  <span className="text-[10px] text-gray-400 font-light mt-0.5">{stepObj.desc}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="text-slate-300 transform rotate-90 md:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center font-figtree">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#156d95] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#156d95]/90 hover:rounded-2xl transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
