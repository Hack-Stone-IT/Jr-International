import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ConsultationWizard } from "@/components/ConsultationWizard"
import { Footer } from "@/components/Footer"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { companyContact } from "@/lib/contact"
import logoImg from "@/assets/Logo.png"

export default function Contact() {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <PortfolioNavbar />

      {/* Intro Header */}
      <section className="pt-16 pb-8 bg-white max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4 mb-4">
          <img
            src={logoImg}
            alt="JR International"
            className="h-12 w-auto object-contain"
          />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            Advisory Bookings
          </span>
        </div>
        <h1 className="text-5xl font-semibold text-[#202020] mt-4 mb-4 font-figtree">
          Book a Consultation
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree font-light leading-relaxed">
          Begin your global visa journey or language preparation. Complete our guided assessment below, or contact our office directly.
        </p>
      </section>

      {/* Grid of contact details & Wizard */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="bg-[#fafafa] border border-gray-150 p-8 rounded-3xl space-y-6 font-figtree">
              <h3 className="text-xl font-bold text-gray-800">Office Contact Info</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#156d95] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block">OFFICE PHONE & WHATSAPP</span>
                  <a href={companyContact.phoneHref} className="text-sm font-semibold text-gray-800 block hover:text-[#156d95] transition-all">
                    Phone: {companyContact.phone}
                  </a>
                  <a href={companyContact.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-800 block hover:text-[#16b364] transition-all">
                    WhatsApp: {companyContact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#156d95] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block">EMAIL CHANNELS</span>
                  <a href={companyContact.emailHref} className="text-sm font-semibold text-[#156d95] hover:underline break-all block">
                    {companyContact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#156d95] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block">ADDRESS</span>
                  <span className="text-xs text-gray-600 block leading-relaxed">
                    S-2/3 Vraj Commercial Complex,<br />
                    Nr. Shantiketan School,<br />
                    Patan, Gujarat 384265
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#156d95] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block">WORKING CHANNELS</span>
                  <span className="text-sm text-gray-700 block">Monday — Saturday</span>
                  <span className="text-xs text-gray-500 block">10:00 — 18:00 (IST)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Wizard Column */}
          <div className="lg:col-span-8">
            <ConsultationWizard />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
