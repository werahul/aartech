import React, {useEffect} from 'react'
import { brand1, brand2, brand3 } from '../assets/images'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const OurBrands = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only once
  return ( 
    <>
    <Navbar/>
      <div className="fullPage lg:px-20 lg:py-[80px] lg:mt-[4rem] pt-[8rem] w-[100%] p-4">


        <div className="title text-4xl text-box-red font-normal font-antonio lg:mb-8 mb-6 mt-[14px]">
          Our Brands
        </div>

        <div className="brandsSection lg:flex lg:space-x-[28px] lg:space-y-0 space-y-8 mb-16 ">

          <div className="brandsCard  lg:w-full lg:h-auto  lg:space-y-[23px] space-y-2" >
            <div className="brandImg flex items-center justify-center px-6 py-8 h-60 bg-box-bg lg:h-[229px]" >
              <img src={brand1} alt="brands" />
            </div>
            <div className="brandText lg:text-xl lg:leading-relaxed leading-snug lg:mt-[23px] my-6 font-normal text-black lg:font-[400] lg:text-[18px] lg:w-full font-Barlow">
              <h4>Aartech Solonics pioneers in advanced power electronics and energy solutions. With a focus on innovation and sustainability, we deliver cutting-edge products, including ultracapacitors and power quality solutions to shape a cleaner energy future.</h4>
            </div>
          </div>

          <div className="brandsCard  lg:w-full lg:h-[422px] lg:space-y-[23px] space-y-2" >
          <div className="brandImg flex items-center justify-center px-6 lg:py-8  h-60 bg-box-bg lg:h-[229px]" >
              <img src={brand2} alt="brands" />
            </div>
            <div className="brandText lg:text-xl lg:leading-relaxed leading-snug lg:my-[23px] my-6 font-[500] lg:font-[400] lg:text-[18px] lg:w-full w-[350px] font-Barlow  ">
              <h4>Faradigm, presents cutting-edge ultracapacitors designed to revolutionize energy storage solutions. These advanced devices harness innovative technology to deliver rapid energy discharge, extended lifecycles, and exceptional performance for a greener future.</h4>
            </div>
          </div>
          <div className="brandsCard  lg:w-full lg:h-[422px] lg:space-y-[23px] space-y-2" >
            <div className="brandImg flex items-center justify-center px-6 py-8 h-60 bg-box-bg lg:h-[229px]">
              <img src={brand3} alt="brands" />
            </div>
            <div className="brandText lg:text-xl lg:leading-relaxed leading-snug lg:my-[23px] my-6 font-[500] lg:font-[400] lg:text-[18px] lg:w-full w-[350px]  ">
              <h4 className='-mb-5'>BestCase: More Than Just Cases. Entrepreneurs, creators, designers, and teams sometimes struggle to find the right cases because they can be expensive or hard to find. BestCase steps in as a solution provider. BestCase ensures online access 24/7, delivering quality, affordability, and availability.</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default OurBrands
