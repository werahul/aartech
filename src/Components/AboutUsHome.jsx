import React from 'react'
import { Link } from 'react-router-dom'

import CarouselAbout from './CarouselForAbout'


const AboutUsHome = () => {
    return (
        <>
            <div className="lg:flex justify-between items-center">

                <div className="lg:flex flex-col justify-between  lg:w-[80%]">
                    <div className="title lg:text-4xl text-[28px] text-box-red  font-normal font-antonio lg:mb-9 mb-2">
                        About Us
                    </div>
                    <div className="font-semibold text-box-red lg:text-[24px] leading-[28.8px] text-[20px] font-Barlow lg:mb-[24px] mb-4">Living Passions through Engineering</div>
                    <div className=" font-Barlow lg:font-normal font-medium lg:leading-7 text-lightBlack lg:w-[820px] lg:text-[20px] text-base w-[350px] leading-[22.4px]  ">Aartech Solonics was founded in 1985 and was converted into a public limited company in 1992. The mission at the time of inception was to be an Application Engineering Specialist. We are trusted by government agencies and policy makers of many countries for bringing in our future ready mindset and the right techniques for the challenges at hand. <br className='lg:block hidden' /><br />

                        <span className='lg:inline-block hidden  '>Over the years, we have grown into a super speciality team who have found their own ways of applying their personal Passions to the world of Engineering. </span>  </div>
                    <Link to="/about"> <button className="lg:w-[189px] w-[145px] lg:h-[49px] h-[44px] border-[1px] border-black lg:text[18px] text[16px] font-semibold lg:px-[39px] px-[20px] mb-4 lg:mt-[28px] mt-4 font-Barlow text-base"  >KNOW MORE</button></Link>
                </div>
                <div className="lg:w-[324px] w-[355px] h-[324px]">
                    <CarouselAbout />
                </div>

            </div >
        </>
    )
}

export default AboutUsHome