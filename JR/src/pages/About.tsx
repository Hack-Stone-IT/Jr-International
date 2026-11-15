import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ShieldCheck, Scale, Award, MapPin, UserCheck } from "lucide-react"
import { motion } from "framer-motion"
import founderImage from "@/assets/founder_optimized.jpg"

// DEMO CONTENT — ALL FOUNDER DETAILS MUST BE VERIFIED BY CLIENT BEFORE PRODUCTION LAUNCH.
const founderProfile = {
  name: "Chirag Soni",
  designation: "Founder",
  bio: "Founder of JR International.",
  message: "Every applicant has different goals and circumstances. Our approach is to understand each individual situation and provide clear, responsible guidance throughout their international journey.",
  image: founderImage,
  verified: true
};

export default function About() {
  const firmHistory = [
    {
      index: "01",
      year: "2019",
      title: "Firm Founded",
      desc: "JR International begins its journey providing international education and visa guidance to applicants planning to pursue opportunities abroad."
    },
    {
      index: "02",
      year: "2020",
      title: "Advisory Services Expanded",
      desc: "The consultancy expands its advisory support to assist applicants with broader international education and visa-related pathways."
    },
    {
      index: "03",
      year: "2023",
      title: "International Visa Guidance",
      desc: "JR International develops a broader consultation approach covering different applicant goals and destination-specific visa pathways."
    },
    {
      index: "04",
      year: "2025",
      title: "Expanded Global Pathways",
      desc: "The advisory offering evolves to support Student, Work, Visitor / Tourist, and Permanent Residence consultation across the firm's supported destinations."
    }
  ]

  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <PortfolioNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-left">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Consultancy Overview
            </span>
          </div>
          <h1 className="text-5xl font-semibold text-[#202020] mt-6 mb-6 font-figtree">
            Visa Advisory & Language / Test Preparation
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl font-figtree font-light leading-relaxed mb-8">
            JR International provides professional visa advisory for student, work, visitor, and permanent residence pathways, alongside training and coaching support for English language development and test preparation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: ShieldCheck, title: "Profile Assessment", desc: "Provide preliminary checks on application records, qualifications, and pathway eligibility rules." },
              { icon: Scale, title: "Document Checking", desc: "Guide applicants on destination-specific checklists and standard support templates." },
              { icon: Award, title: "General Advisory", desc: "Provide transparent consultation for student, work, visitor, and permanent residence streams." },
            ].map((item, i) => {
              const IconComp = item.icon
              return (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm flex flex-col items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#156d95]/10 flex items-center justify-center text-[#156d95]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-left font-figtree">
                    <h3 className="font-semibold text-gray-800 text-base">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder & Leadership Section */}
      <section className="py-24 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
                  Founder & Leadership
                </span>
                <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-2 font-figtree">
                  Meet the Founder
                </h2>
                <div className="text-2xl font-bold text-[#156d95] font-figtree">
                  {founderProfile.name}
                </div>
                <div className="text-sm font-mono text-gray-400 mt-1 uppercase tracking-wider">
                  {founderProfile.designation} — JR International
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-gray-600 font-figtree font-light">
                <p>{founderProfile.bio}</p>
              </div>

              <div className="border-l-4 border-[#156d95] pl-6 py-3 bg-white rounded-r-3xl pr-4 border-t border-b border-r border-gray-150 shadow-sm space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600">
                  Founder's Message
                </span>
                <p className="text-sm italic text-gray-700 font-figtree leading-relaxed">
                  "{founderProfile.message}"
                </p>
              </div>
            </div>

            {/* Right Photograph Placeholder — Circular Frame */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative flex items-center justify-center">
                {/* Subtle animated outer ring representing the visual pathway motif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-[-12px] rounded-full border border-dashed border-[#156d95]/30 pointer-events-none"
                />

                {/* Thin gold accent ring */}
                <div className="absolute inset-[-6px] rounded-full border border-[#d97706]/35 pointer-events-none" />

                {/* Main circular frame */}
                <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full bg-white p-3 border border-gray-150 shadow-md flex items-center justify-center overflow-hidden z-10 transition-transform duration-300 hover:scale-[1.02]">
                  {founderProfile.image ? (
                    <img
                      src={founderProfile.image}
                      alt={founderProfile.verified ? `${founderProfile.name}, Founder & Director of JR International` : "Founder of JR International"}
                      className="w-full h-full rounded-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-50 to-[#156d95]/5 flex flex-col items-center justify-center text-center p-6 border border-[#156d95]/10">
                      <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#156d95]/70 mb-2" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded mb-2">
                        Pending
                      </span>
                      <h4 className="font-bold text-gray-700 text-xs sm:text-sm tracking-tight">FOUNDER PHOTO</h4>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 max-w-[150px] leading-normal font-figtree">
                        To be provided
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Milestones
            </span>
            <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 font-figtree">Firm History & Milestones</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {firmHistory.map((m, i) => (
              <div key={i} className="text-left space-y-4 font-figtree relative">
                <div className="text-4xl font-extrabold text-[#156d95] font-mono">
                  {m.index} <span className="text-2xl font-light text-gray-400">— {m.year}</span>
                </div>
                <div className="h-0.5 bg-gray-100 w-full relative">
                  <div className="w-3 h-3 rounded-full bg-[#156d95] absolute -top-1 left-0" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">{m.title}</h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-[#fafafa] border-t border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
                Global Network
              </span>
              <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-6 font-figtree">
                Office Chambers
              </h2>
              <p className="text-base leading-relaxed text-gray-500 font-figtree mb-8">
                JR International serves applicants from our primary chambers in Patan, Gujarat, providing private consultation facilities and digital document checking guidelines.
              </p>

              <div className="space-y-4">
                {[
                  { city: "Patan, Gujarat (Head Office)", address: "S-2/3 Vraj Commercial Complex, Nr. Shantiketan School, Patan, Gujarat 384265" },
                ].map((office, idx) => (
                  <div key={idx} className="flex gap-3 items-start font-figtree">
                    <MapPin className="w-5 h-5 text-[#156d95] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{office.city}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden aspect-video shadow border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Global headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
