import React from 'react'
import { Link } from 'react-router-dom'

import CarouselAbout from './CarouselForAbout'


const AboutUsHome = () => {
    return (
        <>
            <div className="lg:flex justify-between items-center ">

                <div className="lg:flex flex-col justify-between  lg:w-[80%] ">
                    <div className="title lg:text-4xl text-[28px] text-box-red  font-normal font-antonio lg:mb-9 mb-2">
                        About Us
                    </div>
                    <div className="font-semibold text-box-red lg:text-[24px] leading-[28.8px] text-[20px] font-Barlow lg:mb-[24px] mb-4">Living Passions through Engineering</div>
                    <div className=" font-Barlow lg:font-normal font-medium  lg:leading-7 text-lightBlack lg:w-[820px] lg:text-[20px] text-base w-auto leading-[22.4px]  ">Aartech Solonics was founded in 1985 with the aim  of becoming an “Application Engineering Specialist” company. It won many laurels & major businesses with this approach. It became a public limited company in 1992. We are trusted by the Indian government agencies and policymakers of many other countries. With our future-ready mindset, we assist them in ushering in the right techniques for the challenges at hand.
                    <br /><br />
                        Over the years, Aartech has evolved into a close-knit team specializing in many domains. Every team member contributes individually to the growth of the company by applying their personal Passions to the world of Engineering.</div>
                    <Link to="/about"> <button className="lg:w-[189px] w-[145px] lg:h-[49px] h-[44px] border-[1px] border-black lg:text[18px] text[16px] font-semibold lg:px-[39px] px-[20px] lg:mb-0 mb-4 lg:mt-[28px] mt-4 font-Barlow text-base"  >KNOW MORE</button></Link>
                </div>
                <div className="lg:w-[450px] 2xl:w-[470px  w-auto  2xl:h-[410px]">
                    <CarouselAbout />
                </div>

            </div >
        </>
    )
}

export default AboutUsHome