import React from 'react'
import { Footer, Navbar } from '../Components'
import { anImg1 } from '../assets/images'

const AnnouncementPage = () => {
  return (
    <>
    <Navbar/>
    <div className="lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 ">
    <div className="  lg:mt-20 text-black lg:text-[28px] text-[20px] font-Barlow font-bold lg:leading-9 leading-6">Aartech bags supply order to deliver Ultracapacitor-based systems to Indian Army</div>
    <div className=" text-box-red text-lg font-bold leading-normal lg:my-7 font-Barlow my-3">26 April 2021</div>
    <div className="w-full h-auto bg-gray-300">
    <img src={anImg1} alt="" className='w-full' /></div>
      <div className=" text-black lg:text-xl text-[18px] font-normal font-Barlow leading-relaxed lg:mt-8 mt-4">Aartech Solonics Limited announced on 26 April 2021 that it has bagged a prestigious supply order of an undisclosed amount from the Indian Army for supply of its state-of-the-art KranKing® Ultracapacitor based Systems for ‘A’ Vehicles. KranKing® Ultracapacitors based Systems for ‘A’ Vehicles are extremely effective in the starting operations of Tanks/ICVs (type ‘A’ as well as type ‘B’ Vehicles), particularly in High Altitude Areas under extremely low temperature conditions in which batteries fail to perform. They have a 10x life, can handle 100x number of charge-discharge cycles and can be charged almost instantly compared to present day battery options in use. It also comes with various advanced features for testing, monitoring and protection; and includes independent energy harvesting sources to ensure engine starting under emergency situations.

      Amit Raje, Chairman and Managing Director and also the CTO of the company, said on the occasion, “It is a matter of great honour to have received an opportunity to serve the Indian Army. During trials we have closely worked alongside the ranks and empathized with the numerous pain points in real world field situations. Our UCAP SSD (System Solution Division) Team and Industrial Research, Design & Development (IRDD) Team, in collaboration with our 100% subsidiary FaraDigm® Ultracapacitors Team have applied lot of innovative design thinking to overcome these problems in a very effective and efficient manner; which have found lot of appreciation and acceptance by its users through numerous field trials and demonstrations.”
      
      Also speaking on the occasion, Arati Nath, CEO opined, “Aartech has been working towards defence applications for more than a decade now and this breakthrough is nothing short of a wholesome validation of its technology capabilities, business aptitude and ability to sustainably differentiate itself from the crowd. We intend to unlock greater and greater value and potential by expanding horizontally and vertically in the defence domain in the near future. There are other technology demonstration and vendor development project(s) with defence agencies also under execution as we speak.”
      Aartech is a 30+ year old, BSE-SME Listed, ISO-9001:2015 certified techno-preneurially driven company working in the field of selected and specialized energy applications. Its R&D facility is recognized by DSIR (Department of Scientific & Industrial Research), DST, Govt of India and has pioneered introduction of several innovations and system solutions in different domains including power generation, transmission, distribution, continuous process industries, defence, railways, renewables and several industrial applications in India and abroad.
      KranKing®, FaraDigm® and Aartech Solonics Ltd® are the registered trademark of Aartech Solonics Limited. All rights reserved. <br /><br />
    
    For more information, please visit <span className='underline'><a href="https://aartechsolonics.com/">aartechsolonics.com</a></span></div>
    </div>
    <Footer/>
    </>
  )
}

export default AnnouncementPage