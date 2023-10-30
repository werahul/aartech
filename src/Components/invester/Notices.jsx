import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const Notices = () => {
    return (
        <div>

            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Notices</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0  sm:px-10">

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 ">Notices</div>
                <table className='border border-black lg:w-[841px] text-left lg:mt-9 mt-6'>
                    <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] lg:text-lg text-sm'>
                        <th className='border border-[#0C013D] lg:w-[220px] px-5'>DATE</th>
                        <th className='border border-[#0C013D] lg:w-[621px] px-5'>TITLE</th>

                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>11.01.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1PR6OrJr-7tjr42mzzDlao6EuMllWxb0t/view" target="_blank" rel="noopener noreferrer"> Notice of Board Meeting</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>19.02.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1N0LzH8_0QDxhLAqw7Q36lPWcATUGAUWz/view" target="_blank" rel="noopener noreferrer"> Notice of Postal Ballot</a></td>
                    </tr>

                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>23.03.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1TLHU-Bb4Dx9QwB7tkNtQHKjSTW4WNfqi/view" target="_blank" rel="noopener noreferrer"> Notice of Board Meeting </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>11.05.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1aoBKTbS-9njg7yIRTh6mwIoD3xqVbqt6/view" target="_blank" rel="noopener noreferrer"> Notice of Board Meeting </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>  19.06.2023  </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/16BS654-2IDWqWHg9h5Xo4plKF1gFD0TN/view" target="_blank" rel="noopener noreferrer">     Notice of Postal Ballot     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>  14.08.2023  </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1h5R2QKfK54l_E9oyPlNDOP-MGaFdP_Pe/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>  06.09.2023  </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1kQ7aA69O9uB-0hAdN_t6z8NpWsQS_jCz/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>  21.03.2022 </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1wbq6UL3GDUxaBhyD676V96WbPT7wY6jO/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>  12.05.2022</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1sDD7a4ZMl07IGdE6sLNUFHhHIruSP4dj/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 16.08.2022</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/12uh6x3ucrbF3w-5DHS-1bRDto_RH1kuR/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 09.09.2022</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1sGflX_U2TTpxdd9ga3KSMOic8My57e56/view" target="_blank" rel="noopener noreferrer">    Notice of Annual General Meeting      </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 12.11.2022</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1DNtLItdHUwqydbe_d5e3K4-3Lzk9Zjcv/view" target="_blank" rel="noopener noreferrer">    Notice of Board Meeting      </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 08.02.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1lEgGUgxdlEh_1hDREkMWvUuWRSWSfTfV/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 15.06.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1g6ByEwL9unUaWykORNbhO8UiowVT02xF/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting      </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 06.09.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/10DxzC_ZzC38iw_p13eTiuyiUsqBDXhju/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>


                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 29.09.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1L-MiOL4_riEL1qYfqOO1Mamp1bSnemzK/view" target="_blank" rel="noopener noreferrer">     Notice of Annual General Meeting   </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 03.11.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1E_g-gv_khuO4pbx8BEuICe_zrDojH-DO/view" target="_blank" rel="noopener noreferrer">  
                         Notice of Board Meeting       </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 10.11.2021</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1wUGYnLoq5LqfV8yV-0KjTFFafHSUY1Et/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 29.06.2020</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1SjP4YuiCWwmivLwLW2jVoMqnJtDvglR1/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 02.09.2020</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1xqZ1GjK1T7P9tYaqMHbSI52uQL-w1dHB/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 24.09.2020</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1-sJOoUGdGYWUBh9wXakf786hJZvURAsg/view" target="_blank" rel="noopener noreferrer">    24.09.2020
                         Notice of Annual General Meeting </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 13.11.2020</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1L1LjcXZJUGUd0ow48bgxmhiAamDhHWzj/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 30.04.2019</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/19-k9QnLtOPJH4W2Yf0AwGXdrmopAz4ES/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 04.06.2019 </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/12NjGJu2ze23Kad1810O8B3s81AmZnBzU/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 14.11.2019 </td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1SEsRfvSI8_mzacx2vLzesvPZ4kDC7Dje/view" target="_blank" rel="noopener noreferrer">     Notice of Board Meeting     </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>06.09.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1x4gsCNhX8Kr0FcNMCIBOpHS2vdWlQvD9/view" target="_blank" rel="noopener noreferrer">   Notice for Book Closure Date For 41st Annual General Meeting </a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'> 06.09.2023</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1FU4utReRyR1uc0OnhYGqhZACzovfu6Q9/view" target="_blank" rel="noopener noreferrer">    03.11.2021
                        Notice for Record Date For 41st Annual General Meeting  </a></td>
                    </tr>
                </table>

            </div>
            <Footer />
        </div>
    )
}

export default Notices
