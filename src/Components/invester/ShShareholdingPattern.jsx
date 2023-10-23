import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


const ShShareholdingPattern = () => {
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

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Shareholding pattern</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto">
                        <a href="https://drive.google.com/file/d/1w3A-RvJe2ROOjGYgqW8sESCLhoskQHV0/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1NTgWba7VGk7JIpwuQlnuJuE_2i7hV1jV/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2021</div></a>
                        <a href="https://drive.google.com/file/d/1FVJ-BjN7yFqipuFVuvfxAapF7M5OqK7z/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/12wt1bYLOA_8DgXjSbPoVdzMRJ9DlvcH9/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/13JTru-xar4kgMWmfGcIAalD6Whzya09O/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1PSttulZOZo1CZJgSwQO0kapGVzOvUuu_/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">  Shareholding Pattern as on March 31, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1j4T44EEsUyxuiF0F190CbvtzTHx66kYF/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2021</div></a>


                        <a href="https://drive.google.com/file/d/1V2RjTLd18Fv4AbQ3_puFj3jBeCnL0rAD/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2020</div></a>
                        <a href="https://drive.google.com/file/d/1Y2m6cIutW1vrEPSOnMI1X7NKz_GsqcUo/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2019</div></a>
                        <a href="https://drive.google.com/file/d/18g4KQ4rkZiVm_QCMgDpy9_usRa_WQ5gC/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on June 30, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1aRnQpvznccXedViZxVhc91RBRpkRKsFB/view" target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on December 31, 2022</div></a>
                        


                    </div>
                    

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShShareholdingPattern