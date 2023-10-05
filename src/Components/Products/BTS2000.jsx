import React, { useState } from 'react'
import { Navbar, Footer } from "../index"
import { product1 } from '../../assets/workImages'
import { download } from "../../assets/images"

 
import {Accordion, Accordion2, Accordion3} from "../../Components"

import { CustomerLogos2 } from '../../Components'


const BTS2000 = () => {

    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const tagContents = {
        tag1: 'Thermal Power Generation serves as the largest source of electrical energy today. While the technologies for running such plants have matured tremendously over the years, there continue to be several key concerns in its operations. There is a very high focus today on improved Plant Load Factor (PLF) with heightened revenue consciousness, bottom-line efficiencies, productivity benchmarks and system improvement requirements.',
        tag2: 'Content for tag2 goes here.',
        tag3: 'Content for tag3 goes here.',
        tag4: 'Content for tag4 goes here.',
        tag5: 'Content for tag5 goes here.',
        tag6: 'Content for tag6 goes here.',
        tag7: 'Content for tag7 goes here.',
        tag8: 'Content for tag8 goes here.',
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };

    return (
        <div>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 ">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">BTS 2000 Fast Bus Transfer System
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">PRODUCTS</div>

                <div className="lg:flex lg:mt-20">
                    <div className="lg:flex ">
                        <div className="w-full">
                            <img src={product1} alt="" />
                        </div>
                        <div className="flex lg:flex-col flex-row gap-x-4  gap-y-[15px] lg:ml-[15px] lg:mt-0 mt-4">
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                        </div>
                    </div>
                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">BTS 2000 Fast Bus Transfer System</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">PRODUCTS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">BTS 2000 Fast Bus Transfer System is an advanced microprocessor based Bus Transfer System for Power Generation Utilities & Continuous Process Industries. By performing high speed motor bus transfers between two independent sources of power under prescribed safe system parameters, the Bus Transfer System provides continuity of power supply to the critical motors of a plant. This pre-empts any interruption to the processes running in the plant inspite of the contingency of the feeding source.
                        </div>
                        <div className="flex items-center lg:mt-4 mt-12 cursor-pointer">
                            <img src={download} alt="" />
                            <div className="text-foot-blue hover:text-box-red text-lg font-bold font-Barlow tracking-wider ml-[10px]">DOWNLOAD BROCHURE</div>
                        </div>
                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">INDUSTRIES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[237px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        THERMAL POWER
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[236px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        NUCLEAR POWER
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[227px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        CAPTIVE POWER
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[211px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        HYDRO POWER
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[150px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        METALS
                    </button>

                </div>
                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[245px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        PETROCHEMICALS
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[143px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        MINING
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[241px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}

                    >
                        WATER HANDLING
                    </button>
                </div>


                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">

                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[237px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        THERMAL POWER
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[236px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        NUCLEAR POWER
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[227px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        CAPTIVE POWER
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[211px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        HYDRO POWER
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[150px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        METALS
                    </button>


                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[245px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        PETROCHEMICALS
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[143px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        MINING
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[241px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}

                    >
                        WATER HANDLING
                    </button>

                </div>
                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">  {selectedTag && tagContents[selectedTag]}</div>



                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">FEATURES</div>
                <div className="lg:flex  justify-between mt-8 ">


                    <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
                        <li>Fast Transfer with less than 2 cycles of dead bus time</li>
                        <li>Simultaneous Fast Transfer</li>
                        <li>Sequential Fast Transfer</li>
                        <li>In Phase Transfer Mode with 2nd Order Prediction of First Phase Coincidence</li>
                        <li>Residual Voltage Transfer Mode</li>
                        <li>Protective Transfer Initiation on Upstream Protective Relay Operation</li>
                        <li>Intelligent Automatic Transfer Initiation using under/over voltage, frequency, |df/dt| criterion</li>
                    </div>
                    <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
                        <li>ANSI C50.41 2012 Compliant</li>
                        <li>Comprehensive Online Testing</li>
                        <li>Continuous Breaker Circuit Monitoring</li>
                        <li>Smart Breaker Failure Processing</li>
                        <li>Integrated System Interlocks</li>
                        <li>Advanced Software Tools for Virtual Testing</li>
                        <li>Transfer Event Upload Replay “What If” Analysis,Oscilography & SOE.</li>
                        <li>Standard communication protocols</li>
                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">CUSTOMISATION</div>
                <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
                    BTS 2000 is generally customised to project specific requirements. While there may be certain product configurations that are similar if not identical between projects, there is always a need to ensure that the switchgear circuits are appropriately designed and integrated to match the bus transfer requirements. <br /><br />

                    The product range illustrated to the right are therefore meant to serve as a general reference while specifics may vary on a case to case basis.<br /><br />


                    Please mail your custom specific requirements along with a copy of your Single Line Diagram (SLD), Specifications (if any) and Operational Philosophy to bts@aartechsolonics.com . We would be happy to assist you with our recommendations in the best possible manner.
                </div>

                <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">MAIN - TIE - MAIN (3 BREAKER SCHEME)</div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Facilities : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Techniques & softwares : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Processes & standardisation : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>


                    </div>

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">MAIN - TIE (2 BREAKER SCHEMES)</div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Locations : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>Mandideep, MP</li>
                            <li>Parwanoo, HP</li>


                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Testing facility : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Quality assurance : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>


                    </div>

                    <div className=" w-[100%] lg:h-auto h-[550px] border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-Barlow tracking-wider">OTHER CUSTOMISED SCHEMES</div>


                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>
                    </div>

                </div>


                <Accordion />
                <Accordion2 />
                <Accordion3 />


                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>
                <CustomerLogos2/>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-4">DOWNLOADS</div>

                <div className="lg:flex gap-x-5 lg:mt-[46px] mt-6">
                    <div className="lg:w-[60%] w-[100%]">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium  font-Barlow tracking-wider ">TECHNICAL PAPERS</div>
                        <div className=" lg:mt-[27px] ml-3 ">
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-PowerGen-Middle-East-2008.pdf" target='_blank'> <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium lg:mt-12 mt-5 '>A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, PowerGen-Middle East, Panama, Bahrain, Feb 2008
                            </li></a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-IEEE-POWERCON-2008.pdf" target='_blank'> <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>
                                A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, IEEE POWERCON Conference, New Delhi, India, Oct 2008.
                            </li></a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-NPSC-2008.pdf" target='_blank'>  <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>
                                A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, National Power Systems Conference, Mumbai, India, Dec 2008.
                            </li></a>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">PRESENTATIONS</div>
                        <div className="space-y-4  lg:mt-[46px] mt-5 ml-3">
                            <a href="https://www.figma.com/exit?url=http%3A%2F%2Faartechsolonics.com%2F%2Fwp-content%2Fuploads%2F2019%2F02%2FBTS-2000-2008-PowerGen-Middle-East-Fast-Bus-Transfer-Systems-A-System-Solution-Approach.ppt" target='_blank'>    <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium'>BTS 2000-2008 – PowerGen Middle East Fast Bus Transfer Systems – A System Solution Approach.ppt
                            </li></a>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">CASE STUDIES</div>
                        <div className="  lg:mt-[46px] mt-6 ml-3">

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Auto-Transfer-Requirements-in-Bus-Transfer-Schemes.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study – Auto Transfer Requirements in Bus Transfer Schemes.pdf
                                </li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Automatic-Station-to-Station-Bus-Transfer-to-avoid-AC-Failure.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study – Automatic Station-to-Station Bus Transfer to avoid AC Failure.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Breaker-Mechanism-Problem.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study – Breaker Mechanism Problem.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Spin-Down-Characteristics-for-Evaluating-Sequential-Fast-Transfer.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study – Spin Down Characteristics – for Evaluating Sequential Fast Transfer.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Unit-to-Station-Half-Station-to-Station-Scheme.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study – Unit-to-Station + Half Station-to-Station Scheme.pdf</li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Writeup.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study IEEE WG Report – Oscillographic Report and Analysis – Writeup.pdf</li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Oscillographs.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5'>Case Study IEEE WG Report – Oscillographic Report and Analysis – Oscillographs.pdf</li>
                            </a>
                        </div>
                    </div>


                </div>


            </div>
            <Footer />

        </div>
    )
}

export default BTS2000