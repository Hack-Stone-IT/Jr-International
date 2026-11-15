import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function NewZealandDestination() {
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
            Study & Visa Pathways in New Zealand
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for study permits, Green List pathways, and post-study work permits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">New Zealand Overview</h2>
            <p className="text-[#666] leading-relaxed">
              New Zealand is globally respected for top-ranked universities, highly welcoming communities, and beautiful natural environments. The country offers competitive post-study work opportunities and structured Skilled Migrant Category pathways, including the Green List, for eligible graduates.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              New Zealand is ideal for students seeking quality university education or specialized vocational courses in a supportive environment, and graduates targeting pathways aligned with the national Green List skill shortage registry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Eligibility Overview</h3>
            <div className="space-y-3 text-sm text-gray-500 font-figtree">
              <p>Applicants for a New Zealand Student Visa must satisfy several baseline criteria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Offer of Place:</strong> An official Offer of Place from an education provider approved by the New Zealand Qualifications Authority (NZQA).</li>
                <li><strong>Tuition Payment:</strong> Factual proof that tuition fees have been paid for the first year or course duration.</li>
                <li><strong>Financial Capacity:</strong> Evidence of sufficient funds (typically NZ$20,000 per year of study, or under current Immigration New Zealand standards) to support yourself.</li>
                <li><strong>Language Proficiency:</strong> Valid scores in recognized tests (typically IELTS Academic or PTE Academic).</li>
                <li><strong>Medical & Character Check:</strong> Chest X-ray and medical certificates (if staying longer than 12 months) and police clearances.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                <li>Valid Passport</li>
                <li>Official Offer of Place (NZQA Approved)</li>
                <li>Receipt for Tuition Fee Payment</li>
                <li>Financial Statements & Proof of Income</li>
                <li>Language Test Score Sheet (IELTS/PTE)</li>
                <li>Medical/Chest X-Ray Certificates</li>
                <li>Police Clearance Certificates</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be requested depending on your circumstances.</em></p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Application Process</h3>
            <div className="space-y-4 font-figtree">
              {[
                { step: "01", title: "Course Admission", desc: "Select an NZQA-approved education provider and course, submit academic documents, and secure an Offer of Place." },
                { step: "02", title: "Tuition Payment", desc: "Transfer your tuition fees directly to the education provider and collect an official payment receipt." },
                { step: "03", title: "Medical Checks", desc: "Schedule required chest X-ray and medical examinations with approved panel physicians." },
                { step: "04", title: "Visa Submission", desc: "Assemble required documentation checklists and submit your student visa application digitally via the Immigration NZ portal." },
                { step: "05", title: "eVisa Issuance", desc: "Wait for processing and verification, and receive your digital eVisa permitting travel and study." }
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
              <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                Immigration New Zealand (immigration.govt.nz)
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
                <a href="https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/deciding-how-to-apply/visa-processing-times" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
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
              Verify your visa eligibility and Green List pathways with our professional advisors.
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
