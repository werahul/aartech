import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


const ShCorporate = () => {

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
            <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">Corporate announcements</div>

            <table className='border border-black lg:w-[841px] text-left lg:mt-9 mt-6'>
                <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] lg:text-lg text-sm'>
                    <th className='border border-[#0C013D] lg:w-[220px] px-5'>DATE</th>
                    <th className='border border-[#0C013D] lg:w-[621px] px-5'>TITLE</th>

                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>
                <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                    <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>31.12.2023</td>
                    <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'>Chairman’s statement at Aartech AGM</td>
                </tr>

            </table>

            </div>
                
            
            <Footer />
        </div >
    )
}

export default ShCorporate