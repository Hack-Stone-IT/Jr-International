import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Testimonial = {
  id: string
  text: string
  clientName?: string
  pathway: string
  destination?: string
  isVerified?: boolean
  photoUrl?: string
  date?: string
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    text: "Client testimonial will be added after verified client feedback is provided.",
    pathway: "Student Visa",
    destination: "Australia",
    isVerified: true,
  },
  {
    id: "testimonial-2",
    text: "Client testimonial will be added after verified client feedback is provided.",
    pathway: "Work Visa",
    destination: "Canada",
    isVerified: true,
  },
  {
    id: "testimonial-3",
    text: "Client testimonial will be added after verified client feedback is provided.",
    pathway: "Permanent Residence",
    destination: "New Zealand",
    isVerified: false,
  },
]

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<number | null>(null)
  const currentTestimonial = testimonials[currentIndex]

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
    autoPlayRef.current = window.setInterval(() => {
      nextSlide()
    }, 6000)
  }, [nextSlide])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isAutoPlaying, currentIndex, startAutoPlay, stopAutoPlay])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  return (
    <div
      className="w-full bg-white border-b border-[#e5e5e5] py-24 px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-4xl mx-auto w-full text-center space-y-12">
        {/* Section Header */}
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-[40px] font-normal tracking-tight text-[#202020] mt-4 mb-4 font-figtree">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-figtree font-light leading-relaxed">
            Real experiences from clients who have worked with JR International for their international visa journey.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[300px] flex flex-col justify-between items-center bg-white border border-[#e5e5e5] rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-sm overflow-hidden w-full">
          <div className="w-full relative flex-grow flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="space-y-6 w-full"
              >
                  {/* Star Rating */}
                  <div className="text-yellow-500 text-2xl tracking-wider select-none">
                    ★★★★★
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-700 italic font-figtree max-w-2xl mx-auto">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Client Info Grid */}
                  <div className="flex flex-col items-center gap-2">
                    {currentTestimonial.isVerified && (
                      <div className="inline-flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded font-mono uppercase tracking-wide">
                        ✓ Verified Client
                      </div>
                    )}

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide font-mono">
                        {currentTestimonial.clientName || `${currentTestimonial.pathway} Client`}
                      </h4>
                      
                      {currentTestimonial.clientName && (
                        <div className="text-xs text-gray-500 font-figtree">
                          {currentTestimonial.pathway}
                        </div>
                      )}

                      {currentTestimonial.destination && (
                        <div className="text-xs text-gray-400 font-figtree">
                          {currentTestimonial.destination}
                        </div>
                      )}
                    </div>
                  </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center justify-between w-full pt-8 mt-4 border-t border-gray-100 flex-wrap gap-4">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-[#156d95]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#156d95]/50"
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#156d95]/50"
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
