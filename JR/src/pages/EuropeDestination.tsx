import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function EuropeDestination() {
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
            Study & Visa Pathways in Europe
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Comprehensive counseling for English-taught programs and Schengen student visa pathways.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Europe Overview</h2>
            <p className="text-[#666] leading-relaxed">
              Europe offers high-quality, English-taught degree options across leading Schengen nations. From low-cost public tuition models in Germany and France to premium business courses in the Netherlands and Spain, Europe provides an outstanding academic foundation combined with cross-border travel freedom and graduate work permits.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Supported Pathways</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2">National Student Visas</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Visas issued by individual European states for duration of courses, enabling entry into the Schengen zone.
                </p>
              </div>
              <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2">Graduate Job Seeker Permits</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Post-study work streams (typically 12 to 18 months depending on host nation) to look for professional employment.
                </p>
              </div>
              <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2">Schengen Visitor Visas</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Short-stay visitor authorizations enabling tourism or business visits across 27 Schengen countries.
                </p>
              </div>
              <div className="p-6 bg-[#fafafa] border border-gray-100 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2">Work & Residency Streams</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Varies by host country (e.g. EU Blue Card and country-specific skilled worker regulations).
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: "Are English-taught courses widely available in Europe?", a: "Yes, thousands of international Bachelor's and Master's degrees are taught entirely in English, particularly in fields like engineering, business, and tech." },
                { q: "Is language proficiency required in the local language?", a: "Admissions require English proficiency tests (IELTS/PTE), but basic knowledge of the local language is highly beneficial for daily integration and post-graduate job search." },
                { q: "What is the typical tuition cost?", a: "Public universities in some European states charge minimal administrative fees, while private universities and business schools range from €10,000 to €25,000 per year." },
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

        {/* Right sidebar options */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Metrics</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Est. Tuition Fees</span>
                <span className="font-bold text-gray-700">€10,000 - €25,000 / Yr</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Processing Speed</span>
                <span className="font-bold text-gray-700">4 - 8 Weeks</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase text-[10px]">Part-Time Rights</span>
                <span className="font-bold text-gray-700">Varies (Often 20 Hrs/Wk)</span>
              </div>
            </div>
          </div>

          <div className="bg-[#156d95] text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-lg">Discuss Options</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Find English-taught programs in your field across European destinations.
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
