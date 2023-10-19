import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Downloads = () => {
    return (
        <div>

            <Navbar />
           
            <div className="relative lg:mt-[5.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Downloads</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                {/* <div class="w-[841px] h-[50px] flex justify-start px-8 items-center bg-slate-900 border border-black">

                </div>
                <div class="w-[841px] h-auto border border-black px-8 py-8">
                    <div className="flex flex-col justify-between h-[300px] ">

                    </div>

    </div>*/}

                <table className='border border-black lg:w-[841px] text-left '>
                    <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] lg:text-lg text-sm'>
                        <th className='border border-[#0C013D] lg:w-[220px] px-5'>DOCUMENT TYPE</th>
                        <th className='border border-[#0C013D] lg:w-[621px] px-5'>NAME</th>

                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Financial statement</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Statutory documents</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                    </tr>
                    

                </table>

            </div>
            <Footer />

        </div>
    )
}

export default Downloads