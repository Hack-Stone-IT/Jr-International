import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function VisitorVisa() {
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
            Visitor Visa Services
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Professional travel visa preparation and document checklist advisory.
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
              JR International provides visitor visa preparation support. We review your travel intent, local ties, and financial records to ensure compliance with consulate requirements. All applications are subject to regulatory assessments, and we do not guarantee approvals.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Who This Service Is For</h3>
            <p className="text-[#666] leading-relaxed">
              For travelers, families, parents of international students, or corporate professionals visiting Australia, Canada, New Zealand, the UK, Europe, or Dubai for tourism, business visits, or short-term family reunions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Our Visitor Visa Services</h3>
            <div className="grid gap-6">
              {[
                { title: "Consultation & Eligibility", desc: "Verifying your travel intent and identifying the most suitable visitor subclass for your profile." },
                { title: "Profile Assessment", desc: "Reviewing employment ties, assets, and previous travel history to reinforce the genuine temporary entry claim." },
                { title: "Documentation Guidance", desc: "Providing checklists for required financial proofs, sponsor invitations, tax filings, and hotel/flight itineraries." },
                { title: "Application Preparation", desc: "Assisting with portal registrations, online form filings, and document organization prior to lodgement." },
                { title: "Submission Support", desc: "Scheduling biometrics appointments and explaining payment channels for consulate fees." },
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
                { q: "Do you guarantee visitor visa approval?", a: "No. Only the respective embassy or high commission has the authority to issue or deny visas. Our role is to ensure your documents are prepared in strict compliance with official guidelines." },
                { q: "What documents are most critical for a visitor visa?", a: "Proof of financial capacity (bank statements), stable employment, and strong ties to your home country (such as family, property, or ongoing business) are critical to establish travel intent." },
                { q: "Can I extend my visitor visa while abroad?", a: "Extension rules vary depending on the destination and the subclass. Some countries permit online extension filings if submitted before the current visa expires." },
                { q: "Can I work under a visitor visa?", a: "No. Visitor visas are strictly for short-term travel, family visits, or business meetings. Engaging in local employment or work under a visitor visa is strictly prohibited across all destinations." },
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
              Verify your documentation with our consultants before submitting.
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
