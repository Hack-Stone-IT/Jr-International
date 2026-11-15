import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, Calendar } from "lucide-react"
import { Link } from "react-router-dom"

export default function IntakeCalendar() {
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
            Intake Calendar
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Application deadlines, semester schedules, and intake periods across destinations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-3xl mx-auto space-y-12">
        <div className="border border-dashed border-gray-300 rounded-[40px] p-12 text-center bg-[#fafafa] space-y-4">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-800">Intake Timelines & Deadlines</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Intake schedules vary widely by country, institution, and individual programs. Typically, major intakes occur in Fall (August/September) and Spring (January/February). We recommend contacting your counselor to check specific schedules and start your applications at least 6-8 months in advance.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="inline-block bg-[#156d95] text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:rounded-2xl transition-all duration-200">
              Query Deadlines
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
