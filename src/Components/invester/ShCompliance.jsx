import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import SlideinBar from '../../Pages/SlideInBar'
import SlideinBarInvestor from '../../Pages/SlideinBarInvester'


const ShCompliance = () => {
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

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Compliance certificates</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">LATEST FROM THIS MONTH </div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto ">
                        <a href="https://drive.google.com/file/d/1iJEWOjD0-nKcKDDFdkGCMxtLZM0HLtNm/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended <br />September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/1oq5bj-_Zz5LHCOlRf4qtf49-mm7aDlXE/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended <br />September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/1ZYB8pROuh366XKohZMg-kJwr3VMIp7rQ/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1cQuvzA6WkJEGw0A2ffFJvHKj3VTSfH8p/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1URqUGGGbT6McBNsoRw8U9NIL3yVCa8Cn/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2021</div></a>
                        <a href="https://drive.google.com/file/d/1YtjS4rNiSUd9ERRjqdaH-csPntutLJV-/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2020</div></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShCompliance