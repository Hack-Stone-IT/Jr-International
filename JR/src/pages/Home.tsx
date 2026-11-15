import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <PortfolioNavbar />
      <BankingScaleHero />
      
      {/* Map Section */}
      <section id="world-map" className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            Global Destinations
          </span>
          <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4 font-figtree">
            Interactive Destination Map
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree">
            Explore visa pathways and opportunities by selecting our supported destinations below.
          </p>
        </div>
        <InteractiveWorldMap />
      </section>

      <CaseStudiesCarousel />
      <TestimonialsCarousel />
      <FAQSection />
      <Footer />
    </div>
  )
}
