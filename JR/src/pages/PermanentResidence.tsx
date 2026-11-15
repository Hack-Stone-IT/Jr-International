import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function PermanentResidence() {
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
            Permanent Residence Visa Pathways
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Professional consultation for skilled migration and points-based permanent residency pathways.
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
              JR International provides guidance for permanent residence pathways. We specialize in evaluating qualifications, work experience, and language skills to identify potential streams. All discussions are factual and consultation-oriented; we do not guarantee immigration outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Who May Consider This Pathway</h3>
            <p className="text-[#666] leading-relaxed">
              Qualified professionals, skilled tradespeople, and international graduates who meet age, education, and language baseline criteria for points-tested streams.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Our PR Support Services</h3>
            <div className="grid gap-6">
              {[
                { title: "Profile Assessment", desc: "Calculating initial eligibility points and verifying your occupation against active skills lists." },
                { title: "Pathway Consultation", desc: "Comparing federal, state, and provincial nominations to select your optimal application route." },
                { title: "Destination Considerations", desc: "Exploring regional areas or provinces with supportive criteria for your specific field." },
                { title: "Documentation Guidance", desc: "Providing checklists for educational evaluations (ECA), employment proof, and language certificates." },
                { title: "Application & Process Support", desc: "Reviewing your draft expressions of interest (EOI) or profile submissions for accuracy." },
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
                { q: "Do you guarantee invitations to apply or PR approval?", a: "No. Invitations to apply and visa approvals are decided solely by immigration authorities based on cut-off scores and government quotas. We assist you in presenting your profile accurately." },
                { q: "How long does a typical PR process take?", a: "Processing timelines are determined by government agencies. Depending on the pathway and points pool, the timeline can vary from 6 months to over 2 years." },
                { q: "What is an ECA and is it required?", a: "An Educational Credential Assessment (ECA) is required for most skilled migration streams to prove that your foreign degrees are equivalent to the education standards of your target country." },
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
            <h4 className="font-semibold text-gray-800">Primary PR Destinations</h4>
            <div className="space-y-3">
              {["Australia", "Canada", "New Zealand"].map((dest) => (
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
              Find out if your profile meets eligibility benchmarks. Contact our advisors.
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
