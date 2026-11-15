import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Countries from "./pages/Countries"
import About from "./pages/About"
import Contact from "./pages/Contact"
import StudentVisa from "./pages/StudentVisa"
import PermanentResidence from "./pages/PermanentResidence"
import VisitorVisa from "./pages/VisitorVisa"
import WorkVisa from "./pages/WorkVisa"
import AustraliaDestination from "./pages/AustraliaDestination"
import CanadaDestination from "./pages/CanadaDestination"
import NewZealandDestination from "./pages/NewZealandDestination"
import UKDestination from "./pages/UKDestination"
import EuropeHub from "./pages/destinations/EuropeHub"
import EuropeCountryDetail from "./pages/destinations/EuropeCountryDetail"
import DubaiDestination from "./pages/DubaiDestination"
import GlobalOffices from "./pages/GlobalOffices"
import AdvisoryBoard from "./pages/AdvisoryBoard"
import Careers from "./pages/Careers"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import IntakeCalendar from "./pages/IntakeCalendar"
import ScholarshipGuides from "./pages/ScholarshipGuides"
import RouteScrollManager from "./components/RouteScrollManager"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <Router>
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Services Routes */}
        <Route path="/services/student-visa" element={<StudentVisa />} />
        <Route path="/services/permanent-residence" element={<PermanentResidence />} />
        <Route path="/services/visitor-visa" element={<VisitorVisa />} />
        <Route path="/services/work-visa" element={<WorkVisa />} />

        {/* Destinations Routes */}
        <Route path="/destinations/australia" element={<AustraliaDestination />} />
        <Route path="/destinations/canada" element={<CanadaDestination />} />
        <Route path="/destinations/new-zealand" element={<NewZealandDestination />} />
        <Route path="/destinations/uk" element={<UKDestination />} />
        <Route path="/destinations/europe" element={<EuropeHub />} />
        <Route path="/destinations/europe/:countrySlug" element={<EuropeCountryDetail />} />
        <Route path="/destinations/dubai" element={<DubaiDestination />} />

        {/* The Firm Routes */}
        <Route path="/about/global-offices" element={<GlobalOffices />} />
        <Route path="/about/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/careers" element={<Careers />} />

        {/* Resources Routes */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/intake-calendar" element={<IntakeCalendar />} />
        <Route path="/resources/scholarship-guides" element={<ScholarshipGuides />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
