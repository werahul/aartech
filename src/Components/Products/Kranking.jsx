import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { product1 } from '../../assets/workImages'
import { download } from "../../assets/images"
import { Accordion, Accordion2, Accordion3 } from "../../Components"
import { CustomerLogos2 } from '../../Components'


import { ImageSelect } from "../ImageSelector";
import { kra1, kra2, kra3, kra4, kra5 } from '../../assets/proImages'


const Kranking = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const images = [kra1, kra2, kra3, kra4, kra5];


    const tagContents = {
        tag1: 'KranKing® Ultracapacitors bolster the reliability of critical systems in Defense and exploration by reducing the load on batteries during engine starts, extending battery life, and delivering exceptional performance even in extreme temperatures (-45°C to 55°C), ensuring dependable operation in challenging environments.        ',

        tag2: 'KranKing® Ultracapacitors boost Renewable Energy by reducing battery strain during startup, allowing downsizing, and ensuring durability over 300,000 cycles in extreme temperatures (-45°C to 55°C), ensuring reliable energy generation.        ',

        tag3: 'KranKing® Ultracapacitors boost Non-Renewable Energy by reducing startup battery load, enabling downsizing, and ensuring remarkable durability in extreme temperatures, thus enhancing system reliability and performance.',

        tag4: 'KranKing® Ultracapacitors improve Power Transmission and Distribution by reducing battery strain during startup, allowing downsizing, and showing remarkable durability with 300,000+ cycles, even in extreme temperatures (-45°C to 55°C), ensuring reliability in critical applications.',

        tag5: "KranKing® Ultracapacitors bolster Heavy Engineering Industries by easing the load on batteries during engine starts, allowing for significant downsizing, and providing over 300,000 cycles of exceptional durability. This boosts reliability and performance in demanding applications.",

        tag6: "KranKing® Ultracapacitors enhance Healthcare by reducing battery strain during engine starts, allowing downsizing, and offering exceptional durability with 300,000+ cycles. This reliability ensures uninterrupted patient care.",

        tag7: "KranKing® Ultracapacitors enhance IT and Telecom systems by reducing battery strain during starts, enabling downsizing, and offering exceptional durability with over 300,000 cycles. This boosts equipment reliability, ensuring uninterrupted operations.",

        tag8: "KranKing® Ultracapacitors enhance Transportation by reducing battery load during starts, enabling downsizing, and offering exceptional durability with over 300,000 cycles. This boosts engine cranking reliability in vehicles, ensuring smoother operations.",


    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };

    return (
        <div>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 ">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Kranking Ultracapacitors
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">PRODUCTS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Kranking Ultracapacitors</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">PRODUCTS</div>
                        <div className="flex flex-col justify-between  lg:h-[330px]">
                            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">The KranKing® Ultracapacitor series is purpose-built for engine-cranking tasks, effectively lessening the load on lead-acid batteries during start-up, which, in turn, allows for significant downsizing of the battery and extends its lifespan. While conventional batteries typically endure around 1000 cycles, KranKing® devices have demonstrated their durability with over 300,000 cycles across a temperature range of -45°C to 55°C. This remarkable performance substantially elevates the reliability of engine-cranking systems.                            </div>
                            <div className="flex items-center lg:mt-auto mt-12 cursor-pointer">
                                <img src={download} alt="" />
                                <div className="text-foot-blue hover:text-box-red lg:text-lg text-base font-bold font-Barlow tracking-wider ml-[10px]">DOWNLOAD BROCHURE</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">INDUSTRIES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defence & Exploration
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Non-Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Power Transmission and Distribution
                    </button>



                </div>
                <div div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Heavy Engineering Industries
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Healthcare
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        IT & Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                        Transportation
                    </button>

                </div>



                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">



                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defence & Exploration
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Renewable Energy
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Non-Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Power Transmission and Distribution
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Heavy Engineering Industries
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        IT & Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                        Transportation
                    </button>

                </div>
                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">  {selectedTag && tagContents[selectedTag]}</div>



                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">FEATURES</div>
                <div className="flex items-center justify-between mt-8">
                <div class="text-black text-2xl font-medium font-Barlow ">KranKingTM for Your IC Engine Cranking Needs:</div>
                <div class="text-black text-2xl font-medium font-Barlow">KranKingTM Ultracapacitor Technology and Performance:</div>
                </div>
                
                <div className="lg:flex  justify-between mt-4 ">
                    <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
                        <p className='list-dots'>Proven Technology - More than 15 years of Rich Experience</p>
                        <p className='list-dots'>High Specific Cranking Power – up to 17kW/kg</p>
                        <p className='list-dots'>Deep Charge - Discharge Handling Capacity</p>
                        <p className='list-dots'>Power Cycling Capacity &gt; 300,000 Cycles</p>
                        <p className='list-dots'>Wide Operating Temperature(-45°C to +55°C)</p>
                        <p className='list-dots'>Lowest Internal ESR in its Class (only few milli - ohms)</p>
                        <p className='list-dots'>Fast Transient Response (~ 20 micro-seconds)</p>
                        <p className='list-dots'>Easy Installation and Interface</p>
                        <p className='list-dots'>Quick Recharge (&lt; 10 s)</p>
                        <p className='list-dots'>Flexible Mounting</p>
                        <p className='list-dots'>No Maintenance & Long Service Life</p>
                        <p className='list-dots'>Safe - Can Handle Short Circuit / Reverse Polarity</p>
                        <p className='list-dots'>Safe - No Fire and Explosion Hazard</p>
                        <p className='list-dots'>Rugged - Epoxy Resin Sealed Case (Non Corrosive)</p>
                        <p className='list-dots'>Environment Friendly - No Hazardous Materials / Effluents </p>
                        <p className='list-dots'>Transportation Friendly - No Restrictions /  Regulations</p>
                        <p className='list-dots'>Storage temperature range - 60°C to +60°C</p>
                    </div>

                    <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
                    <p className='list-dots'>Electrochemical Double Layer Capacitor (EDLC)  Construction</p>
                    <p className='list-dots'>Bipolar Symmetric Carbon/Carbon Electrodes</p>
                    <p className='list-dots'>Aqueous (KOH) Electrolyte</p>
                    <p className='list-dots'>Internal Cell Balancing Circuits</p>
                  
                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">CUSTOMISATION</div>
                <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
                    The BTS 2000 Fast Bus Transfer System is highly customisable to meet project-specific needs. While some product configurations may resemble each other, each system is tailored to match the precise bus transfer requirements of the application. To ensure seamless integration, switchgear circuits are meticulously designed and adjusted accordingly. <br /><br />

                    Our goal is to provide a solution that perfectly aligns with your unique needs. To begin customising your BTS 2000 system, please share your specific requirements, including your Single Line Diagram (SLD), specifications, and operational philosophy, with us at bts@aartechsolonics.com. We are dedicated to offering recommendations and assistance to meet your project's demands effectively.<br /><br />


                    Please mail your custom specific requirements along with a copy of your Single Line Diagram (SLD), Specifications (if any) and Operational Philosophy to <a href="mailto:bts@aartechsolonics.com"> <span className='text-red-600 hover:underline cursor-pointer'>bts@aartechsolonics.com</span></a>  . We would be happy to assist you with our recommendations in the best possible manner..
                </div>

                <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

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

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

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

                    <div className=" w-[100%] lg:h-auto h-[550px] border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

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
                <CustomerLogos2 />

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio ">DOWNLOADS</div>

                <div className="lg:flex gap-x-5 lg:mt-[46px] mt-6">
                    <div className="lg:w-[60%] w-[100%]">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium  font-Barlow tracking-wider ">TECHNICAL PAPERS</div>
                        <div className=" lg:mt-[27px] ml-3 ">
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-PowerGen-Middle-East-2008.pdf" target='_blank'> <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium lg:mt-12 mt-5 '>A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, PowerGen-Middle East, Panama, Bahrain, Feb 2008
                            </li></a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-IEEE-POWERCON-2008.pdf" target='_blank'> <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>
                                A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, IEEE POWERCON Conference, New Delhi, India, Oct 2008.
                            </li></a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-NPSC-2008.pdf" target='_blank'>  <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>
                                A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems – A Systems Solution Approach”, National Power Systems Conference, Mumbai, India, Dec 2008.
                            </li></a>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">PRESENTATIONS</div>
                        <div className="space-y-4  lg:mt-[46px] mt-5 ml-3">
                            <a href="https://www.figma.com/exit?url=http%3A%2F%2Faartechsolonics.com%2F%2Fwp-content%2Fuploads%2F2019%2F02%2FBTS-2000-2008-PowerGen-Middle-East-Fast-Bus-Transfer-Systems-A-System-Solution-Approach.ppt" target='_blank'>    <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium'>BTS 2000-2008 – PowerGen Middle East Fast Bus Transfer Systems – A System Solution Approach.ppt
                            </li></a>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">CASE STUDIES</div>
                        <div className="  lg:mt-[46px] mt-6 ml-3">

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Auto-Transfer-Requirements-in-Bus-Transfer-Schemes.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study – Auto Transfer Requirements in Bus Transfer Schemes.pdf
                                </li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Automatic-Station-to-Station-Bus-Transfer-to-avoid-AC-Failure.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study – Automatic Station-to-Station Bus Transfer to avoid AC Failure.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Breaker-Mechanism-Problem.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study – Breaker Mechanism Problem.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Spin-Down-Characteristics-for-Evaluating-Sequential-Fast-Transfer.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study – Spin Down Characteristics – for Evaluating Sequential Fast Transfer.pdf</li>
                            </a>

                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Unit-to-Station-Half-Station-to-Station-Scheme.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study – Unit-to-Station + Half Station-to-Station Scheme.pdf</li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Writeup.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study IEEE WG Report – Oscillographic Report and Analysis – Writeup.pdf</li>
                            </a>
                            <a href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Oscillographs.pdf" target='_blank'>
                                <li className='text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5'>Case Study IEEE WG Report – Oscillographic Report and Analysis – Oscillographs.pdf</li>
                            </a>
                        </div>
                    </div>


                </div>


            </div>
            <Footer />

        </div>
    )
}

export default Kranking