import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function CanadaDestination() {
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
            Study & Visa Pathways in Canada
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for study permits, Post-Graduate Work Permits, and provincial selection.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Canada Overview</h2>
            <p className="text-[#666] leading-relaxed">
              Canada is globally recognized for high educational standards, an welcoming student environment, and diverse communities. The Post-Graduate Work Permit (PGWP) provides graduates valuable work experience that can enhance potential scores for federal Express Entry or Provincial Nominee Programs (PNP).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              Canada is ideal for candidates seeking English-taught university degrees or applied college diplomas, graduates aiming for structured post-study open work rights, and applicants targeting express skilled migration points-systems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Eligibility Overview</h3>
            <div className="space-y-3 text-sm text-gray-500 font-figtree">
              <p>Applicants for a Canadian Study Permit must meet several core criteria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Designated Learning Institution (DLI):</strong> An official Letter of Acceptance (LOA) from a DLI university or college.</li>
                <li><strong>Provincial Attestation Letter (PAL):</strong> A provincial allocation certificate, where applicable under current IRCC policy.</li>
                <li><strong>Financial capacity:</strong> Direct evidence of funding, typically verified via a Guaranteed Investment Certificate (GIC) to cover living costs, plus proof of tuition.</li>
                <li><strong>Language Proficiency:</strong> Standardized test results (typically IELTS Academic or PTE Academic).</li>
                <li><strong>Medical & Police Clearances:</strong> Health screening and background check compliance.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                <li>Valid Passport</li>
                <li>DLI Letter of Acceptance (LOA)</li>
                <li>Provincial Attestation Letter (PAL)</li>
                <li>GIC (Guaranteed Investment Certificate) Receipt</li>
                <li>Proof of Tuition Fee Payment</li>
                <li>Language Test Score Sheet (IELTS/PTE)</li>
                <li>Academic Transcripts & Certificates</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be requested depending on your circumstances.</em></p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Application Process</h3>
            <div className="space-y-4 font-figtree">
              {[
                { step: "01", title: "College/University Admission", desc: "Select a Designated Learning Institution, submit academic credentials, and obtain a Letter of Acceptance." },
                { step: "02", title: "Provincial Attestation", desc: "Secure a Provincial Attestation Letter (PAL) through your institution, where required by current regulations." },
                { step: "03", title: "GIC & Financial Setup", desc: "Purchase a Guaranteed Investment Certificate (GIC) from a participating Canadian financial institution and pay your initial tuition." },
                { step: "04", title: "Study Permit Lodgement", desc: "Compile all transcripts, financial receipts, and lodge your study permit application digitally via the IRCC portal." },
                { step: "05", title: "Biometrics & POE Letter", desc: "Provide biometrics at an authorized Visa Application Centre (VAC) and, upon approval, receive your Port of Entry (POE) letter." }
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
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                Immigration, Refugees and Citizenship Canada / IRCC (canada.ca)
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
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
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
              Verify your study permit eligibility and course pathways with our professional advisors.
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
