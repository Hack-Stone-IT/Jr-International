import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

export default function ScholarshipGuides() {
  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-serif">
            Scholarship Guides
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Overview of international student scholarship categories, eligibility rules, and application advice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#202020]">Overview & Eligibility</h2>
          <p className="text-[#666] leading-relaxed">
            Most destination countries offer academic merit scholarships, research grants, or government-funded awards for international students. JR International assists applicants in identifying scholarship potential during profile assessments, ensuring requirements are integrated into university submission schedules.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Academic Merit Awards", desc: "Offered directly by host universities to students with outstanding entry GPA scores or language evaluations." },
            { title: "Government Fellowships", desc: "State-funded grants targeting research candidates or international exchange students." },
            { title: "Bursaries & Grants", desc: "Need-based financial aid or country-specific fee concessions offered at select colleges." },
            { title: "Research Assistantships", desc: "Positions for doctoral or master's by research candidates that provide monthly stipends." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[#fafafa] border border-gray-100 rounded-2xl space-y-2">
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-dashed border-gray-300 rounded-[32px] p-10 text-center bg-[#fafafa] space-y-4">
          <BookOpen className="w-8 h-8 text-gray-400 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800">Scholarship Listings Database</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Specific university awards, national grant directories, and deadline calendars will be updated once client-verified data profiles are supplied.
          </p>
          <div className="text-xs text-gray-400 font-mono">
            Please contact a JR International counselor for direct assessment of scholarship opportunities matching your profile.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
