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
import RnD from './Pages/RnD'

// import Navbar from "./Components/Navbar"

import {DefenceAndExp, Renewable, NonRenewable, PowerTran ,HeavyEng, HealthCare, IT, Transport, WasteMang } from './Components/Industries'
import { BTS2000,Kranking, ControlRelay, ClipF, BestCase, LoadChecker ,SolarDesign, SolidWastePro } from './Components/Products'
import { CnA, Process, Reliable, Fault, Solar,SolidWaste, Customized, Ups, PowerBackup, Energy, Load } from './Components/Solutions'
import { ContactAndGriv,Disclosures,Downloads, Chairman, Shareholders, ShCompliance, ShCorporate, ShGovernanceReport,ShReconciliation, ShShareholdingPattern, FinancialReport, FRAuditYearlyReport, FRAuditHalfYearlyReport, Overview, FRFaradigm, FRSubsidiary, DisPolicies, Notices, FRSubsidiaryYearlyResult, FRFaradigmYearlyResult} from './Components/invester'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Awards1, Awards2 ,Awards3, Awards4 , Awards5} from './Pages/Awards SubPage'

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
          <Route exact path="/products/solid-waste-treatment" Component={SolidWastePro} />


          
          <Route exact path="/solutions/control-and-automation" Component={CnA} />
          <Route exact path="/solutions/process-continuity" Component={Process} />
          <Route exact path="/solutions/reliable-engine-starting" Component={Reliable} />
          <Route exact path="/solutions/fault-current-limiting" Component={Fault} />
          <Route exact path="/solutions/solar-design-engineering" Component={Solar} />
          <Route exact path="/solutions/solid-waste-treatment" Component={SolidWaste} />
          <Route exact path="/solutions/customised-plastic-case" Component={Customized} />
          <Route exact path="/solutions/uninterrupted-power-supply" Component={Ups} />
          <Route exact path="/solutions/power-backup-unit" Component={PowerBackup} />
          <Route exact path="/solutions/energy-storage" Component={Energy} />
          <Route exact path="/solutions/load-limiting" Component={Load} />


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
          <Route exact path="/investors/disclosures-policies" Component={DisPolicies} />
          <Route exact path="/investors/notices" Component={Notices} />
          <Route exact path="/investors/financial-reports-subsidiary-yearly-results" Component={FRSubsidiaryYearlyResult} />
          <Route exact path="/investors/financial-reports-faradigm-subsidiary-yearly-results" Component={FRFaradigmYearlyResult} />
          
          <Route exact path="/media/award-presented-by-the-defense-minister" Component={Awards1} />
          <Route exact path="/media/recognised-by-the-department-of-scientific-and-industrial-research" Component={Awards2} />
          <Route exact path="/media/iso-9001-2015-certification" Component={Awards3} />
          <Route exact path="/media/serves-as-an-atal-incubation-centre" Component={Awards4} />
          <Route exact path="/media/winner-in-the-flctd-innovation-challenge-2022" Component={Awards5} />


          <Route exact path="/r&d-facilities" Component={RnD} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
