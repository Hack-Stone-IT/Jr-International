import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="w-full bg-white min-h-screen pt-20 flex flex-col justify-between text-left font-figtree">
      <PortfolioNavbar />

      <main className="flex-grow flex items-center justify-center py-24 px-8 bg-gradient-to-b from-[#fafafa] to-white">
        <div className="max-w-md w-full text-center space-y-8 p-12 bg-white border border-[#e5e5e5] rounded-[40px] shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto text-[#156d95]">
            <HelpCircle className="w-9 h-9" />
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl font-normal tracking-tight text-[#202020] font-serif">404</h1>
            <h2 className="text-xl font-bold text-gray-800">Page Not Found</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              The page you are looking for does not exist, has been moved, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 bg-[#156d95] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#156d95]/90 hover:rounded-2xl transition-all duration-200 shadow-sm"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
