import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function AustraliaDestination() {
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
            Study & Visa Pathways in Australia
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for subclass 500 student permits and postgraduate work streams.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Australia Overview</h2>
            <p className="text-[#666] leading-relaxed">
              Australia is home to leading global universities, renowned for research output, teaching standards, and student satisfaction. With favorable post-study work authorization via subclass 485 and regional migration options, Australia is a premier destination for students and skilled professionals.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Who This Destination Suits</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-figtree">
              Australia is ideal for students seeking top-tier academic research and modern campus environments, vocational candidates targeting hands-on technical qualifications, and professionals interested in regional points-tested skilled migration programs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Eligibility Overview</h3>
            <div className="space-y-3 text-sm text-gray-500 font-figtree">
              <p>Applicants for the Subclass 500 Student Visa must satisfy several legal requirements:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Confirmation of Enrolment (CoE):</strong> Full-time enrollment in a course registered under the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS).</li>
                <li><strong>Genuine Student (GS) Requirement:</strong> A comprehensive assessment showing genuine intent to study in Australia.</li>
                <li><strong>English Proficiency:</strong> Valid scores in recognized tests (typically IELTS 6.0–6.5 or equivalent PTE Academic).</li>
                <li><strong>Financial Capacity:</strong> Factual proof of funds to cover annual tuition fees, living expenses, and return travel.</li>
                <li><strong>Health & Character:</strong> Overseas Student Health Cover (OSHC) and medical examination clearances.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Common Documents Checklist</h3>
            <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-[24px] space-y-3 text-sm text-gray-500 font-figtree">
              <p>Typical documents may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc">
                <li>Valid Passport</li>
                <li>Official CoE (Confirmation of Enrolment)</li>
                <li>Academic Transcripts & Certificates</li>
                <li>English Proficiency Test Report (IELTS/PTE)</li>
                <li>OSHC Certificate (Health Cover)</li>
                <li>Financial Statements & Proof of Income</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2"><em>Note: Additional documents may be requested depending on your circumstances.</em></p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Application Process</h3>
            <div className="space-y-4 font-figtree">
              {[
                { step: "01", title: "Course Admission", desc: "Select a CRICOS-registered provider and course, submit academic documents, and secure an official Offer Letter." },
                { step: "02", title: "Deposit & CoE", desc: "Pay the required university deposit to secure your seat and receive your Confirmation of Enrolment (CoE) certificate." },
                { step: "03", title: "OSHC & Health Checks", desc: "Purchase mandatory Overseas Student Health Cover (OSHC) and complete standard medical screenings." },
                { step: "04", title: "Visa Lodgement", desc: "Assemble document checklists and lodge your Subclass 500 visa application digitally via the ImmiAccount portal." },
                { step: "05", title: "Biometrics & Final Decision", desc: "Attend a biometrics appointment at an authorized center and wait for official processing results." }
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
              <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#156d95] hover:underline">
                Australian Department of Home Affairs (immi.homeaffairs.gov.au)
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
                <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#156d95] hover:underline font-mono mt-0.5 block">
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
              Verify your subclass eligibility and course pathways with our professional advisors.
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
