import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

type CountryCard = {
  name: string
  program: string
  minInvestment: string
  timeframe: string
  residencyStay: string
  citizenshipPath: string
  bgImage: string
  summary: string
  highlights: string[]
  searchKeywords?: string
  route: string
}

const countriesData: CountryCard[] = [
  {
    name: "Australia",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Student work permissions apply",
    citizenshipPath: "Post-study work and skilled visa pathways",
    bgImage: "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&q=80&w=600",
    summary: "Guidance for planning your study, work, or permanent residency pathways in Australia.",
    highlights: ["Temporary Graduate visa transition counsel", "Student visa work compliance checks", "Skilled migration profile evaluation"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Australia, Aussie, Melbourne, Sydney",
    route: "/destinations/australia",
  },
  {
    name: "Canada",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Student work rights off-campus",
    citizenshipPath: "PGWP and Express Entry skilled streams",
    bgImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
    summary: "Consultation for study permits, Post-Graduate Work Permits, and provincial selection in Canada.",
    highlights: ["Study permit financial proof guidance", "Open work permit criteria consultation", "Express Entry pathway evaluation"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Canada, Toronto, Vancouver",
    route: "/destinations/canada",
  },
  {
    name: "New Zealand",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Standard student work rights apply",
    citizenshipPath: "Post-Study Work Visa (Up to 3 Years)",
    bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
    summary: "Comprehensive support for study, work permit, and Green List residency pathways in New Zealand.",
    highlights: ["Up to 3-year post-study work visa counsel", "Green List residency fast-track parameters", "Student work permit checklist review"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, New Zealand, NZ, Auckland, Wellington",
    route: "/destinations/new-zealand",
  },
  {
    name: "United Kingdom",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Term-time student work rights",
    citizenshipPath: "Post-Study Graduate Route",
    bgImage: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=600",
    summary: "Consultation for UK student visa applications, Graduate Route permits, and skilled sponsor tracks.",
    highlights: ["Graduate Route work authorization guidelines", "Licensed student sponsor university coordination", "Skilled worker sponsored pathway advising"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, UK, United Kingdom, England, London, Great Britain",
    route: "/destinations/uk",
  },
  {
    name: "Europe",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Schengen study guidelines apply",
    citizenshipPath: "Schengen graduate stay-back options",
    bgImage: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&q=80&w=600",
    summary: "Explore study, visitor, work, and residency pathways across selected European destinations.",
    highlights: ["Admissions guidance for English-taught degrees", "Schengen travel zone accessibility parameters", "Graduate job seeker permit guidelines"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Europe, France, Finland, Italy, Ireland, Spain, Hungary, Netherlands, Schengen",
    route: "/destinations/europe",
  },
  {
    name: "Dubai / UAE",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Subject to current UAE residence laws",
    citizenshipPath: "Golden Visa and Green Visa options check",
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    summary: "Advisory for study residence, employment sponsorship, golden visas, and visitor entry in Dubai and the UAE.",
    highlights: ["Branch campus admissions requirements checking", "Employment residence permit guidelines", "Golden and Green visa criteria reviews"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Dubai, UAE, Emirates",
    route: "/destinations/dubai",
  },
  {
    name: "Malta",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Subject to current national laws",
    citizenshipPath: "Post-study work permit options check",
    bgImage: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600",
    summary: "Guidance for English-medium degree programs, student residence permits, and travel mobility across the Schengen Area from Malta.",
    highlights: ["Admissions guidance for English-taught degrees", "Schengen zone travel mobility counsel", "Post-study work pathways evaluation"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Malta, Valletta, Mediterranean",
    route: "/destinations/europe/malta",
  },
  {
    name: "Spain",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Subject to current Spanish visa rules",
    citizenshipPath: "Post-study job seeker residency options",
    bgImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=600",
    summary: "Consultation for student visa pathways, graduate job search permits, visitor prep, and work authorization in Spain.",
    highlights: ["Home to top-ranked business schools", "Favorable post-study job seeker options", "Schengen travel accessibility checks"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Spain, Madrid, Barcelona, Schengen",
    route: "/destinations/europe/spain",
  },
  {
    name: "Latvia",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Subject to current Latvian visa rules",
    citizenshipPath: "Post-study employment transition options",
    bgImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=600",
    summary: "Support for study visas, temporary residence permits, and post-study transition pathways in Latvia.",
    highlights: ["Highly accessible cost-of-living index", "English-medium programs across universities", "Schengen zone travel mobility checks"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Latvia, Riga, Baltic, Schengen",
    route: "/destinations/europe/latvia",
  },
  {
    name: "Germany",
    program: "Student Visa, Permanent Residence, Visitor Visa, Work Visa",
    minInvestment: "Check current requirements",
    timeframe: "Consultation required",
    residencyStay: "Subject to current German residence laws",
    citizenshipPath: "Favorable post-study residency pathways",
    bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600",
    summary: "Consultation for study permits, block account guidelines, and post-study career search options in Germany.",
    highlights: ["Access world-class public universities", "Options for English-taught master degrees", "Excellent tech and industrial clusters"],
    searchKeywords: "Student Visa, Permanent Residence Visa, Visitor Visa, Work Visa, Germany, Berlin, Munich, Schengen",
    route: "/destinations/europe/germany",
  },
]

export const CountryExplorer = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string>("All")
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null)

  const filteredCountries = countriesData.filter((c) => {
    const searchString = `${c.name} ${c.program} ${c.summary} ${c.searchKeywords || ""}`.toLowerCase()
    const matchesSearch = searchString.includes(searchQuery.toLowerCase())
    let matchesRegion = false
    if (selectedRegion === "All") {
      matchesRegion = true
    } else if (selectedRegion === "Europe") {
      matchesRegion = ["Europe", "Spain", "Malta", "Latvia", "Germany"].includes(c.name)
    } else {
      matchesRegion = c.name === selectedRegion
    }
    return matchesSearch && matchesRegion
  })

  return (
    <div className="w-full bg-white py-12">
      {/* Search & Filter Controls */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-[#fafafa] p-6 rounded-3xl border border-[#eee]">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations or visas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-11 pr-5 text-sm outline-none focus:border-[#156d95] transition-all font-figtree"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Australia", "Canada", "New Zealand", "United Kingdom", "Europe", "Dubai / UAE"].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all font-figtree border ${
                  selectedRegion === region
                    ? "bg-[#156d95] text-white border-[#156d95] shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#156d95]/50"
                }`}
              >
                {region === "United Kingdom" ? "UK" : region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Countries */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#fafafa] rounded-[32px] overflow-hidden border border-[#e5e5e5] hover:border-gray-300 hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Hero Card Image */}
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={country.bgImage}
                    alt={country.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-[#156d95]" />
                    <span className="text-[11px] font-bold font-mono text-gray-800 uppercase tracking-wide">
                      {country.name === "Europe" ? "Europe Hub" : "Primary Destination"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-mono font-bold text-[#156d95] uppercase tracking-wider">
                    {country.name}
                  </span>
                  <h3 className="text-2xl font-semibold text-[#202020] mt-1 mb-3 font-figtree">
                    {country.name === "United Kingdom" ? "United Kingdom (UK)" : country.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#666] line-clamp-3 mb-6 font-figtree">
                    {country.summary}
                  </p>

                  {/* Program stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100 mb-6 bg-white rounded-2xl p-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">EST. TUITION / YR</span>
                      <span className="text-sm font-bold text-gray-800 font-figtree">{country.minInvestment}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">PROCESSING SPEED</span>
                      <span className="text-sm font-bold text-gray-800 font-figtree">{country.timeframe}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedCountry(expandedCountry === country.name ? null : country.name)}
                    className="w-full bg-white border border-gray-200 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-gray-700 hover:border-[#156d95] hover:text-[#156d95] transition-all duration-200 font-figtree"
                  >
                    {expandedCountry === country.name ? "Close Details" : "View Program Details"}
                  </button>
                </div>

                {/* Dropdown details panel */}
                <AnimatePresence>
                  {expandedCountry === country.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100 bg-white"
                    >
                      <div className="p-8 space-y-5">
                        {country.name === "Europe" ? (
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                              Supported European Countries
                            </h4>
                            <div className="grid gap-3">
                              {[
                                { name: "France", flag: "🇫🇷", route: "/destinations/europe/france", desc: "English-medium business and engineering." },
                                { name: "Finland", flag: "🇫🇮", route: "/destinations/europe/finland", desc: "Top-ranked innovative learning & work rights." },
                                { name: "Italy", flag: "🇮🇹", route: "/destinations/europe/italy", desc: "Affordable public tuition structures." },
                                { name: "Ireland", flag: "🇮🇪", route: "/destinations/europe/ireland", desc: "English environment & access to tech hubs." },
                                { name: "Spain", flag: "🇪🇸", route: "/destinations/europe/spain", desc: "World-class business schools & post-study permits." },
                                { name: "Hungary", flag: "🇭🇺", route: "/destinations/europe/hungary", desc: "Accessible tuition structures and medical degrees." },
                                { name: "Netherlands", flag: "🇳🇱", route: "/destinations/europe/netherlands", desc: "Research centers & orientation year visas." },
                              ].map((ec) => (
                                <div key={ec.name} className="flex justify-between items-center bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                                  <div>
                                    <h5 className="text-sm font-bold text-gray-800">{ec.flag} {ec.name}</h5>
                                    <p className="text-[11px] text-gray-400 mt-0.5">{ec.desc}</p>
                                  </div>
                                  <Link to={ec.route} className="text-xs font-bold text-[#156d95] hover:underline whitespace-nowrap">
                                    Explore →
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="space-y-2">
                              <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                                Program Highlights
                              </h4>
                              <ul className="space-y-2">
                                {country.highlights.map((h, i) => (
                                  <li key={i} className="text-xs text-gray-700 flex items-center gap-2 font-figtree">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-4 rounded-xl font-figtree">
                              <div>
                                <span className="text-[10px] text-gray-400 font-mono block">CONSULTANCY DETAILS</span>
                                <span className="font-semibold text-gray-800 font-mono text-[10px]">JR Certified Pathways</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-gray-400 font-mono block">POST-STUDY WORK</span>
                                <span className="font-semibold text-gray-800">{country.citizenshipPath}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="text-[10px] text-gray-400 font-mono block">STUDENT WORK RIGHTS</span>
                                <span className="font-semibold text-gray-800">{country.residencyStay}</span>
                              </div>
                            </div>

                            <Link
                              to={country.route}
                              className="block text-center w-full bg-[#156d95] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200 font-figtree"
                            >
                              Explore {country.name} Pathways
                            </Link>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
