import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Disclosures = () => {
    return (
        <div>

            <Navbar />
            
            <div className="relative lg:mt-[5.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Disclosures</div>
            </div>

            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0  sm:px-10">
                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Disclosures under Regulation 46 and 62 of SEBI (LODR) Regulations ,2015</div>

                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DISCLOSURES UNDER REGULATION 46</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between h-[300px] ">
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Annual Returns</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Policies</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Statement of Deviation or Variation</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Annual Reports</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Audited Yearly Results</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Half yearly Results</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Quarterly Results</div>
                        <div class="text-black text-lg font-normal font-Barlow underline leading-normal cursor-pointer hover:font-semibold block">Subsidiary Companies Results</div>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Disclosures