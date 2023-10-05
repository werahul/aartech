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
import { BTS2000 } from './Components/Products'
import { Solution } from './Components/Solutions'

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


          <Route exact path="/industries/wind-power" Component={WindPower} />
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
          <Route exact path="/solutions/reactive-power-compensation" Component={Solution} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
