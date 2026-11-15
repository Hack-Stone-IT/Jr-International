import { useState } from "react"
import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

type CompareItem = {
  name: string
  programName: string
  minInvestment: string
  processingTime: string
  citizenshipTimeline: string
  stayRequirement: string
  passportRank: string
  visaFreeDestinations: string
  familyInclusion: string
  investType: string
}

const compareData: Record<string, CompareItem> = {
  AU: {
    name: "Australia",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  CA: {
    name: "Canada",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  GB: {
    name: "UK",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  EU: {
    name: "Europe",
    programName: "Country-Specific Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  NZ: {
    name: "New Zealand",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  AE: {
    name: "Dubai / UAE",
    programName: "Student & Residence Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  ES: {
    name: "Spain",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  MT: {
    name: "Malta",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  LV: {
    name: "Latvia",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
  DE: {
    name: "Germany",
    programName: "Student & Skilled Visas",
    minInvestment: "Check current requirements",
    processingTime: "Processing time varies",
    citizenshipTimeline: "Depends on visa category",
    stayRequirement: "Subject to current visa rules",
    passportRank: "Depends on visa & profile",
    visaFreeDestinations: "Check current requirements",
    familyInclusion: "Subject to eligibility",
    investType: "Varies by pathway",
  },
}

export const CountryComparison = () => {
  const [selectedLeft, setSelectedLeft] = useState<string>("AU")
  const [selectedRight, setSelectedRight] = useState<string>("CA")

  const left = compareData[selectedLeft]
  const right = compareData[selectedRight]

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Selector Header */}
        <div className="grid grid-cols-12 gap-8 items-center bg-[#fafafa] p-8 rounded-[32px] border border-[#e5e5e5] mb-12">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
            <label className="text-xs font-mono font-bold text-[#156d95] uppercase">Select First Destination</label>
            <select
              value={selectedLeft}
              onChange={(e) => setSelectedLeft(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-lg font-medium font-figtree"
            >
              {Object.keys(compareData).map((k) => (
                <option key={k} value={k}>
                  {compareData[k].name} ({compareData[k].programName})
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-12 md:col-span-2 text-center text-gray-400 font-mono text-sm font-bold">
            VS
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
            <label className="text-xs font-mono font-bold text-[#156d95] uppercase">Select Second Destination</label>
            <select
              value={selectedRight}
              onChange={(e) => setSelectedRight(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-lg font-medium font-figtree"
            >
              {Object.keys(compareData).map((k) => (
                <option key={k} value={k}>
                  {compareData[k].name} ({compareData[k].programName})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-border rounded-3xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] font-figtree">
              <thead>
                <tr className="bg-gray-50 border-b border-border">
                  <th className="p-6 text-sm font-bold text-gray-400 font-mono uppercase w-1/3">Pathway Parameters</th>
                  <th className="p-6 text-xl font-bold text-[#202020] w-1/3">{left.name}</th>
                  <th className="p-6 text-xl font-bold text-[#202020] w-1/3">{right.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Primary Visa Type</td>
                  <td className="p-6 text-gray-800">{left.programName}</td>
                  <td className="p-6 text-gray-800">{right.programName}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Est. Baseline Cost</td>
                  <td className="p-6 text-gray-800 font-bold text-[#156d95]">{left.minInvestment}</td>
                  <td className="p-6 text-gray-800 font-bold text-[#156d95]">{right.minInvestment}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Pathway Options</td>
                  <td className="p-6 text-gray-800 text-sm">{left.investType}</td>
                  <td className="p-6 text-gray-800 text-sm">{right.investType}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Processing Time</td>
                  <td className="p-6 text-gray-800">{left.processingTime}</td>
                  <td className="p-6 text-gray-800">{right.processingTime}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Work Rights</td>
                  <td className="p-6 text-gray-800 text-sm">{left.stayRequirement}</td>
                  <td className="p-6 text-gray-800 text-sm">{right.stayRequirement}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Post-Study / Stay Options</td>
                  <td className="p-6 text-gray-800">{left.citizenshipTimeline}</td>
                  <td className="p-6 text-gray-800">{right.citizenshipTimeline}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Residency Pathways</td>
                  <td className="p-6 text-gray-800">{left.passportRank}</td>
                  <td className="p-6 text-gray-800">{right.passportRank}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Language Benchmarks</td>
                  <td className="p-6 text-gray-800 text-sm">{left.visaFreeDestinations}</td>
                  <td className="p-6 text-gray-800 text-sm">{right.visaFreeDestinations}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600 text-sm">Dependent Sponsorship</td>
                  <td className="p-6 text-gray-700 text-sm">{left.familyInclusion}</td>
                  <td className="p-6 text-gray-700 text-sm">{right.familyInclusion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer / prequalify row */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 border border-gray-100 rounded-3xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#156d95]" />
            </div>
            <p className="text-xs text-gray-500 leading-normal max-w-xl font-figtree">
              Note: Visa regulations and university requirements are subject to change. We recommend pre-qualifying with our academic advisors to receive a custom plan tailored to your profile.
            </p>
          </div>
          <Link to="/contact">
            <button className="bg-[#156d95] text-white px-6 py-3 rounded-full text-sm font-semibold hover:rounded-2xl transition-all duration-150 whitespace-nowrap font-figtree shadow-sm cursor-pointer">
              Discuss Your Options
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
