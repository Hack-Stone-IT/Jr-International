import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { CountryExplorer } from "@/components/CountryExplorer"
import { CountryComparison } from "@/components/CountryComparison"
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { Footer } from "@/components/Footer"

export default function Countries() {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <PortfolioNavbar />
      
      {/* Hero Intro */}
      <section className="pt-16 pb-8 bg-white max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
          Destination Portfolios
        </span>
        <h1 className="text-5xl font-semibold text-[#202020] mt-4 mb-4 font-figtree">
          Destination & Visa Explorer
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl font-figtree font-light leading-relaxed">
          Browse visa guidelines, pathways, and advisory details across our primary destinations in Australia, Canada, New Zealand, the United Kingdom, Europe, and Dubai / UAE.
        </p>
      </section>

      <CountryExplorer />

      {/* Comparison Section */}
      <section className="py-16 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            Destination Matching
          </span>
          <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4 font-figtree">
            Side-by-Side Comparison
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree">
            Select any two destinations to compare baseline costs, requirements, and general pathways side-by-side.
          </p>
        </div>
        <CountryComparison />
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InteractiveWorldMap />
        </div>
      </section>

      <IntegrationCarousel />
      <Footer />
    </div>
  )
}
