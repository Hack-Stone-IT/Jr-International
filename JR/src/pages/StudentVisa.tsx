import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function StudentVisa() {
  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-serif">
            Student Visa Pathways
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive academic counseling and study visa advisory for students pursuing higher education abroad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Core details */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Overview & Approach</h2>
            <p className="text-[#666] leading-relaxed">
              JR International assists clients interested in pursuing high-quality education overseas. Our professional counseling services help align academic aspirations with career objectives, ensuring compliance with student visa requirements across our approved destinations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Who This Service Is For</h3>
            <p className="text-[#666] leading-relaxed">
              Designed for high school graduates, university students, and professionals seeking global undergraduate or post-graduate degree programs, language courses, or technical diplomas.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Our Support Lifecycle</h3>
            <div className="grid gap-6">
              {[
                { title: "Profile Assessment", desc: "Evaluating your qualifications, GPA, and language abilities to ensure direct entry compliance." },
                { title: "Education & Course Guidance", desc: "Selecting programs that align with your background and long-term career goals." },
                { title: "Institution Guidance", desc: "Guiding you through admissions criteria at recognized schools in target countries." },
                { title: "Documentation Guidance", desc: "Supporting you with guidelines for financial capacity proofs, transcripts, and Statement of Purpose (SOP) reviews." },
                { title: "Application & Lodgement Support", desc: "Reviewing admissions applications and guiding you through final student visa submission protocols." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#fafafa] border border-gray-100 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0 text-[#156d95] font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: "Can I work while studying abroad?", a: "Most primary destinations allow students to work part-time during term time and full-time during official university vacations, subject to local visa conditions and hours limits." },
                { q: "What is the typical processing time for a student visa?", a: "Processing speeds vary widely depending on the target destination, visa category, intake timing, and completeness of documents. We check current official government processing times for updates." },
                { q: "Do you guarantee visa approval?", a: "No. Visa issuance is exclusively determined by embassy officials. JR International provides document compliance review and preparation assistance to present your case clearly." },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 space-y-1">
                  <h4 className="font-semibold text-gray-800 flex items-start gap-2">
                    <span className="text-[#156d95]">Q.</span> {faq.q}
                  </h4>
                  <p className="text-sm text-gray-500 pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar options */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-6">
            <h4 className="font-semibold text-gray-800">Approved Destinations</h4>
            <div className="space-y-3">
              {["Australia", "Canada", "New Zealand", "UK", "Europe", "Dubai / UAE"].map((dest) => (
                <div key={dest} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#156d95]" />
                  {dest}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#156d95] text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-lg">Discuss Options</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Plan your pathway with our consultants. Schedule a personalized academic profile assessment.
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
