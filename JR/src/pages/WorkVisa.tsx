import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function WorkVisa() {
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
            Work Visa Advisory
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Expert consultation for employer-sponsored and temporary work permits.
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
              JR International offers consultation services for work visas and permit applications. We help candidates understand visa regulations, employer sponsorship procedures, and skills assessments. We do not provide job placement services, nor do we promise employment outcomes or visa approvals.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Who This Service Is For</h3>
            <p className="text-[#666] leading-relaxed">
              Designed for skilled professionals, intra-company transferees, and graduates with active job offers who need to navigate temporary or long-term employer-sponsored work permits.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Our Work Visa Services</h3>
            <div className="grid gap-6">
              {[
                { title: "Profile Assessment", desc: "Evaluating your qualifications, work tenure, and language scores against current skills-in-demand criteria." },
                { title: "Pathway Consultation", desc: "Analyzing sponsorship streams, post-study work permits, and regional job-seeker visa regulations." },
                { title: "Documentation Guidance", desc: "Assisting with checklists for employment verification letters, pay slips, qualifications assessments, and police logs." },
                { title: "Application Preparation", desc: "Compiling forms and advising on sponsor submission requirements for the target visa office." },
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
                { q: "Can you help me find a job or arrange sponsorship?", a: "No. JR International is a visa and admissions advisory, not an employment agency. Candidates must secure their job offer independently; we assist strictly with the visa compliance phase." },
                { q: "Do you guarantee visa approval if I have a job offer?", a: "No. The final decision rests entirely with destination government authorities. Having a job offer is a prerequisite for sponsor streams, but other personal eligibility elements are also evaluated." },
                { q: "What is a skills assessment?", a: "A skills assessment is an evaluation by a designated assessing authority to confirm that your professional skills match the local occupational standards of your target country." },
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
            <h4 className="font-semibold text-gray-800">Supported Destinations</h4>
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
              Speak to our consultants regarding sponsor requirements and document compliance.
            </p>
            <Link to="/contact" className="block text-center bg-white text-[#156d95] py-2.5 rounded-full text-xs font-bold uppercase hover:rounded-2xl transition-all duration-200">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
