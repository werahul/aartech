import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const Downloads = () => {
    return (
        <div>

            <Navbar />
           <SlideinBarInvester/>
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Downloads</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                

                <table className='border border-black lg:w-[841px] text-left '>
                    <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] lg:text-lg text-sm'>
                        <th className='border border-[#0C013D] lg:w-[220px] px-5'>DOCUMENT TYPE</th>
                      <th className='border border-[#0C013D] lg:w-[621px] px-5'>NAME</th>

                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                         <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'> <a href="https://drive.google.com/file/d/19bL85xki0h91TKN7UYxb_XIxnAC7I210/view" target='_blank'> Form ISR-5</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'> <a href="https://drive.google.com/file/d/1Mquplkra1Xa58oUA4ANvsuJbFUKK_Erm/view" target="_blank">Form ISR-4</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1JM7RCjvQXgJxCvDof4qc4lzcmEX6PxHU/view" target='_blank'> Form ISR-3</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'> <a href="https://drive.google.com/file/d/17s0Uiys-kgYwRn_I5cHMRxqrmnp_ZOTu/view" target="_blank" rel="noopener noreferrer"> Form ISR-2</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1YWrkhowIH4ehhXiU2FReA9LIfqzOwlXS/view" target="_blank" rel="noopener noreferrer">Form ISR-1</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'> <a href="https://drive.google.com/file/d/1Dj32uAziI4tld-VzCe1yQf-hcy08vFSx/view" target="_blank" rel="noopener noreferrer">Form 15H</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Form</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1vduvQ4e_HOKegcPsBtCbvYDbobSzNMDz/view" target="_blank"> Form 15G</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Annexure</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1Do2xaMQje-hBW2gz9dFXKO_MKVsUn4Ky/view" target="_blank" rel="noopener noreferrer"> Annexure F - NOC</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Annexure</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1pN7DJXzWadt3s2EYfjMcDpmiCltLmPKI/view" target="_blank" rel="noopener noreferrer"> Annexure E - Indemnity Bond</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Annexure</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'> <a href="https://drive.google.com/file/d/1N7i4To7pQnUpusTsSASmvIhfkNo7u_b2/view" target="_blank" rel="noopener noreferrer">Annexure D - Affidavit</a></td>
                    </tr>
                    <tr className='border border-black font-Barlow h-[50px] lg:text-lg text-sm'>
                        <td className='border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow'>Annexure</td>
                        <td className='border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer'><a href="https://drive.google.com/file/d/1hK0gPR5QUGpdiX1Bvq1xGj7ryJHdhaNX/view" target="_blank" rel="noopener noreferrer">Annexure A - Ready Reckoner</a></td>
                    </tr>
                  
                    

                </table>

            </div>
            <Footer />

        </div>
    )
}

export default Downloads