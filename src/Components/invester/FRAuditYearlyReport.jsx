import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import SlideinBarInvestor from '../../Pages/SlideinBarInvester'


const FRAuditYearlyReport = () => {
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
                <div class="text-foot-blue  absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Financial <br className='lg:hidden block' /> Reports</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-9 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <Link to="/investors/financial-reports" class="text-slate-900 text-base font-semibold font-Barlow ">&lt; BACK</Link>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Reports</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AUDITED YEARLY  REPORTS</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                <div className="flex flex-col justify-between gap-y-3 h-auto ">
                <a href="" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2023</div></a>
                <a href="https://drive.google.com/file/d/1-v1dcEVg1D9_l7ej8Xr-P65JfBVd2uUH/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2023</div></a>
                <a href="https://drive.google.com/file/d/1t4Nv5Z3Bg7ux6ecI_K4c5h9tQpUBJVPz/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2022</div></a>
                <a href="https://drive.google.com/file/d/106pp3p448d-AQSmVUIBLVIJ44kVaGcGr/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2022</div></a>

                <a href="https://drive.google.com/file/d/1Ee5J-5afVITehlhLfA89lynvQ3hUG2YM/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2021</div></a>
                <a href="https://drive.google.com/file/d/1VKXKLj-QzLBB5vNUH_XWZZ1Apx3obPrr/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2021</div></a>
                <a href="https://drive.google.com/file/d/1RdttNMo3QdSCb42-tj3r6yfN-DiKZzwn/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2020</div></a>
                <a href="https://drive.google.com/file/d/1_QRSa4n5irwblI7M-9GpgYU1MD6jk_Sr/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2020</div></a>
                <a href="https://drive.google.com/file/d/1fD6y1yk9G2rGZi23GUltL4IYOZpquWmP/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2019</div></a>
                <a href="https://drive.google.com/file/d/17Qf3R03lWNvmU1rY0PU1GMChGyeGxQqq/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2019</div></a>
                
            </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FRAuditYearlyReport