import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


const ShGovernanceReport = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    return (
        <div>
            <Navbar />
            <div className="relative lg:mt-[5.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Shareholders <br className='lg:hidden block' /> Information</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-9 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <Link to="/investors/shareholders-information" class="text-slate-900 text-base font-semibold font-Barlow ">&lt; BACK</Link>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Corporate governance report</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">LATEST FROM THIS MONTH </div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                <div className="flex flex-col justify-between lg:h-[600px] h-[230px]">
                    <a href="" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2022-2023</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2021-2022</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>

                </div>
                <Link to="/investors/shareholders-information-corporate-governance-report" class="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-9 cursor-pointer hover:border-red-700 text-red-700 lg:text-base text-sm font-normal font-Barlow whitespace-nowrap leading-none hover:text-black">
                    VIEW ALL
                </Link>

            </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShGovernanceReport