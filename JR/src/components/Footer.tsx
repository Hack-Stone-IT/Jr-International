import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { companyContact } from "@/lib/contact"
import logoImg from "@/assets/Logo.png"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type FooterProps = {
  companyName?: string
  tagline?: string
  copyrightText?: string
}

const defaultSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Student Visa", href: "/services/student-visa" },
      { label: "Work Visa", href: "/services/work-visa" },
      { label: "Visitor Visa", href: "/services/visitor-visa" },
      { label: "Permanent Residence", href: "/services/permanent-residence" },
      { label: "Language & Test Preparation", href: "/services" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Australia", href: "/destinations/australia" },
      { label: "Canada", href: "/destinations/canada" },
      { label: "New Zealand", href: "/destinations/new-zealand" },
      { label: "United Kingdom", href: "/destinations/uk" },
      { label: "Europe", href: "/destinations/europe" },
      { label: "Dubai / UAE", href: "/destinations/dubai" },
      { label: "Malta", href: "/destinations/europe/malta" },
      { label: "Spain", href: "/destinations/europe/spain" },
      { label: "Latvia", href: "/destinations/europe/latvia" },
      { label: "Germany", href: "/destinations/europe/germany" },
    ],
  },
  {
    title: "The Firm",
    links: [
      { label: "About Overview", href: "/about" },
      { label: "Global Offices", href: "/about/global-offices" },
      { label: "Advisory Board", href: "/about/advisory-board" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Advisors", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Intake Calendar", href: "/intake-calendar" },
      { label: "Scholarship Guides", href: "/resources/scholarship-guides" },
    ],
  },
]

export const Footer = ({
  companyName = "JR International",
  tagline = "RIGHT WAY TO SETTLE ABROAD",
  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const copyright = copyrightText || `© ${currentYear} ${companyName}. All rights reserved.`

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5] font-figtree text-left">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-4">
              <Link to="/" className="inline-block mb-3">
                <img
                  src={logoImg}
                  alt="JR International"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-5 text-gray-500 max-w-xs leading-relaxed mb-4">
                {tagline}
              </p>
              <div className="text-xs text-gray-400 space-y-1.5 font-mono">
                <div>
                  Phone:{" "}
                  <a href={companyContact.phoneHref} className="hover:text-[#156d95] transition-colors">
                    {companyContact.phone}
                  </a>
                </div>
                <div>
                  WhatsApp:{" "}
                  <a href={companyContact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#156d95] transition-colors">
                    {companyContact.whatsapp}
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a href={companyContact.emailHref} className="hover:text-[#156d95] transition-colors">
                    {companyContact.email}
                  </a>
                </div>
                <div className="pt-1">
                  <span className="block font-bold text-gray-500 text-[10px]">ADDRESS:</span>
                  <span className="block text-gray-400 leading-relaxed">
                    S-2/3 Vraj Commercial Complex,<br />
                    Nr. Shantiketan School,<br />
                    Patan, Gujarat 384265
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-gray-500 hover:text-[#16b364] hover:border-[#16b364] transition-all duration-150"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {companyContact.facebook && (
                <a
                  href={companyContact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-gray-500 hover:text-[#1877f2] hover:border-[#1877f2] transition-all duration-150"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
              {companyContact.instagram && (
                <a
                  href={companyContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-gray-500 hover:text-[#e1306c] hover:border-[#e1306c] transition-all duration-150"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              <a
                href={companyContact.emailHref}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-gray-500 hover:text-[#156d95] hover:border-[#156d95] transition-all duration-150"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Link Sections */}
          {defaultSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="col-span-1"
            >
              <h4 className="text-xs font-bold text-[#202020] mb-4 uppercase tracking-wider font-mono">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-[#156d95] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-mono">
              {copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
