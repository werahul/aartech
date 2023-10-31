import React from 'react'
import { main, play, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'
import VideoComponent from './VideoComponent'

const Chairman = () => {

   

    return (
        <div>
            <Navbar />
            <SlideinBarInvester/>
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Chairman’s<br className='lg:hidden block' />Communication</div>
            </div>
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10">
                <div class="text-foot-blue lg:text-4xl text-xl lg:font-semibold font-bold font-Barlow">Introduction of Aartech Solonics Limited by Mr. Amit Raje</div>

                <VideoComponent />

                <table className='border border-black lg:w-[841px] text-left lg:mt-20 mt-10'>
                    <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] text-lg  '>
                        <th className='border border-[#0C013D] lg:w-[180px] px-5'>DATE</th>
                        <th className='border border-[#0C013D] lg:w-[621px] px-5'>TITLE</th>
                        <th className='border border-[#0C013D] lg:w-[150px] px-5'></th>

                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] text-lg '>
                        <td className='border border-[#0C013D] lg:w-[180px] px-5 text-black font-normal text-sm lg:text-lg font-Barlow'>30.09.2019</td>
                        <a href="https://drive.google.com/file/d/1oy51n24gwc1pWm4vTn64kch1BdWykcs7/view?pli=1" target='_blank'> <td className='  px-5 py-2 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer text-sm lg:text-lg'>Chairman’s statement at Aartech’s 37th AGM</td></a>
                        <td className='border border-[#0C013D] lg:w-[150px] px-5 text-black  font-Barlow font-semibold cursor-pointer text-sm lg:text-lg'>Virtual</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] text-lg '>
                        <td className='border border-[#0C013D] lg:w-[180px]  px-5 text-black font-normal font-Barlow text-sm lg:text-lg'>02.09.2023</td>

                        <a href="https://drive.google.com/file/d/1R5jfodLwUWhwYHYSYLnqtDbLuC_lveTR/view" target='_blank'> <td className='  px-5 py-2 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer text-sm lg:text-lg'>Chairman’s statement at Aartech’s 38th AGM</td></a>

                        <td className='border border-[#0C013D] lg:w-[150px] px-5 text-black  font-Barlow font-semibold cursor-pointer text-sm lg:text-lg'>Virtual</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] text-lg '>
                        <td className='border border-[#0C013D] lg:w-[180px]  px-5 text-black font-normal font-Barlow text-sm lg:text-lg'>06.09.2021</td>

                        <a href="https://drive.google.com/file/d/1iqOlQOnrGhW0dN-DbB-ir-vmVOXRkd6o/view" target='_blank'> <td className='  px-5 py-2 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer text-sm lg:text-lg'>Chairman’s statement at Aartech’s 39th AGM</td></a>

                        <td className='border border-[#0C013D] lg:w-[150px] px-5 text-black  font-Barlow font-semibold cursor-pointer text-sm lg:text-lg'>Virtual</td>
                    </tr>

                    <tr className='border border-black font-Barlow h-[50px] text-lg '>
                        <td className='border border-[#0C013D] lg:w-[180px]  px-5 text-black font-normal font-Barlow text-sm lg:text-lg'>16.08.2023</td>

                        <a href="https://drive.google.com/file/d/1oZV3XpQal-8g2UC8MamPS1xSfMA7S1Vh/view" target='_blank'> <td className='  px-5 py-2 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer text-sm lg:text-lg'>Chairman’s statement at Aartech’s 40th AGM</td></a>

                        <td className='border border-[#0C013D] lg:w-[150px] px-5 text-black  font-Barlow font-semibold cursor-pointer text-sm lg:text-lg'>Virtual</td>
                    </tr>

                    <tr className='border border-black font-Barlow h-[50px] text-lg '>
                        <td className='border border-[#0C013D] lg:w-[180px] px-5 text-black font-normal font-Barlow text-sm lg:text-lg'>06.09.2023</td>

                        <a href="https://drive.google.com/file/d/1oKexQiT77qso2wYBlYwftcn-yfvwzt5A/view" target='_blank'> <td className='  px-5 py-2 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer text-sm lg:text-lg'>Chairman’s statement at Aartech’s 41th AGM</td></a>

                        <td className='border border-[#0C013D] lg:w-[150px] px-5 text-black  font-Barlow font-semibold cursor-pointer text-sm lg:text-lg'>Virtual</td>
                    </tr>



                </table>


            </div>
            <Footer />

        </div>
    )
}

export default Chairman