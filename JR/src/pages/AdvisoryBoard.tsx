import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function AdvisoryBoard() {
  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link to="/about" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to About
          </Link>
          <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-serif">
            Advisory Board
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Our governing advisory panel overseeing student compliance and legal migration strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto space-y-12">
        <div className="border border-dashed border-gray-300 rounded-[40px] p-12 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto text-[#156d95] text-2xl font-bold font-mono">
            ?
          </div>
          <h3 className="text-2xl font-bold text-gray-800 font-figtree">Advisory Panel Under Review</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Advisory board biographies and oversight credentials are currently being finalized. Genuine profile details and compliance certifications will be published once fully verified.
          </p>
          <div className="pt-4">
            <Link to="/about" className="text-xs font-bold font-mono text-[#156d95] hover:underline flex items-center justify-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to About Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
