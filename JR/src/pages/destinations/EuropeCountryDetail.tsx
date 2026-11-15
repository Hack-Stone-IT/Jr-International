import { useParams, Navigate, Link } from "react-router-dom"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { europeCountries, europeIntakeCampaign } from "@/lib/europeData"

export default function EuropeCountryDetail() {
  const { countrySlug } = useParams<{ countrySlug: string }>()
  
  const country = europeCountries.find((c) => c.slug === countrySlug)
  
  // Enforce lock: only allow the seven client-approved European countries
  if (!country) {
    return <Navigate to="/destinations/europe" replace />
  }

  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link to="/destinations/europe" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Europe Hub
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-4xl">{country.flag}</span>
            <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-serif">
              Study & Settle in {country.name}
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Explore English-medium academic programs and structured visa paths in {country.name}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="md:col-span-8 space-y-12">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Overview</h2>
            <p className="text-[#666] leading-relaxed">
              {country.description} We offer specialized counseling to help you navigate admissions checklists, visa filings, and post-study opportunities in {country.name}.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              {country.whoItSuits}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Destination Highlights</h3>
            <div className="grid gap-4">
              {country.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#fafafa] border border-gray-100 rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-[#156d95] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Documents */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents required for {country.name} study visas include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                {country.commonDocuments.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be required depending on your circumstances.</em></p>
            </div>
          </div>

          {/* Service Pathways */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Visa Pathways & Supported Services</h3>
            <div className="grid gap-6">
              {[
                { type: "Student Visa", details: country.availableServices.student, note: "Admissions counseling and document checklists." },
                { type: "Work Visa", details: country.availableServices.work, note: "Orientation and post-study transition guidance." },
                { type: "Visitor Visa", details: country.availableServices.visitor, note: "Document preparation and compliance checks." },
                { type: "Permanent Residence", details: country.availableServices.pr, note: "Long-term pathways and eligibility discussion." },
              ].map((svc, idx) => (
                <div key={idx} className="p-6 border border-gray-200 rounded-[24px] space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">{svc.type}</h4>
                  <p className="text-sm font-semibold text-[#156d95]">{svc.details}</p>
                  <p className="text-xs text-gray-400">{svc.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">{country.name} Specific FAQs</h3>
            <div className="space-y-4">
              {country.faq.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 space-y-1">
                  <h4 className="font-semibold text-gray-800 flex items-start gap-2">
                    <span className="text-[#156d95]">Q.</span> {faq.q}
                  </h4>
                  <p className="text-sm text-gray-500 pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Source & Disclaimer */}
          <div className="p-6 border border-gray-200 rounded-[24px] space-y-4 text-xs text-gray-400 font-mono">
            <div>
              <span className="block font-bold text-gray-500">OFFICIAL GOVERNMENT SOURCE:</span>
              <a href={country.officialSource.url} target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                {country.officialSource.name} ({country.officialSource.url.replace("https://", "")})
              </a>
            </div>
            <div>
              <span className="block font-bold text-gray-500">DISCLAIMER:</span>
              Visa requirements, processing times, fees, and eligibility criteria can change and vary according to individual circumstances. Information on this page is for general guidance and should be checked against official government sources before submitting an application. Visa decisions are made solely by the relevant government authority and cannot be guaranteed by JR International.
            </div>
            <div className="text-right text-[10px] text-gray-400">
              Information verified: August 2026
            </div>
          </div>
        </div>

        {/* Right Column / Sidebar */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Metrics</h4>
            <div className="space-y-3 text-sm font-figtree">
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Est. Tuition Fees</span>
                <span className="font-bold text-gray-700">{country.minTuition}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Processing Speed</span>
                <span className="font-bold text-gray-700 block">Varies by Profile</span>
                <a href={country.officialSource.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
                  Check Official Times
                </a>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Part-Time Rights</span>
                <span className="font-bold text-gray-700">{country.stayRights}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-gray-800">Intake Information</h4>
            <div className="font-figtree">
              <span className="text-gray-400 block uppercase text-[10px]">Campaign Intake</span>
              <span className="font-bold text-[#156d95] block text-sm mt-1">{europeIntakeCampaign.currentIntake}</span>
              <span className="text-xs text-gray-400 block mt-1">{europeIntakeCampaign.deadlineNote}</span>
            </div>
          </div>

          <div className="bg-[#156d95] text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-lg">Discuss Options</h4>
            <p className="text-xs text-white/80 leading-relaxed font-figtree">
              Verify your admissions criteria and visa timelines for {country.name} with our consultants.
            </p>
            <Link to="/contact" className="block text-center bg-white text-[#156d95] py-2.5 rounded-full text-xs font-bold uppercase hover:rounded-2xl transition-all duration-200">
              Book Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
