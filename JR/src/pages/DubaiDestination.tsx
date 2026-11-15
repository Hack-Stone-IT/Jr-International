import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function DubaiDestination() {
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
            Study & Visa Pathways in Dubai / UAE
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for international branch campuses and student sponsor permits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Dubai Overview</h2>
            <p className="text-[#666] leading-relaxed">
              Dubai, an emirate within the United Arab Emirates (UAE), has developed into a dynamic hub for international higher education, hosting branch campuses of leading British, Australian, and American universities. Benefiting from tax-free graduate job opportunities and support for entrepreneurship, Dubai represents a structured academic and career pathway.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              Dubai is ideal for students seeking degrees from top-tier international branch campuses without leaving the region, candidates targeting tax-free corporate job markets, and applicants looking for simplified, university-sponsored study permits.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Eligibility Overview</h3>
            <div className="space-y-3 text-sm text-gray-500 font-figtree">
              <p>Applicants for a Dubai Student Visa must meet several core criteria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>University Sponsorship:</strong> A valid Offer of Admission from a licensed university inside Dubai's education clusters (such as Dubai International Academic City - DIAC).</li>
                <li><strong>Academic Credentials:</strong> Attested high school or university transcripts matching the admission guidelines.</li>
                <li><strong>Medical Fitness Test:</strong> All applicants over 18 must pass a mandatory medical screening (for TB and blood-borne pathogens) once inside the UAE.</li>
                <li><strong>Tuition Payment Proof:</strong> Payment of the required tuition deposit and student visa administrative fees.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                <li>Valid Passport</li>
                <li>Official Offer Letter (from a licensed branch campus)</li>
                <li>Attested Academic Transcripts & Certificates</li>
                <li>Tuition Deposit Receipt</li>
                <li>Copy of current visa / Entry Permit (if inside UAE)</li>
                <li>Medical Fitness Test Clearance Certificate</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be requested depending on your circumstances.</em></p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Application Process</h3>
            <div className="space-y-4 font-figtree">
              {[
                { step: "01", title: "Admissions & Deposit", desc: "Submit your academic credentials to your selected university in Dubai and pay your course registration deposit." },
                { step: "02", title: "Visa File Initiation", desc: "The university submits a visa sponsorship application to the UAE immigration authorities on your behalf." },
                { step: "03", title: "Entry Permit Collection", desc: "Upon approval, receive your digital Entry Permit to travel to Dubai for study registration." },
                { step: "04", title: "Medical Fitness Test", desc: "Complete the mandatory medical fitness screening at a government-certified health clinic in Dubai." },
                { step: "05", title: "Emirates ID & Visa Stamping", desc: "Provide biometrics, obtain your official Emirates ID, and have your Student Residence Visa issued." }
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
              <a href="https://gdrfad.gov.ae" target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                General Directorate of Residency and Foreigners Affairs Dubai / GDRFAD (gdrfad.gov.ae)
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
                <a href="https://gdrfad.gov.ae/en/services?id=38e6e580-c116-11ec-aefd-00505685bb34" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
                  Check Official Status
                </a>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Work Rights</span>
                <span className="font-bold text-gray-700">Subject to current UAE laws</span>
              </div>
            </div>
          </div>

          <div className="bg-[#156d95] text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-lg">Discuss Options</h4>
            <p className="text-xs text-white/80 leading-relaxed font-figtree">
              Explore admissions and sponsor pathways with our specialist advisors.
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
