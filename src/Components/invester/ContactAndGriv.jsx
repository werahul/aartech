import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const ContactAndGriv = () => {
    return (
        <div>
            <Navbar/>
            <SlideinBarInvester/>
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Contacts &<br className='lg:hidden block' /> Grievance</div>
            </div>

            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10">
                <div className="lg:flex lg:gap-x-[150px]">
                    <div className="">
                        <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Investors Contact</div>
                        <div class="text-red-700 lg:text-lg text-base font-bold font-Barlow lg:leading-normal leading-tight lg:mt-8 mt-5">COMPANY SECRETARY</div>
                        <div class="text-black lg:text-lg text-base font-normal font-Barlow lg:leading-6 leading-tight lg:mt-3 mt-2">Shri Vivin Mally<br />Deputy Nodal Officer (IEPF)<br />Reliance Industries Limited<br />3rd Floor, Maker Chambers IV, 222,<br />Nariman Point, Mumbai - 400 021<br />E-Mail: vivin.mally@ril.com</div>
                    </div>
                    <div className="lg:mt-0 mt-10">
                        <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Grievance Redressal</div>
                        <div class="text-red-700 lg:text-lg text-base font-bold font-Barlow lg:leading-normal leading-tight lg:mt-8 mt-5">PERSON DESIGNATION</div>
                        <div class="text-black lg:text-lg text-base font-normal font-Barlow lg:leading-6 leading-tight lg:mt-3 mt-2">DETAILS Shri Vivin Mally<br />Deputy Nodal Officer (IEPF)<br />Reliance Industries Limited<br />3rd Floor, Maker Chambers IV, 222,<br />Nariman Point, Mumbai - 400 021<br />E-Mail: vivin.mally@ril.com</div>
                    </div>
                </div>
               
            </div>
            <Footer/>


        </div>
    )
}

export default ContactAndGriv