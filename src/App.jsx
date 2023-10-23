import React from 'react'
import OurBrands from './Pages/OurBrands'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import CustomSelect from './Pages/CustomSelect'
import Media from './Pages/Media'
import Home from './Pages/Home'
import About from './Pages/About'
import Industries from './Pages/Industries'
import Products from './Pages/Products'
import Solutions from './Pages/Solutions'
import AnnouncementPage from './Pages/AnnouncementPage'
import Work from './Pages/Work'
import Privacy from './Pages/Privacy'
import Cookie from './Pages/Cookie'

// import Navbar from "./Components/Navbar"

import { WindPower,DefenceAndExp, Renewable, NonRenewable, PowerTran ,HeavyEng, HealthCare, IT, Transport, WasteMang } from './Components/Industries'
import { BTS2000,Kranking, ControlRelay, ClipF, BestCase, LoadChecker ,SolarDesign } from './Components/Products'
import { Solution, CnA, Process, Reliable, Fault, Solar,SolidWaste, Customized } from './Components/Solutions'
import { ContactAndGriv,Disclosures,Downloads, Chairman, Shareholders, ShCompliance, ShCorporate, ShGovernanceReport,ShReconciliation, ShShareholdingPattern, FinancialReport, FRAuditYearlyReport, FRAuditHalfYearlyReport, Overview, FRFaradigm, FRSubsidiary} from './Components/invester'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/brands" Component={OurBrands} />
          <Route exact path="/work" />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/media" Component={Media} />
          <Route exact path="/industries" Component={Industries} />
          <Route exact path="/products" Component={Products} />
          <Route exact path="/solutions" Component={Solutions} />
          <Route exact path="/announcement-page" Component={AnnouncementPage} />
          <Route exact path="/privacy-policy" Component={Privacy} />
          <Route exact path="/cookies" Component={Cookie} />


          
          <Route exact path="/industries/defence-and-exploration" Component={DefenceAndExp} />
          <Route exact path="/industries/renewable-energy" Component={Renewable} />
          <Route exact path="/industries/non-renewable-energy" Component={NonRenewable} />
          <Route exact path="/industries/power-transmission-and-distribution" Component={PowerTran} />
          <Route exact path="/industries/heavy-engineering-industries" Component={HeavyEng} />
          <Route exact path="/industries/health-care" Component={HealthCare} />
          <Route exact path="/industries/it-and-Telecom" Component={IT} />
          <Route exact path="/industries/transportation" Component={Transport} />
          <Route exact path="/industries/waste-management" Component={WasteMang} />

          <Route exact path="/products/BTS-2000" Component={BTS2000} />
          <Route exact path="/products/kranking-ultracapacitors" Component={Kranking} />
          <Route exact path="/products/control-relay-panels" Component={ControlRelay} />
          <Route exact path="/products/clip-fault-current-limiters" Component={ClipF} />
          <Route exact path="/products/best-case" Component={BestCase} />
          <Route exact path="/products/load-checker" Component={LoadChecker} />
          <Route exact path="/products/solar-design" Component={SolarDesign} />


          
          <Route exact path="/solutions/control-and-automation" Component={CnA} />
          <Route exact path="/solutions/process-continuity" Component={Process} />
          <Route exact path="/solutions/reliable-engine-starting" Component={Reliable} />
          <Route exact path="/solutions/fault-current-limiting" Component={Fault} />
          <Route exact path="/solutions/solar-design-engineering" Component={Solar} />
          <Route exact path="/solutions/solid-waste-treatment" Component={SolidWaste} />
          <Route exact path="/solutions/customised-professional-case" Component={Customized} />


          <Route exact path="/investors/contact-and-grievance" Component={ContactAndGriv} />
          <Route exact path="/investors/disclosures" Component={Disclosures} />
          <Route exact path="/investors/downloads" Component={Downloads} />
          <Route exact path="/investors/chairman-communication" Component={Chairman} />
          <Route exact path="/investors/shareholders-information" Component={Shareholders} />
          <Route exact path="/investors/shareholders-information-compliance-certificates" Component={ShCompliance} />
          <Route exact path="/investors/shareholders-information-corporate-announcements" Component={ShCorporate} />
          <Route exact path="/investors/shareholders-information-corporate-governance-report" Component={ShGovernanceReport} />
          <Route exact path="/investors/shareholders-information-corporate-reconciliation-of-share-capital-audit-report" Component={ShReconciliation} />
          <Route exact path="/investors/shareholders-information-shareholding-pattern" Component={ShShareholdingPattern} />
          <Route exact path="/investors/financial-reports" Component={FinancialReport} />
          <Route exact path="/investors/financial-reports-audit-yearly-report" Component={FRAuditYearlyReport} />
          <Route exact path="/investors/financial-reports-audit-half-yearly-report" Component={FRAuditHalfYearlyReport} />
          <Route exact path="/investors/overview" Component={Overview} />
          <Route exact path="/investors/financial-reports-faradigm-subsidiary-half-yearly-results" Component={FRFaradigm} />
          <Route exact path="/investors/financial-reports-subsidiary-half-yearly-results" Component={FRSubsidiary} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
