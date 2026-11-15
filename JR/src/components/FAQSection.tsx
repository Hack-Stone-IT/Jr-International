import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Which destinations do you support?",
    answer:
      "We provide visa and advisory guidance for Australia, Canada, New Zealand, the United Kingdom, Europe, and Dubai (UAE). Our counselors assist with destination-specific checklists and requirements.",
  },
  {
    question: "What visa pathways does JR International assist with?",
    answer:
      "As an international visa consultancy, we support four primary pathways: Student Visas, Work Visas, Visitor/Tourist Visas, and Permanent Residence (PR) visa streams. We offer profile evaluations, document checklists, and application reviews.",
  },
  {
    question: "What documents are generally required for visa applications?",
    answer:
      "Requirements vary by destination and visa category. Typically, applications require a valid passport, proof of financial capacity (bank statements, sponsorships, or GICs), educational and employment history records, language proficiency validation (IELTS/PTE), and health or character clearances.",
  },
  {
    question: "Does JR International guarantee visa approvals or job placements?",
    answer:
      "No. Visa decisions are determined exclusively by official government immigration authorities, and admissions or employment outcomes depend on universities and employers. JR International provides professional document compliance review and guidance to help compile a compliant file.",
  },
]

export const FAQSection = ({ title = "Frequently asked questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 px-8 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#156d95] bg-[#156d95]/10 px-3 py-1.5 rounded-full">
              Advisory FAQ
            </span>
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mt-6 sticky top-24 font-figtree"
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8 font-figtree font-medium"
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0 text-gray-800"
                    >
                      <Plus className="w-6 h-6" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12 text-left">
                          <p className="text-base leading-relaxed text-gray-500 font-figtree">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
