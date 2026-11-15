export type EuropeCountry = {
  name: string
  slug: string
  flag: string
  image: string
  description: string
  minTuition: string
  processingTime: string
  stayRights: string
  availableServices: {
    student: string
    work: string
    visitor: string
    pr: string
  }
  intakeInformation: string
  highlights: string[]
  faq: { q: string; a: string }[]
  ctaText: string
  whoItSuits: string
  commonDocuments: string[]
  officialSource: { name: string; url: string }
}

export const europeIntakeCampaign = {
  currentIntake: "Jan–Feb 2027 Intake",
  deadlineNote: "Verify deadlines with your advisor.",
}

export const europeCountries: EuropeCountry[] = [
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600",
    description: "Renowned for prestigious business schools, engineering programs, and culinary arts, France offers rich academic pathways and post-study opportunities.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "National Student Visa (VLS-TS)",
      work: "Temporary Resident Permit (APS) options",
      visitor: "Schengen tourist options",
      pr: "Residency pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Access English-taught degrees in top business schools",
      "Schengen mobility throughout the travel zone",
      "Post-study residency permit (APS) for career search",
    ],
    faq: [
      { q: "Is French language proficiency required for admissions?", a: "Many universities offer degrees taught entirely in English, though basic French is highly helpful for local employment." },
      { q: "What is the post-study stay duration?", a: "Graduates are generally eligible for a 1-year temporary residence permit (APS) to seek professional employment." },
    ],
    ctaText: "Explore France Pathways",
    whoItSuits: "Students seeking elite grande école degrees, fashion and luxury management specializations, and access to continental Europe's second-largest economy.",
    commonDocuments: [
      "Valid Passport",
      "EEF/Campus France registration proof",
      "Official University Letter of Acceptance",
      "Financial capacity statements (min €615/month)",
      "Schengen travel health insurance"
    ],
    officialSource: {
      name: "France-Visas Official Portal",
      url: "https://france-visas.gouv.fr"
    }
  },
  {
    name: "Finland",
    slug: "finland",
    flag: "🇫🇮",
    image: "https://images.unsplash.com/photo-1517309230475-6736d926b979?auto=format&fit=crop&q=80&w=600",
    description: "Consistently ranked as the world's happiest country, Finland provides world-class educational technology, innovative universities, and generous post-study stay options.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Student Residence Permit",
      work: "Post-study job seeker options",
      visitor: "Schengen visitor visa guidance",
      pr: "Residency options subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Pioneer in technology and research fields",
      "Up to 2-year post-study permit to search for work",
      "Safe, high-quality living standards for students",
    ],
    faq: [
      { q: "Can my family join me in Finland?", a: "Yes, family members (spouse and children) can apply for residence permits concurrently based on family ties." },
      { q: "How long is the job seeker permit?", a: "Graduates can apply for a permit to look for work, valid for up to 2 years after graduation." },
    ],
    ctaText: "Explore Finland Pathways",
    whoItSuits: "Candidates interested in tech innovation, high-tech research, design, and a supportive, safe society offering generous post-study work search permits.",
    commonDocuments: [
      "Valid Passport",
      "Letter of Acceptance from a Finnish institution",
      "Tuition payment receipt",
      "Financial capacity proof (typically €560/month or €6,720/year)",
      "Comprehensive health insurance policy"
    ],
    officialSource: {
      name: "Finnish Immigration Service / Migri",
      url: "https://migri.fi"
    }
  },
  {
    name: "Italy",
    slug: "italy",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=600",
    description: "Immerse yourself in historic universities and globally respected programs in architecture, fashion, design, and humanities with affordable public tuition options.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "National Visa Type D (Study)",
      work: "Post-study permit options",
      visitor: "Schengen tourism visa checklist",
      pr: "Permit conversion options subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Affordable tuition structures in public universities",
      "Rich cultural heritage and design hubs",
      "Part-time student work rights permitted by law",
    ],
    faq: [
      { q: "Can I extend my stay after graduation?", a: "Yes, graduates can apply to convert their student permit into a temporary job-search permit for up to 12 months." },
      { q: "What language tests are accepted?", a: "IELTS and PTE Academic are widely accepted for English-taught programs." },
    ],
    ctaText: "Explore Italy Pathways",
    whoItSuits: "Students looking for highly affordable public university tuition structures, historic design and culinary centers, and humanities studies.",
    commonDocuments: [
      "Valid Passport",
      "Universitaly portal pre-enrollment summary",
      "Official Letter of Acceptance",
      "Financial support evidence (approx. €460/month)",
      "Standard health insurance coverage"
    ],
    officialSource: {
      name: "Italian Ministry of Foreign Affairs (Il Visto per l'Italia)",
      url: "https://vistoperitalia.esteri.it"
    }
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image: "https://images.unsplash.com/photo-1590089415225-401ed66a1800?auto=format&fit=crop&q=80&w=600",
    description: "Europe's leading technology hub, Ireland offers native English-speaking study programs and direct access to major multinational software and pharmaceutical headquarters.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Student Visa (Stamp 2)",
      work: "Stamp 1G stay-back options",
      visitor: "Tourist/Visitor entry permissions",
      pr: "Employment permit pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Native English-speaking academic environment",
      "Up to 2-year post-study stay back via Stamp 1G",
      "Direct exposure to multinational tech clusters",
    ],
    faq: [
      { q: "Is language validation mandatory?", a: "Yes, English proficiency (IELTS, TOEFL, or Duolingo) is mandatory for admissions and visa compliance." },
      { q: "How does Stamp 1G work?", a: "It allows graduates to work full-time locally for up to 24 months to transition to a sponsored employment visa." },
    ],
    ctaText: "Explore Ireland Pathways",
    whoItSuits: "Candidates targeting native English-speaking programs, international software development or biotechnology clusters, and structured 1G graduate stay-back routes.",
    commonDocuments: [
      "Valid Passport",
      "Letter of Acceptance from a recognized Irish institution",
      "Proof of tuition fee payment receipt",
      "Financial capacity statements (min €10,000 for living costs)",
      "Private medical insurance policy"
    ],
    officialSource: {
      name: "Irish Immigration Service Delivery / ISD",
      url: "https://www.irishimmigration.ie"
    }
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=600",
    description: "Study in dynamic business capitals like Madrid and Barcelona, renowned for top MBA programs, hospitality degrees, and favorable living costs.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Spanish Student Visa",
      work: "Job seeker permit options",
      visitor: "Schengen tourist entry prep",
      pr: "Permit modification pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Home to top-ranked international business schools",
      "Low living cost index relative to western Europe",
      "Favorable post-study job seeker permits",
    ],
    faq: [
      { q: "What is the duration of the job seeker visa in Spain?", a: "Qualified graduates can obtain a 12-month non-renewable residence permit to search for a professional job." },
      { q: "Can I travel to other European countries?", a: "Yes, your student visa grants you free travel inside the Schengen zone." },
    ],
    ctaText: "Explore Spain Pathways",
    whoItSuits: "Students seeking top-tier MBA programs, culinary arts or hospitality specializations, and a vibrant lifestyle with lower relative living index cost.",
    commonDocuments: [
      "Valid Passport",
      "Official Letter of Admission",
      "Financial support statements (min IPREM index equivalent)",
      "Medical certificate",
      "Criminal record certificate",
      "Public or private health insurance policy"
    ],
    officialSource: {
      name: "Spanish Ministry of Foreign Affairs (Exteriores)",
      url: "https://www.exteriores.gob.es"
    }
  },
  {
    name: "Hungary",
    slug: "hungary",
    flag: "🇭🇺",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=600",
    description: "Hungarian medical, scientific, and business programs offer exceptional European quality with very accessible tuition structures and rich history.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Hungary Student Visa",
      work: "Study-to-work permit options",
      visitor: "Schengen visa document checklists",
      pr: "Residency options subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Extremely affordable tuition and living cost index",
      "Prestigious medical and scientific programs in Central Europe",
      "Favorable student residency permit renewals",
    ],
    faq: [
      { q: "Is Hungarian language mandatory for study?", a: "No, JR International counsels exclusively for English-medium degree programs." },
      { q: "What is the post-study job seeker card?", a: "Hungary offers a 9-month job search residency permit for graduates who complete local degrees." },
    ],
    ctaText: "Explore Hungary Pathways",
    whoItSuits: "Students seeking high-quality, English-medium scientific or medical degrees in Central Europe at extremely accessible tuition and living costs.",
    commonDocuments: [
      "Valid Passport",
      "Official Letter of Acceptance",
      "Proof of tuition payment",
      "Bank statements showing sufficient funds",
      "Travel health insurance coverage"
    ],
    officialSource: {
      name: "Hungarian National Directorate-General for Aliens Policing / OIF",
      url: "http://oif.gov.hu"
    }
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "🇳🇱",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    description: "Highly progressive and research-intensive, the Netherlands offers extensive English-taught options, top business hubs, and the orientation year visa.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Entry Visa (MVV) & Residence Permit (VVR)",
      work: "Orientation Year (Zoekjaar) options",
      visitor: "Schengen tourist preparation",
      pr: "Residency pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Top-ranked research and applied sciences universities",
      "Orientation Year (Zoekjaar) work permission for graduates",
      "Excellent tech and business professional ecosystems",
    ],
    faq: [
      { q: "What is the Zoekjaar (Orientation Year)?", a: "It is a 1-year residence permit allowing graduates from top global universities or Dutch colleges to work without work permit restrictions." },
      { q: "Do I need to speak Dutch for admissions?", a: "No, Dutch universities have one of the highest numbers of English-taught programs in mainland Europe." },
    ],
    ctaText: "Explore Netherlands Pathways",
    whoItSuits: "Students aiming for top-ranked research universities, progressive business environments, and a highly international society offering the Orientation Year (Zoekjaar) permit.",
    commonDocuments: [
      "Valid Passport",
      "MVV/VVR approval letter from IND",
      "Official Admission Letter",
      "Proof of financial sufficiency (approx. €1,000/month)",
      "Tuberculosis test clearance (if applicable)"
    ],
    officialSource: {
      name: "Immigration and Naturalisation Service / IND",
      url: "https://ind.nl"
    }
  },
  {
    name: "Malta",
    slug: "malta",
    flag: "🇲🇹",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600",
    description: "Malta offers English-medium degree programs, lower relative living costs, and Schengen travel access in a welcoming Mediterranean environment.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Malta Student Visa",
      work: "Post-study work permit options",
      visitor: "Schengen tourist entry prep",
      pr: "Residency pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "English is an official language, making communication seamless",
      "Schengen travel accessibility throughout the member states",
      "Historic Mediterranean setting with growing business sectors",
    ],
    faq: [
      { q: "Is English widely spoken in Malta?", a: "Yes, English is an official language of Malta and the primary language of instruction at higher education institutions." },
      { q: "Can students work part-time in Malta?", a: "Yes, international students are generally permitted to work part-time subject to current national regulations and permit validations." },
    ],
    ctaText: "Explore Malta Pathways",
    whoItSuits: "Students seeking English-taught degrees in a warm Mediterranean climate with a lower cost of living index relative to larger Western hubs.",
    commonDocuments: [
      "Valid Passport",
      "Official Letter of Acceptance",
      "Proof of sufficient funds for accommodation and living",
      "Travel medical insurance",
      "Visa application forms"
    ],
    officialSource: {
      name: "Identity Malta Agency",
      url: "https://identitymalta.com"
    }
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600",
    description: "Germany offers a rich academic heritage, top-ranked technical universities, and post-study opportunities in Europe's largest economy.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Germany Student Visa",
      work: "Post-study job seeker options",
      visitor: "Schengen tourist entry prep",
      pr: "Residency pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Access world-renowned technical and research universities",
      "Options for English-taught degrees across various disciplines",
      "Favorable post-study residency pathways for graduates",
    ],
    faq: [
      { q: "Do I need to speak German to study in Germany?", a: "Many master's and selected bachelor's programs are offered fully in English, though basic German is helpful for daily life." },
      { q: "Are there tuition fees at public universities?", a: "Many public universities charge minimal administrative fees, though some states/programs have tuition. Always verify current fees." },
    ],
    ctaText: "Explore Germany Pathways",
    whoItSuits: "Students seeking high-quality engineering, technology, or business programs and access to robust job market opportunities in Europe.",
    commonDocuments: [
      "Valid Passport",
      "Admission Letter from a German institution",
      "Proof of financial resources (e.g. Blocked Account)",
      "Recognized academic transcripts",
      "Health insurance certificate"
    ],
    officialSource: {
      name: "German Federal Foreign Office",
      url: "https://www.auswaertiges-amt.de"
    }
  },
  {
    name: "Latvia",
    slug: "latvia",
    flag: "🇱🇻",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=600",
    description: "Latvia offers affordable English-medium degree programs, rich history, and direct entry pathways into the Schengen Area.",
    minTuition: "Check current requirements",
    processingTime: "Varies by Profile",
    stayRights: "Subject to current visa rules",
    availableServices: {
      student: "Latvia Student Visa / Residence Permit",
      work: "Post-study work permit options",
      visitor: "Schengen tourist entry prep",
      pr: "Residency pathways subject to criteria",
    },
    intakeInformation: "Jan–Feb 2027 Intake Available",
    highlights: [
      "Affordable tuition structures and living costs",
      "Schengen zone travel mobility for academic and personal travel",
      "High-quality European education recognized globally",
    ],
    faq: [
      { q: "Are Latvian degrees recognized internationally?", a: "Yes, Latvia is part of the Bologna Process, and its degrees are recognized across Europe and globally." },
      { q: "What is the cost of living in Latvia?", a: "Latvia offers one of the most accessible cost-of-living indices in the European Union for students." },
    ],
    ctaText: "Explore Latvia Pathways",
    whoItSuits: "Students looking for highly affordable higher education in Europe with lower living costs, while maintaining access to Schengen mobility.",
    commonDocuments: [
      "Valid Passport",
      "Official Matriculation/Acceptance Letter",
      "Proof of financial capacity",
      "Police clearance certificate",
      "Health insurance policy"
    ],
    officialSource: {
      name: "Office of Citizenship and Migration Affairs (OCMA) Latvia",
      url: "https://www.pmlp.gov.lv"
    }
  }
]
