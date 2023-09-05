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
        <Route exact path="/custom" Component={CustomSelect} />
        <Route exact path="/media" Component={Media} />
        <Route exact path="/industries" Component={Industries} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/solutions" Component={Solutions} />
        <Route exact path="/announcement-page" Component={AnnouncementPage} />
        <Route exact path="/privacy-policy" Component={Privacy} />
        <Route exact path="/cookies" Component={Cookie} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
