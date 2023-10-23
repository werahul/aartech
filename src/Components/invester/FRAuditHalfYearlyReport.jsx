import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'



const FRAuditHalfYearlyReport = () => {
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
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AUDITED HALF-YEARLY RESULTS</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                <div className="flex flex-col justify-between gap-y-3 h-auto ">
                <a href="https://drive.google.com/file/d/1m6wYPjLQ3u3YKlUJT716juE2RupywZWZ/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 31 March, 2023</div></a>
                <a href="https://drive.google.com/file/d/1-yo51TJ2nszMJD-Cn7u8hta-t_Zw7J62/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 30 September, 2022</div></a>
                <a href="https://drive.google.com/file/d/1NS3h9YeA6yjrl52TJKxnLpQlKWC0_G04/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the half year ended 31 March, 2023</div></a>
                <a href="https://drive.google.com/file/d/1U0y7b8U3cMGXVg0Z3rUqNlsM1vsXrdR0/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the half year ended 30 September, 2022</div></a>


                <a href="https://drive.google.com/file/d/1oLLmYBxIw6utINf_HkiBsx8EsFZS1EX-/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 31 March, 2022</div></a>
                <a href="https://drive.google.com/file/d/16rmRfcE0GSxmXgItW9YrdeyqlKt6e0Hs/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 30 September, 2021</div></a>
                <a href="https://drive.google.com/file/d/18wWGsIDvrQ2BkVzG52ktFCuw-qikgsCH/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Consolidated Financial Results for the half year ended 31 March, 2022</div></a>
                <a href="https://drive.google.com/file/d/1rNAYS2hcryIJrVuF4aFuvYfgtTr2sm8x/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Consolidated Financial Results for the half year ended 30 September, 2021</div></a>
                <a href="https://drive.google.com/file/d/1zvN-IVw0bBbi4il7I4luyYk54UELAN00/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Standalone Financial Results for the half year ended 31 March, 2021</div></a>
                <a href="https://drive.google.com/file/d/1qgyVFz63RXoankLGILyIQg4mq0k3xVD3/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Standalone Financial Results for the half year ended 30 September, 2020</div></a>
                <a href="https://drive.google.com/file/d/1g3C3ICPECkXTelBonjU3qMhQhvKq8IL1/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the half year ended 31 March, 2021</div></a>
                <a href="https://drive.google.com/file/d/1c4an3_KIlMDHRkK3EjfN0skEyB-WN6_J/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Consolidated Financial Results for the half year ended 30 September, 2020</div></a>
                <a href="https://drive.google.com/file/d/1EYkWrQF8R4v7168ovRECJt_nkL5LqYzc/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 31 March, 2020</div></a>
                <a href="https://drive.google.com/file/d/1fu4iARKC8AebQc8UIoviBLJzUp82i6LI/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 30 September, 2019</div></a>
                <a href="https://drive.google.com/file/d/1POuShyNZjxDI0wyzDiwwu7tJwhfZmyPA/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the half year ended 30 September, 2019</div></a>
                <a href="https://drive.google.com/file/d/1_ZlVhe5GScZT-rBWmXhCaCZdUpr4aIbD/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consilidated Financial Results for the half year ended 31 March, 2020</div></a>
                <a href="https://drive.google.com/file/d/1nb8_DO-LRUfpq-peWtrCOPk-Em7gJhRi/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">  Standalone Financial Results for the half year ended 31 March, 2019</div></a>
                
            </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FRAuditHalfYearlyReport