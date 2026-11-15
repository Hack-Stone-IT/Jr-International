import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Please read these terms and conditions carefully before utilizing our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-3xl mx-auto space-y-8 text-gray-600 leading-relaxed font-figtree">
        <div className="bg-[#fafafa] border border-gray-150 p-6 rounded-3xl text-xs text-gray-500 italic mb-8">
          Last updated: August 2026. These terms govern the use of JR International's website and general advisory materials.
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">1. Scope of Advisory Services</h2>
          <p>
            JR International provides academic counseling and visa application preparation support. All guidance, checklist templates, and advice provided through our digital channels represent administrative support. JR International does not submit visa requests as a legal representative unless formally engaged through a separate signed client agreement.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">2. No Guarantees of Admission or Visa Issuance</h2>
          <p>
            Admissions decisions are made exclusively by the respective educational institutions, and visa issuance decisions are made exclusively by the relevant government immigration authorities (such as IRCC for Canada or Home Affairs for Australia). JR International cannot control, influence, or guarantee the outcome of any application. No consultant or advisor is authorized to promise guaranteed outcomes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">3. Factual Accuracy & Client Responsibility</h2>
          <p>
            It is the applicant's sole responsibility to ensure that all academic credentials, financial records, employment histories, and personal details provided during counseling and final lodgements are completely authentic and accurate. Providing false or fabricated documents violates legal frameworks and will result in immediate termination of services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">4. Independent Fees & Third-Party Charges</h2>
          <p>
            Government application fees, biometrics, health assessments, translation fees, tuition costs, and health insurance are charged independently by third-party authorities and providers. These fees are subject to changes beyond the control of JR International. All fee guides displayed on our website are general estimates and should be verified against official fee schedules before submission.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
