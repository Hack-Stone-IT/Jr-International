import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"

export default function Careers() {
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
            Careers at JR International
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Join our dedicated team of admissions counselors, visa advisors, and operations specialists.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Core details */}
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#202020]">Why Work With Us</h2>
            <p className="text-[#666] leading-relaxed">
              At JR International, we support students and professionals seeking international education and migration pathways. We value compliance, transparency, and a client-first advisory model.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#202020]">Our Culture</h3>
            <p className="text-[#666] leading-relaxed">
              We operate from our head office in Patan, Gujarat, offering a collaborative environment that values continuous professional training in global immigration standards and admissions rules.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#202020]">Current Opportunities</h3>
            <div className="border border-dashed border-gray-300 rounded-[32px] p-8 text-center bg-[#fafafa] space-y-3">
              <Briefcase className="w-8 h-8 text-gray-400 mx-auto" />
              <h4 className="font-bold text-gray-700">No Current Openings</h4>
              <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                We are not actively hiring at the moment. Please check back later or submit a general application file.
              </p>
              <div className="text-xs text-gray-400 font-mono">
                General applications are reviewed on a rolling basis. Positions will be posted here as they become available.
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar options */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-3xl space-y-4">
            <h4 className="font-semibold text-gray-800">General Applications</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              If you wish to submit an expression of interest for future counseling roles, please email your resume details to:
            </p>
            <a href="mailto:jrinternationalpatan@gmail.com" className="text-xs font-mono text-[#156d95] break-all hover:underline block">
              jrinternationalpatan@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
