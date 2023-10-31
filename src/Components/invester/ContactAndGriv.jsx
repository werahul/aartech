import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const ContactAndGriv = () => {
    return (
        <div>
            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Contacts &<br className='lg:hidden block' /> Grievance</div>
            </div>

            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-0 sm:px-10">

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-[39.20px]">Investors Contact & Grievance Redressal </div>
                <div class="text-black text-lg font-normal font-Barlow lg:leading-6 leading-5 lg:mt-6 mt-4">For transfer / dematerilisation of shares, payment of dividend on shares and any other query relating to the shares of the Company:</div>

                <div class=" text-box-red lg:text-lg text-base font-bold font-Barlow uppercase lg:leading-normal lg:mt-8 mt-6">Aartech Solonics Limited</div>
                <div class=" text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow leading-6 lg:mt-2 mt-2">E-2/57 Ashirwad, Arera Colony,Bhopal, <br /> Madhya Pradesh - 462016<br />CIN: L31200MP1982PLC002030</div>

                <div class="text-box-red lg:text-lg text-base font-bold font-Barlow uppercase leading-normal lg:mt-8 mt-6">(i) For Securities held in Physical form</div>
                <div class="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow leading-6 lg:mt-2 mt-2">Bigshare Services Private Limited Office No S6-2, <br />6th Floor, Pinnacle Business Park, Next to AhuraCentre, <br />Mahakali Caves Road, Andheri (East), Mumbai-400093Maharashtra,India<br />Tel: +91 22 62638222 <br />Fax: +91 22 28475207<br />Investor Grievance Id: investor@bigshareonline.com<br />Email: ipo@bigshareonline.com<br />Website: www.bigshareonline.com<br /></div>

                <div class="text-box-red lg:text-lg text-base font-bold font-Barlow uppercase leading-normal lg:mt-8 mt-6">(ii) For Securities held in Demat form</div>
                <div class="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow leading-6 lg:mt-2 mt-2">To the Investors' Depository Participant (s) and/or <br />
                    Bigshare Services Private Limited
                </div>

                <div class="text-box-red lg:text-lg text-base font-bold font-Barlow uppercase leading-normal lg:mt-8 mt-6">(iii) Any query on Annual Report/Contact Investor Relations</div>
                <div class="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow leading-6 lg:mt-2 mt-2">Mr. K R Tanuj Reddy<br/>Company Secretary & Compliance OfficerAartech Solonics Limited<br/>E-2/57 Ashirwad, Arera Colony Bhopal, <br/>Madhya Pradesh 462016<br/>Email id - compliance@aartechsolonics.com<br/>Contact no - 7389924734</div>



                {/* <div className="lg:flex lg:gap-x-[150px]">
                    <div className="">
                        <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Investors Contact</div>
                        <div class="text-red-700 lg:text-lg text-base font-bold font-Barlow lg:leading-normal leading-tight lg:mt-8 mt-5">COMPANY SECRETARY</div>
                        <div class="text-black lg:text-lg text-base font-normal font-Barlow lg:leading-6 leading-tight lg:mt-3 mt-2">Shri Vivin Mally<br />Deputy Nodal Officer (IEPF)<br />Reliance Industries Limited<br />3rd Floor, Maker Chambers IV, 222,<br />Nariman Point, Mumbai - 400 021<br />E-Mail: vivin.mally@ril.com</div>
                    </div>
                    <div className="lg:mt-0 mt-10">
                        <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Grievance Redressal</div>
                        <div class="text-red-700 lg:text-lg text-base font-bold font-Barlow lg:leading-normal leading-tight lg:mt-8 mt-5">PERSON DESIGNATION</div>
                        <div class="text-black lg:text-lg text-base font-normal font-Barlow lg:leading-6 leading-tight lg:mt-3 mt-2">DETAILS Shri Vivin Mally<br />Deputy Nodal Officer (IEPF)<br />Reliance Industries Limited<br />3rd Floor, Maker Chambers IV, 222,<br />Nariman Point, Mumbai - 400 021<br />E-Mail: vivin.mally@ril.com</div>
                    </div>
    </div>*/}

            </div>
            <Footer />


        </div>
    )
}

export default ContactAndGriv