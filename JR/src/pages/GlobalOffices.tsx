import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { companyContact } from "@/lib/contact"

export default function GlobalOffices() {
  const offices = [
    {
      city: "Patan, Gujarat (Head Office)",
      address: companyContact.address,
      phone: `${companyContact.phone} / ${companyContact.whatsapp} (WhatsApp)`,
      email: companyContact.email,
      hours: "Monday - Saturday (09:00 - 18:00 IST)",
    },
  ]

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
            Office Chambers
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl font-light">
            Contact information, working hours, and physical address for our head office in Patan, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 max-w-5xl mx-auto space-y-12">
        <div className="grid gap-8 md:grid-cols-3">
          {offices.map((office, idx) => (
            <div key={idx} className="p-8 bg-[#fafafa] border border-[#e5e5e5] rounded-[32px] space-y-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800">{office.city}</h3>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#156d95] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">ADDRESS</span>
                    <span className="block">{office.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#156d95] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">TELEPHONE</span>
                    <span className="block">{office.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#156d95] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">EMAIL</span>
                    <span className="block">{office.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#156d95] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">OFFICE HOURS</span>
                    <span className="block">{office.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center max-w-xl mx-auto space-y-4">
          <h4 className="text-xl font-bold text-[#202020]">Need Immediate Guidance?</h4>
          <p className="text-sm text-gray-500">
            Submit your queries directly to our primary counseling division through the digital contact interface.
          </p>
          <Link to="/contact" className="inline-block bg-[#156d95] text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:rounded-2xl transition-all duration-200">
            Contact Advisors
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
