import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideInBar from '../../Pages/SlideInBar'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const Disclosures = () => {
    return (
        <div>

            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
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
                    <div className="flex flex-col justify-between gap-y-3 h-auto]">

                        <a href="https://drive.google.com/file/d/1LD34QhYBBPFWcU6MULxzUt-NHf02JJGH/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2021-2022</div></a>
                        <a href="https://drive.google.com/file/d/1LMGdoVd2vzlfbfHvbqbDoKpQMC1Tddh8/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2020-2021</div></a>
                        <a href="https://drive.google.com/file/d/1_lByDkYRdLIZcyPzPxBMyLZX3fQL1Ts6/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2019-2020</div></a>
                        <a href="https://drive.google.com/file/d/15kEEjp26k7-z7_TmzmId0wM7zPfsGmUz/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2018-2019</div></a>

                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Disclosures