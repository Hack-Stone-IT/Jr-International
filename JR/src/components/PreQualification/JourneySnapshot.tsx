import React from "react"
import { ArrowRight, Globe, Calendar, Briefcase, GraduationCap } from "lucide-react"
import type { AssessmentAnswer } from "./types"
import { pathwayOptions, destinationOptions, europeCountryOptions, timelineOptions } from "./assessmentData"

interface JourneySnapshotProps {
  answers: AssessmentAnswer
  onConfirm: () => void
  onBack: () => void
}

export const JourneySnapshot: React.FC<JourneySnapshotProps> = ({ answers, onConfirm, onBack }) => {
  // Helper to resolve readable values
  const getGoalLabel = () => {
    const opt = pathwayOptions.find(o => o.id === answers.pathway)
    return opt ? opt.title : answers.pathway
  }

  const getDestinationLabel = () => {
    const dest = destinationOptions.find(d => d.id === answers.destination)
    const destName = dest ? dest.title : answers.destination
    if (answers.destination === "EU" && answers.europeCountry) {
      const euCountry = europeCountryOptions.find(c => c.id === answers.europeCountry)
      return `${destName} (${euCountry ? euCountry.title : answers.europeCountry})`
    }
    return destName
  }

  const getTimelineLabel = () => {
    const time = timelineOptions.find(t => t.id === answers.timeline)
    return time ? time.title : answers.timeline
  }

  const getServicePathwayLabel = () => {
    const { pathway, destination } = answers
    if (pathway === "study") {
      if (destination === "CA") return "Study Permit & PGWP"
      if (destination === "AU") return "Student Visa (Subclass 500)"
      if (destination === "NZ") return "Student Visa & Post-Study Pathway"
      if (destination === "GB") return "Student Visa & Graduate Route"
      if (destination === "EU") return "Schengen Student Visa"
      if (destination === "AE") return "Dubai Student Sponsor Visa"
      return "International Student Visa"
    } else if (pathway === "work") {
      if (destination === "CA") return "Skilled Work Permit Options"
      if (destination === "AU") return "Skilled / Graduate Visa Route"
      if (destination === "NZ") return "Green List Skilled Residency"
      if (destination === "GB") return "Skilled Worker Sponsor Pathway"
      if (destination === "AE") return "Dubai Professional Sponsor Permit"
      return "Skilled Work Visa Advisory"
    } else if (pathway === "visit") {
      return "Temporary Entry / Visitor Visa"
    } else if (pathway === "pr") {
      return "Points-Based Skilled Migration Assessment"
    }
    return "Advisory Consultation Route"
  }

  const flowSteps = [
    { title: "Initial Profile & Goal Review", desc: "Verifying your background, qualifications, and pathway parameters." },
    { title: "Destination Matcher", desc: "Selecting the optimal destination aligned with visa options." },
    { title: "Pathway Advisory", desc: "Detailing required checklist items and baseline criteria." },
    { title: "Document Preparation", desc: "Providing custom checklists for academic & financial files." },
    { title: "Application Support", desc: "Expert review of application files prior to official submission." },
    { title: "Advisor Consultation", desc: "Friction-free discussion to review circumstances." },
  ]

  return (
    <div className="space-y-10 text-left font-figtree">
      <div>
        <h3 className="text-2xl font-semibold text-[#202020] mb-2">Your Journey Snapshot</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Here is a summary of the details you provided. Review your path before submitting your file for consultation.
        </p>
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "GOAL", value: getGoalLabel(), icon: Briefcase },
          { label: "DESTINATION", value: getDestinationLabel(), icon: Globe },
          { label: "VISA PATHWAY", value: getServicePathwayLabel(), icon: GraduationCap },
          { label: "TIMELINE", value: getTimelineLabel(), icon: Calendar },
        ].map((item, idx) => (
          <div key={idx} className="p-5 bg-[#fafafa] border border-gray-150 rounded-[24px] space-y-3 flex flex-col justify-between min-h-[140px]">
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
            <div>
              <item.icon className="w-5 h-5 text-[#156d95] mb-2" />
              <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Service Journey Visual Map */}
      <div className="space-y-6 pt-4 border-t border-gray-100">
        <div>
          <h4 className="text-lg font-bold text-[#202020]">How JR International Supports Your Journey</h4>
          <p className="text-xs text-gray-400 leading-relaxed mt-1">
            Immigration approvals rest solely with government authorities. Here is our structured, advisory-led support path to help you compile a compliant, accurate application:
          </p>
        </div>

        {/* Visual Line and Nodes */}
        <div className="relative pl-6 border-l-2 border-[#156d95]/20 space-y-8 ml-2">
          {flowSteps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Dot Node */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[#156d95] bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#156d95]" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-xs uppercase tracking-wide">{step.title}</h5>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
        >
          Modify Answers
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className="flex items-center gap-1.5 bg-[#156d95] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200 cursor-pointer shadow-sm"
        >
          Continue to Booking <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
