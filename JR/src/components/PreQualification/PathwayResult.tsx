import React from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, RefreshCw, ExternalLink } from "lucide-react"
import type { AssessmentAnswer } from "./types"
import {
  destinationOptions,
  europeCountryOptions,
  timelineOptions,
  destinationPaths,
  europeCountryPaths,
  officialSources,
  europeOfficialSources,
} from "./assessmentData"

interface PathwayResultProps {
  answers: AssessmentAnswer
  onReset: () => void
}

export const PathwayResult: React.FC<PathwayResultProps> = ({ answers, onReset }) => {
  // Helper to resolve labels
  const getPathwayName = () => {
    if (answers.pathway === "study") return "Student Visa"
    if (answers.pathway === "work") return "Work Visa"
    if (answers.pathway === "visit") return "Visitor Visa"
    if (answers.pathway === "pr") return "Permanent Residence / Migration"
    return "Advisory Consultation"
  }

  const getDestinationName = () => {
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

  // Resolve links for CTAs
  const getDestinationLink = () => {
    if (answers.destination === "EU" && answers.europeCountry && answers.europeCountry !== "not_sure") {
      return europeCountryPaths[answers.europeCountry] || "/destinations/europe"
    }
    return destinationPaths[answers.destination] || "/countries"
  }

  const getOfficialSource = () => {
    if (answers.destination === "EU" && answers.europeCountry && answers.europeCountry !== "not_sure") {
      return europeOfficialSources[answers.europeCountry] || null
    }
    return officialSources[answers.destination] || null
  }

  const officialSource = getOfficialSource()
  const destinationLink = getDestinationLink()

  return (
    <div className="text-center py-4 space-y-8 font-figtree">
      {/* Icon Success */}
      <div className="w-16 h-16 rounded-full bg-[#16b364]/10 flex items-center justify-center mx-auto text-[#16b364]">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      {/* Confirmation Message */}
      <div className="space-y-3">
        <h3 className="text-3xl font-semibold text-[#202020]">Pathway Request Logged!</h3>
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Thank you <strong>{answers.name}</strong>. Your consultation details have been sent to our academic advisors. We will contact you at <strong>{answers.phone}</strong> or <strong>{answers.email}</strong> to coordinate your profile review.
        </p>
      </div>

      {/* Recommended Pathway Box */}
      <div className="bg-[#fafafa] border border-gray-150 p-6 rounded-[32px] text-left max-w-lg mx-auto space-y-4">
        <div className="border-b border-gray-100 pb-3">
          <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">POTENTIAL VISA PATHWAY</span>
          <h4 className="text-xl font-bold text-[#156d95] mt-1">
            {getPathwayName()} — {getDestinationName()}
          </h4>
        </div>

        <div className="space-y-2 text-xs text-gray-600 font-figtree">
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-400">Intended Goal:</span>
            <span className="font-semibold text-gray-700 capitalize">{answers.pathway === "pr" ? "Residency" : answers.pathway}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-400">Destination:</span>
            <span className="font-semibold text-gray-700">{getDestinationName()}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-400">Target Timeline:</span>
            <span className="font-semibold text-gray-700">{getTimelineLabel()}</span>
          </div>
          {answers.profile && (
            <div className="flex justify-between py-1 border-b border-gray-50">
              <span className="text-gray-400">Profile / Education:</span>
              <span className="font-semibold text-gray-700">{answers.profile}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 leading-relaxed italic">
          Based on the information provided, we recommend speaking with a JR International advisor to review your circumstances. This initial assessment provides general guidance and does not guarantee eligibility or visa success.
        </p>
      </div>

      {/* Official Government Source Link if available */}
      {officialSource && (
        <div className="max-w-lg mx-auto bg-[#156d95]/5 border border-[#156d95]/10 p-5 rounded-2xl text-left space-y-2">
          <span className="text-[10px] font-mono font-bold text-[#156d95] uppercase tracking-wider block">OFFICIAL GOVERNMENT SOURCE</span>
          <p className="text-xs text-gray-500 leading-normal">
            For official visa rules, processing guidelines, and criteria details, consult the website for:
          </p>
          <a
            href={officialSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#156d95] font-bold hover:underline inline-flex items-center gap-1"
          >
            {officialSource.name} <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Disclaimer Block */}
      <div className="max-w-lg mx-auto text-[10px] text-gray-400 leading-relaxed font-mono uppercase bg-gray-50 p-4 rounded-xl border border-gray-150">
        Disclaimer: Final eligibility depends on current immigration, education and visa requirements and must be confirmed with a qualified advisor. JR International does not guarantee visa approval, residency, or employment outcomes.
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <Link
          to={destinationLink}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#156d95] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200 shadow-sm"
        >
          Explore Destination <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-500 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-all duration-200 cursor-pointer"
        >
          Start New Assessment <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
