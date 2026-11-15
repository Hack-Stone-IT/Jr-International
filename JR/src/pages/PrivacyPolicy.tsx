import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Our guidelines and protocols for protecting your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-3xl mx-auto space-y-8 text-gray-600 leading-relaxed">
        <div className="bg-[#fafafa] border border-gray-100 rounded-3xl p-6 mb-8 text-xs text-gray-500 italic">
          Disclaimer: This policy template is for informational purposes only. The final legal copy must be reviewed and approved by the client's legal counsel to ensure complete local regulatory compliance.
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">1. Information Collection</h2>
          <p>
            We collect personal information that you voluntarily submit to us through our consultation wizard, contact forms, and email channels. This includes your name, email address, phone number, preferred study destinations, and current academic or migration goals.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">2. Form & Assessment Submissions</h2>
          <p>
            Information submitted via the consultation wizard is utilized exclusively to evaluate your potential eligibility for student, visitor, work, or permanent residency pathways. This data is reviewed strictly by our internal consultants and academic advisors.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">3. Cookies & Analytics</h2>
          <p>
            We use essential cookies to maintain site performance and support interactive features like the Consultation Wizard and interactive map. Basic traffic analytics may be collected anonymously to evaluate layout performance.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">4. Third-Party Services & Data Retention</h2>
          <p>
            Your information is never sold to third-party databases. It is retained only for the duration required to satisfy your consultation request or to coordinate admissions files with your selected educational institutions.
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">5. Your Data Access & Contact</h2>
          <p>
            You have the right to request a copy of the personal profile information we retain, or to ask for your contact history to be removed from our active database. For all privacy inquiries, please contact our data compliance officer at <a href="mailto:jrinternationalpatan@gmail.com" className="text-[#156d95] hover:underline font-semibold">jrinternationalpatan@gmail.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
