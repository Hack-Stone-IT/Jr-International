import { useState } from "react"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowLeft, ArrowRight, Gem } from "lucide-react"
import { Link } from "react-router-dom"
import { europeCountries, europeIntakeCampaign } from "@/lib/europeData"

export default function EuropeHub() {
  const [selectedLeft, setSelectedLeft] = useState<string>("france")
  const [selectedRight, setSelectedRight] = useState<string>("netherlands")

  const left = europeCountries.find((c) => c.slug === selectedLeft) || europeCountries[0]
  const right = europeCountries.find((c) => c.slug === selectedRight) || europeCountries[1]

  return (
    <div className="w-full bg-white min-h-screen pt-20 text-left font-figtree">
      <PortfolioNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A4A] to-[#156d95] text-white py-24 px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Link to="/countries" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-mono uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-white/10 px-3 py-1.5 rounded-full">
            {europeIntakeCampaign.currentIntake} Campaign Active
          </div>
          <h1 className="text-4xl lg:text-7xl font-normal tracking-tight font-serif">
            Study & Visa Pathways in Europe
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-4xl font-light leading-relaxed">
            Gain world-class education, global exposure, and Schengen access. Explore personalized guidance and end-to-end support across seven client-approved European destinations.
          </p>
        </div>
      </section>

      {/* Why Consider Europe (Promotional Content) */}
      <section className="py-24 px-8 bg-[#fafafa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Schengen Advantage
            </span>
            <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4">
              Brighter Future in Europe
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              European universities provide quality education at global standards. From historic centers of research to modern English-taught curriculum, study in Europe opens excellent career and work opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "World-Class Education", desc: "Access top-ranked universities, innovative science labs, and renowned business credentials recognized globally." },
              { title: "Affordable Tuition Fees", desc: "Favorable tuition structures and accessible living cost indices compared to other major English-speaking hubs." },
              { title: "Multicultural Environment", desc: "Study in a diverse, welcoming, and safe environment with rich history, language immersion, and student communities." },
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white border border-[#e5e5e5] rounded-[32px] space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#156d95]/10 flex items-center justify-center text-[#156d95]">
                  <Gem className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{p.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Country Explorer (WOW Feature Reuse) */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Country Portfolios
            </span>
            <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-2">
              Explore European Destinations
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Select one of the seven client-approved European countries to review entry permit profiles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {europeCountries.map((c) => (
              <div
                key={c.slug}
                className="bg-white border border-[#e5e5e5] rounded-[40px] overflow-hidden flex flex-col justify-between h-[480px] shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 relative group"
              >
                {/* Background Image Header */}
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${c.image})` }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5">
                    <span>{c.flag}</span>
                    <span className="text-gray-800 uppercase">{c.name}</span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800">{c.name}</h3>
                    <p className="text-xs text-gray-400 font-mono tracking-wider uppercase">
                      {c.intakeInformation}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-6 flex justify-between items-center border-t border-gray-100">
                    <div className="text-xs font-mono text-[#156d95] font-bold">
                      TUITION: {c.minTuition}
                    </div>
                    <Link
                      to={`/destinations/europe/${c.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-[#156d95] transition-colors"
                    >
                      Explore {c.flag} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Side-by-Side Comparison */}
      <section className="py-24 px-8 bg-[#fafafa] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Destination Comparison
            </span>
            <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4">
              Compare European Pathways
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
              Select any two client-approved European destinations to compare key variables side-by-side.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-center bg-white p-8 rounded-[32px] border border-[#e5e5e5] mb-12 shadow-sm">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-[#156d95] uppercase">First Destination</label>
              <select
                value={selectedLeft}
                onChange={(e) => setSelectedLeft(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-lg font-medium font-figtree"
              >
                {europeCountries.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-12 md:col-span-2 text-center text-gray-400 font-mono text-sm font-bold">
              VS
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-[#156d95] uppercase">Second Destination</label>
              <select
                value={selectedRight}
                onChange={(e) => setSelectedRight(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-lg font-medium font-figtree"
              >
                {europeCountries.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border border-[#e5e5e5] rounded-3xl overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-sm font-bold text-gray-400 font-mono uppercase w-1/3">Variables</th>
                  <th className="p-6 text-xl font-bold text-[#202020] w-1/3">{left.name} {left.flag}</th>
                  <th className="p-6 text-xl font-bold text-[#202020] w-1/3">{right.name} {right.flag}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Student Visa Program</td>
                  <td className="p-6 text-gray-800">{left.availableServices.student}</td>
                  <td className="p-6 text-gray-800">{right.availableServices.student}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Est. Tuition Cost</td>
                  <td className="p-6 text-gray-800 font-bold text-[#156d95]">{left.minTuition}</td>
                  <td className="p-6 text-gray-800 font-bold text-[#156d95]">{right.minTuition}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Processing Time</td>
                  <td className="p-6 text-gray-800">{left.processingTime}</td>
                  <td className="p-6 text-gray-800">{right.processingTime}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Part-Time Work Rights</td>
                  <td className="p-6 text-gray-800">{left.stayRights}</td>
                  <td className="p-6 text-gray-800">{right.stayRights}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Post-Study Work Permit</td>
                  <td className="p-6 text-gray-800">{left.availableServices.work}</td>
                  <td className="p-6 text-gray-800">{right.availableServices.work}</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-gray-600">Permanent Residence Path</td>
                  <td className="p-6 text-gray-800">{left.availableServices.pr}</td>
                  <td className="p-6 text-gray-800">{right.availableServices.pr}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Europe General FAQs */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Information Center
            </span>
            <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4">
              Europe Visa FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Can I travel between European countries under a student visa?", a: "Yes. Study visas issued by Schengen members allow visa-free travel within the Schengen Area for tourism or transit up to 90 days in any 180-day period." },
              { q: "Is university tuition free in Europe?", a: "Some public university models (e.g. in Germany or select Nordic programs) feature very low admin costs for international students, while private campuses have standard tuition tiers." },
              { q: "Does JR International assist with block accounts and financial documentation?", a: "Yes, we provide checklists and documentation guidelines to prepare proof of financial capacity as required by consulates." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 space-y-2">
                <h4 className="font-bold text-gray-800 flex items-start gap-2">
                  <span className="text-[#156d95] font-mono">Q.</span> {faq.q}
                </h4>
                <p className="text-sm text-gray-500 pl-6 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="bg-[#156d95] text-white p-12 rounded-[40px] text-center space-y-6 shadow-md">
          <h2 className="text-3xl lg:text-4xl font-serif">Apply for {europeIntakeCampaign.currentIntake}</h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm font-light leading-relaxed">
            Ready to study or settle in Europe? Connect with our senior consultants to map out your admissions and visa path.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#156d95] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200"
            >
              Book Assessment Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
