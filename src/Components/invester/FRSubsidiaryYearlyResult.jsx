import React, { useEffect } from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


const FRSubsidiaryYearlyResult = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />

            <div className="relative lg:mt-[5.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Financial <br className='lg:hidden block' /> Reports</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-9 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <Link to="/investors/financial-reports" class="text-slate-900 text-base font-semibold font-Barlow ">&lt; BACK</Link>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Reports</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AARTECH’S SUBSIDIARY YEARLY RESULTS</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                <div className="flex flex-col justify-between gap-y-2 h-auto ">
                <a href="https://drive.google.com/file/d/1UF_VhgXSbFRR5WTBrz4VHJ6puZjT0XWs/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2023</div></a>
                <a href="https://drive.google.com/file/d/1px-ticMNhQpPFOLCPXmdDT7QqrITTmGT/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2022</div></a>
                <a href="https://drive.google.com/file/d/1MCRsB4lzNaiJtdpdaXeftz44JZs7Eqy5/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2021</div></a>
                <a href="https://drive.google.com/file/d/1GQfKb1ZGi91seuHP4IXMsZ2_C1vzMSwa/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold ">Financial Results for the year ended 31 March, 2020</div></a>
                <a href="https://drive.google.com/file/d/143A6aeNYPL0-W4NcgLzMHhAyT6XOWe5J/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold ">Financial Results for the year ended 31 March, 2019</div></a>
                
            </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FRSubsidiaryYearlyResult