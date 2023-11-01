import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import SlideinBarInvestor from '../../Pages/SlideinBarInvester'


const ShReconciliation = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    return (
        <div>
            <Navbar />
            <SlideinBarInvestor/>
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-foot-blue  absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Shareholders <br className='lg:hidden block' /> Information</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-9 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <Link to="/investors/shareholders-information" class="text-slate-900 text-base font-semibold font-Barlow ">&lt; BACK</Link>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Reconciliation of share capital audit report</div>

                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
            </div>
            <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                <div className="flex flex-col justify-between h-auto gap-y-3 ">
                    <a href="https://drive.google.com/file/d/1mdU9B1KI6EhdcRGj9E5zI8jowOJz13WG/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2022</div></a>
                    <a href="https://drive.google.com/file/d/1SH-rVzU-iOArJml8Deo1F38AVKTVh3tI/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2021</div></a>
                    <a href="https://drive.google.com/file/d/1s7nfULw1VuXihgs6uPRDtyzaYslXUC39/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2020</div></a>
                    <a href="https://drive.google.com/file/d/1KS0VMxoW-8zPlPZs-GMR_sVziXsRTNVC/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2019</div></a>
                    <a href="https://drive.google.com/file/d/1fTOsl654LVbihVLcdcdYxDEhaHvM2Umh/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2023</div></a>
                    <a href="https://drive.google.com/file/d/1bV4pmQuSTvioRlPq2dXXWoV85O7gzeyJ/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2022</div></a>
                    <a href="https://drive.google.com/file/d/1eLxVFXwoyb5hOSb4AwPsZ0f3W-nTFfjd/view
                    " target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2021</div></a>


                    <a href="https://drive.google.com/file/d/1DwXSP9kOzNJaAwFcJ2mFODWAbV4cq9JG/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2020</div></a>

                    <a href="https://drive.google.com/file/d/1hIhW6TC_eTiSsY5D2FiJ7rUs49jZCHmA/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2019</div></a>
                    <a href="https://drive.google.com/file/d/1SPN2JzS35aQRY4gvEcKlmKztXCkr3MXP/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended June 30, 2022</div></a>
                    <a href="https://drive.google.com/file/d/1VcjV-eWqwaIahcOfH-PzEoaiFz28ycsq/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended June 30, 2021</div></a>
                    <a href="https://drive.google.com/file/d/19coQ74lgGen4elwyNsRAiStZGHHoeSHO/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended June 30, 2020</div></a>
                    <a href="https://drive.google.com/file/d/1xkYL73O2tLDeJxnYGZfmHWQ9iu28bSxV/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended June 30, 2019</div></a>
                    <a href="https://drive.google.com/file/d/1w42Xg2Zyu3q9E3UcFhYy9gLSFv5fQojm/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended December 31, 2022</div></a>
                    <a href="https://drive.google.com/file/d/1VCzFMPjExFY__plY43VeqTfSzZTSwO44/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended December 31, 2021</div></a>
                    <a href="https://drive.google.com/file/d/1QAPyIZA1yKoVW4Y5UgTEzacjPZDOFtPi/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended December 31, 2020</div></a>
                    <a href="https://drive.google.com/file/d/1diREiyHK8_73xT_ixF2R9tgLGhiejB3i/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended December 31, 2019</div></a>



                </div>
            </div>

               

            </div>
            <Footer />
        </div>
    )
}

export default ShReconciliation