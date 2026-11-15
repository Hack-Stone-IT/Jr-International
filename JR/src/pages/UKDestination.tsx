import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function UKDestination() {
  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link to="/countries" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>
          <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-serif">
            Study & Visa Pathways in the UK
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for student visas, post-study Graduate Route, and skilled sponsor tracks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">United Kingdom Overview</h2>
            <p className="text-[#666] leading-relaxed">
              The United Kingdom hosts some of the world's most historic and prestigious academic institutions, providing degrees recognized by top-tier employers globally. The Graduate Route visa offers a post-study stay of up to 2 years (3 years for PhDs) without sponsor constraints.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              The UK is ideal for candidates seeking intensive, fast-tracked degrees (such as 1-year Master's programs), academic pedigree, and proximity to London's international financial, tech, and cultural hubs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Eligibility Overview</h3>
            <div className="space-y-3 text-sm text-gray-500 font-figtree">
              <p>Applicants for a UK Student Visa must meet several legal requirements:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Confirmation of Acceptance for Studies (CAS):</strong> A unique reference number issued by a licensed student sponsor institution.</li>
                <li><strong>Financial Proof:</strong> Factual evidence of funds to cover outstanding tuition fees plus UKVI-specified monthly maintenance expenses.</li>
                <li><strong>Healthcare Surcharge:</strong> Payment of the mandatory Immigration Health Surcharge (IHS) for medical access.</li>
                <li><strong>English Proficiency:</strong> Valid test scores (typically IELTS Academic or PTE Academic) that satisfy institutional requirements.</li>
                <li><strong>Tuberculosis Certificate:</strong> A valid clearance certificate, if applying from specific designated locations.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                <li>Valid Passport</li>
                <li>CAS (Confirmation of Acceptance for Studies) Statement</li>
                <li>Academic Transcripts & Qualifications</li>
                <li>English Proficiency Test Certificate (IELTS/PTE)</li>
                <li>Tuberculosis (TB) Test Certificate (if required)</li>
                <li>Financial Evidence & Bank Statements</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be requested depending on your circumstances.</em></p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Application Process</h3>
            <div className="space-y-4 font-figtree">
              {[
                { step: "01", title: "University Admission & CAS", desc: "Apply to a licensed UK student sponsor university, submit academic credentials, and obtain your official CAS reference code." },
                { step: "02", title: "Financial & Health Checks", desc: "Verify that your bank statements satisfy holding period rules, and undergo TB screening if required." },
                { step: "03", title: "Immigration Surcharge", desc: "Submit your online profile details and pay the mandatory Immigration Health Surcharge (IHS) for NHS access." },
                { step: "04", title: "Visa Lodgement", desc: "Assemble document checklists and lodge your student visa application digitally via the GOV.UK portal." },
                { step: "05", title: "Biometrics & Collection", desc: "Attend a biometrics appointment at an authorized center and collect your passport with entry vignette upon approval." }
              ].map((p, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#fafafa] border border-gray-100 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0 text-[#156d95] font-bold text-sm font-mono">
                    {p.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{p.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Source & Disclaimer */}
          <div className="p-6 border border-gray-200 rounded-[24px] space-y-4 text-xs text-gray-400 font-mono">
            <div>
              <span className="block font-bold text-gray-500">OFFICIAL GOVERNMENT SOURCE:</span>
              <a href="https://www.gov.uk/government/organisations/uk-visas-and-immigration" target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                UK Visas and Immigration / UKVI (gov.uk)
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

        {/* Right sidebar options */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Metrics</h4>
            <div className="space-y-3 text-sm font-figtree">
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Est. Baseline Cost</span>
                <span className="font-bold text-gray-700">Check current requirements</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Processing Speed</span>
                <span className="font-bold text-gray-700 block">Varies by Profile</span>
                <a href="https://www.gov.uk/guidance/visa-processing-times-applications-outside-the-uk" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
                  Check Official Times
                </a>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Work Rights</span>
                <span className="font-bold text-gray-700">Subject to current visa rules</span>
              </div>
            </div>
          </div>

          <div className="bg-[#156d95] text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-lg">Discuss Options</h4>
            <p className="text-xs text-white/80 leading-relaxed font-figtree">
              Plan your UK university placement and visa file with our advisory team.
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
