import { useState } from "react"
import { motion } from "framer-motion"
import { ClipboardCheck, FileText, UserCheck, ShieldCheck } from "lucide-react"

type TimelineStep = {
  number: number
  title: string
  subtitle: string
  description: string
  duration: string
  icon: React.ComponentType<{ className?: string }>
}

type TimelineService = "student" | "pr" | "visitor" | "work"

const serviceSteps: Record<TimelineService, TimelineStep[]> = {
  student: [
    {
      number: 1,
      title: "Consultation & Profile Review",
      subtitle: "Define academic goals",
      description: "Our advisors evaluate your academic background, budget, and career goals to select suitable intake options.",
      duration: "1 - 2 Weeks",
      icon: ClipboardCheck,
    },
    {
      number: 2,
      title: "Institution & Course Selection",
      subtitle: "Secure offer letter",
      description: "We manage your application lodgement, compile transcripts, and coordinate directly with university admissions.",
      duration: "4 - 8 Weeks",
      icon: FileText,
    },
    {
      number: 3,
      title: "Documentation & Visa Files",
      subtitle: "Prepare compliance records",
      description: "We guide you in gathering required financial proof, translating certificates, and preparing a robust student visa file.",
      duration: "2 - 4 Weeks",
      icon: UserCheck,
    },
    {
      number: 4,
      title: "Lodgement & Pre-Departure",
      subtitle: "Submit files and brief",
      description: "We assist in submitting your visa application to government registries, scheduling biometrics, and providing briefings.",
      duration: "Varies by Country",
      icon: ShieldCheck,
    },
  ],
  pr: [
    {
      number: 1,
      title: "Consultation & Assessment",
      subtitle: "Discuss eligibility",
      description: "We review your work history, education credentials, and language scores to compute your potential points.",
      duration: "1 - 2 Weeks",
      icon: ClipboardCheck,
    },
    {
      number: 2,
      title: "Pathway & Destination Choice",
      subtitle: "Select visa stream",
      description: "Select the most suitable skilled migration pathways or provincial nomination programs based on your profile score.",
      duration: "2 - 4 Weeks",
      icon: FileText,
    },
    {
      number: 3,
      title: "File Preparation & Compliance",
      subtitle: "Assemble records",
      description: "Collect work experience certificates, police clearances, and formal skill assessment filings for strict review.",
      duration: "4 - 8 Weeks",
      icon: UserCheck,
    },
    {
      number: 4,
      title: "Submission & Advisory",
      subtitle: "Lodge migration files",
      description: "Submit Expression of Interest (EOI) or final PR application to immigration databases and wait for invitation rounds.",
      duration: "Varies by Country",
      icon: ShieldCheck,
    },
  ],
  visitor: [
    {
      number: 1,
      title: "Initial Consultation",
      subtitle: "Review travel goals",
      description: "Evaluate your travel objectives, target travel dates, and identify specific visa categories for your destination.",
      duration: "1 Week",
      icon: ClipboardCheck,
    },
    {
      number: 2,
      title: "Profile & Financial Check",
      subtitle: "Assess sponsorships",
      description: "Examine financial capacities, employment letters, and local ties to substantiate genuine temporary entry rules.",
      duration: "1 - 2 Weeks",
      icon: FileText,
    },
    {
      number: 3,
      title: "Document Assembly",
      subtitle: "Compile invitation files",
      description: "Compile invitation letters, hotel bookings, flight itineraries, and cover letters stating clear travel purpose.",
      duration: "1 - 2 Weeks",
      icon: UserCheck,
    },
    {
      number: 4,
      title: "Submission Support",
      subtitle: "Submit visa forms",
      description: "Assist with form filings, pay visa application fees, and book embassy submission or biometrics appointments.",
      duration: "Varies by Country",
      icon: ShieldCheck,
    },
  ],
  work: [
    {
      number: 1,
      title: "Consultation & Evaluation",
      subtitle: "Discuss background",
      description: "Review professional experience, technical credentials, and language tests to verify global career eligibility.",
      duration: "1 - 2 Weeks",
      icon: ClipboardCheck,
    },
    {
      number: 2,
      title: "Pathway Assessment",
      subtitle: "Review visa options",
      description: "Evaluate specific employer-sponsored streams, skilled worker cards, or job seeker visa paths available in target destinations.",
      duration: "2 - 4 Weeks",
      icon: FileText,
    },
    {
      number: 3,
      title: "Files & Credentials Prep",
      subtitle: "Verify documentation",
      description: "Prepare employment agreements, employer support letters, skills assessment certificates, and credentials verification files.",
      duration: "4 - 8 Weeks",
      icon: UserCheck,
    },
    {
      number: 4,
      title: "Submission & Advisory",
      subtitle: "Lodge work permit",
      description: "Submit work permit applications to destination authorities and provide post-submission guidance on visa compliance.",
      duration: "Varies by Country",
      icon: ShieldCheck,
    },
  ],
}

export const VisaTimeline = () => {
  const [activeTab, setActiveTab] = useState<TimelineService>("student")
  const steps = serviceSteps[activeTab]

  return (
    <div className="w-full bg-[#fafafa] py-24 border-t border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            Journey Timeline
          </span>
          <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4 font-figtree">
            Your Pathway to Settle Abroad
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree">
            A professional step-by-step roadmap designed to guide you from initial consultation to final visa outcomes.
          </p>
        </div>

        {/* Service selection tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-16 max-w-3xl mx-auto">
          {[
            { id: "student", label: "Student Visa" },
            { id: "pr", label: "PR Visa" },
            { id: "visitor", label: "Visitor Visa" },
            { id: "work", label: "Work Visa" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TimelineService)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-figtree border ${
                activeTab === tab.id
                  ? "bg-[#156d95] text-white border-[#156d95] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#156d95]/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline body */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-0.5 bg-[#e5e5e5] -translate-x-1/2" />

          {/* Timeline cards */}
          <div className="space-y-16 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              const IconComponent = step.icon

              return (
                <div key={step.number} className="flex flex-col md:flex-row items-start md:justify-between relative">
                  {/* Left block for even steps (desktop) */}
                  <div className={`hidden md:block w-[42%] ${isEven ? "text-right" : "opacity-0 select-none pointer-events-none"}`}>
                    {isEven && (
                      <div className="bg-white p-6 rounded-3xl border border-[#eee] shadow-sm">
                        <span className="text-xs font-mono font-bold text-[#156d95] uppercase">{step.duration}</span>
                        <h4 className="text-xl font-semibold text-gray-800 mt-1 mb-2 font-figtree">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-figtree">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white border-2 border-[#156d95] flex items-center justify-center shadow-md relative"
                    >
                      <IconComponent className="w-6 h-6 text-[#156d95]" />
                      <div className="absolute -bottom-2 bg-[#156d95] text-white text-[9px] font-mono px-2 py-0.5 rounded-full font-bold">
                        STEP {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right block for odd steps (desktop) / and ALL steps on mobile */}
                  <div className={`w-full md:w-[42%] pl-20 md:pl-0 ${!isEven ? "text-left" : "md:opacity-0 md:select-none md:pointer-events-none"}`}>
                    <div className="bg-white p-6 rounded-3xl border border-[#eee] shadow-sm">
                      <span className="text-xs font-mono font-bold text-[#156d95] uppercase">{step.duration}</span>
                      <h4 className="text-xl font-semibold text-gray-800 mt-1 mb-2 font-figtree">{step.title}</h4>
                      {/* Subtitle / desc for mobile fallback */}
                      <p className="text-sm text-gray-500 leading-relaxed font-figtree">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
