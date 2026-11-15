import type { QuestionOption } from "./types"

export const pathwayOptions: QuestionOption[] = [
  { id: "study", title: "Study", desc: "Education, university, college or professional study", iconName: "FileCheck" },
  { id: "work", title: "Work", desc: "Employment or work opportunities abroad", iconName: "Users" },
  { id: "visit", title: "Visit", desc: "Tourism, family visit or short-term travel", iconName: "Compass" },
  { id: "pr", title: "Permanent Residence", desc: "Explore long-term migration and residency pathways", iconName: "Gem" },
  { id: "not_sure", title: "Not sure yet", desc: "I need help deciding which pathway fits my situation", iconName: "HelpCircle" },
]

export const destinationOptions: QuestionOption[] = [
  { id: "AU", title: "Australia", desc: "Australia visa & migration pathways" },
  { id: "CA", title: "Canada", desc: "Canada visa & migration pathways" },
  { id: "NZ", title: "New Zealand", desc: "New Zealand visa & migration pathways" },
  { id: "GB", title: "United Kingdom", desc: "UK visa & migration pathways" },
  { id: "EU", title: "Europe", desc: "Schengen country visa pathways" },
  { id: "AE", title: "Dubai / UAE", desc: "UAE visa & residence pathways" },
  { id: "not_sure", title: "Not sure", desc: "Help me explore destinations matching my background" },
]

export const europeCountryOptions: QuestionOption[] = [
  { id: "FR", title: "France", desc: "Schengen study visa & post-study APS permits" },
  { id: "FI", title: "Finland", desc: "Technology, design & up to 2-year job seeker permits" },
  { id: "IT", title: "Italy", desc: "Affordable public tuition, design & fashion hubs" },
  { id: "IE", title: "Ireland", desc: "Native English study & Stamp 1G stay-back permissions" },
  { id: "ES", title: "Spain", desc: "Dynamic business capitals, low cost of living index" },
  { id: "HU", title: "Hungary", desc: "Highly accessible tuition & medical specialities" },
  { id: "NL", title: "Netherlands", desc: "Orientation Year (Zoekjaar) open work permits" },
  { id: "MT", title: "Malta", desc: "English-medium programs, Mediterranean climate" },
  { id: "DE", title: "Germany", desc: "Top-ranked tech universities, post-study work" },
  { id: "LV", title: "Latvia", desc: "Affordable tuition structures & Schengen mobility" },
  { id: "not_sure", title: "Not sure yet", desc: "Guidance on choosing your European destination country" },
]

export const adaptiveProfileQuestions: Record<string, { question: string; text: string; options: QuestionOption[] }> = {
  study: {
    question: "What best describes your current education?",
    text: "Select your highest completed academic qualification level.",
    options: [
      { id: "secondary", title: "Completed secondary education" },
      { id: "diploma", title: "Diploma" },
      { id: "bachelor", title: "Bachelor's degree" },
      { id: "master", title: "Master's degree" },
      { id: "other", title: "Other / Professional qualification" },
    ],
  },
  work: {
    question: "What best describes your professional background?",
    text: "Select the option that best matches your career status.",
    options: [
      { id: "graduate", title: "Student / Recent graduate" },
      { id: "entry", title: "Entry-level professional" },
      { id: "experienced", title: "Experienced professional" },
      { id: "skilled", title: "Skilled professional" },
      { id: "business", title: "Business owner / Entrepreneur" },
      { id: "other", title: "Other" },
    ],
  },
  visit: {
    question: "What is the main purpose of your visit?",
    text: "Choose the primary reason for your temporary travel.",
    options: [
      { id: "tourism", title: "Tourism" },
      { id: "family", title: "Visiting family or friends" },
      { id: "business", title: "Business / professional visit" },
      { id: "other", title: "Other" },
    ],
  },
  pr: {
    question: "What best describes your current profile?",
    text: "This helps us identify which skilled migration categories are relevant to you.",
    options: [
      { id: "skilled", title: "Skilled professional" },
      { id: "experienced", title: "Experienced professional" },
      { id: "business", title: "Business / entrepreneur" },
      { id: "family", title: "Family-based pathway" },
      { id: "other", title: "Other" },
    ],
  },
  not_sure: {
    question: "What best describes your background?",
    text: "Select your current status to help us map potential routes.",
    options: [
      { id: "student", title: "Student" },
      { id: "professional", title: "Professional" },
      { id: "business", title: "Business Owner" },
      { id: "other", title: "Other" },
    ],
  },
}

export const timelineOptions: QuestionOption[] = [
  { id: "immediate", title: "As soon as possible" },
  { id: "3m", title: "Within 3 months" },
  { id: "6m", title: "3–6 months" },
  { id: "12m", title: "6–12 months" },
  { id: "future", title: "More than 12 months" },
  { id: "research", title: "I'm only researching" },
]

export const destinationPaths: Record<string, string> = {
  AU: "/destinations/australia",
  CA: "/destinations/canada",
  NZ: "/destinations/new-zealand",
  GB: "/destinations/uk",
  AE: "/destinations/dubai",
  EU: "/destinations/europe",
}

export const europeCountryPaths: Record<string, string> = {
  FR: "/destinations/europe/france",
  FI: "/destinations/europe/finland",
  IT: "/destinations/europe/italy",
  IE: "/destinations/europe/ireland",
  ES: "/destinations/europe/spain",
  HU: "/destinations/europe/hungary",
  NL: "/destinations/europe/netherlands",
  MT: "/destinations/europe/malta",
  DE: "/destinations/europe/germany",
  LV: "/destinations/europe/latvia",
}

export const officialSources: Record<string, { name: string; url: string }> = {
  AU: { name: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au" },
  CA: { name: "Immigration, Refugees and Citizenship Canada (IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
  NZ: { name: "Immigration New Zealand", url: "https://www.immigration.govt.nz" },
  GB: { name: "UK Visas and Immigration (UKVI)", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
  AE: { name: "GDRFAD Dubai Portal", url: "https://gdrfad.gov.ae" },
}

export const europeOfficialSources: Record<string, { name: string; url: string }> = {
  FR: { name: "France-Visas Portal", url: "https://france-visas.gouv.fr" },
  FI: { name: "Finnish Immigration Service (Migri)", url: "https://migri.fi" },
  IT: { name: "Italian Ministry of Foreign Affairs (Visto per l'Italia)", url: "https://vistoperitalia.esteri.it" },
  IE: { name: "Irish Immigration Service Delivery (ISD)", url: "https://www.irishimmigration.ie" },
  ES: { name: "Spanish Ministry of Foreign Affairs", url: "https://www.exteriores.gob.es" },
  HU: { name: "Hungarian Aliens Policing Directorate (OIF)", url: "http://oif.gov.hu" },
  NL: { name: "Immigration and Naturalisation Service (IND)", url: "https://ind.nl" },
  MT: { name: "Identity Malta Agency", url: "https://identitymalta.com" },
  DE: { name: "German Federal Foreign Office", url: "https://www.auswaertiges-amt.de" },
  LV: { name: "Office of Citizenship and Migration Affairs (OCMA)", url: "https://www.pmlp.gov.lv" },
}
