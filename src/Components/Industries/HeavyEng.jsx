import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import { Cimg1, Cimg2, Cimg3, Cimg4 } from '../../assets/CLogoBlack'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip , solar } from '../../assets/ProductImages'

import { CustomerLogos2 } from '../../Components'
import { ImageSelect } from "../ImageSelector";
import {heavy1, heavy2, heavy3, heavy4, heavy5} from '../../assets/IndImages'



const HeavyEng = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 


    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [heavy1, heavy2, heavy3, heavy4, heavy5]; 

    const tagContents = {
        tag1: 'Control and Automation serve as indispensable solutions for the Heavy Engineering Industries. With its wide range of technologies, Aartech provides both cost-effective solutions for utility companies and high-quality solutions for discerning customers. Aarchtech’s innovative approach prioritises customer satisfaction by utilising advanced technologies for specific needs. Providing tailored solutions for Heavy Engineering Industries, Aartech seamlessly blends diverse components to enhance efficiency and effectiveness. Solid-state and microprocessor-based embedded control products are meticulously designed to address customised requirements, setting them apart from conventional integration methods. In this critical sector, this approach delivers substantial value.',

        tag2: "Process Continuity is a vital solution for Heavy Engineering Industries. Electrical outages can cause immediate and lasting harm to continuous process operations, profoundly affecting witnesses. As industries increasingly prioritise revenue, efficiency, productivity, and system enhancement, it becomes imperatiev to reevaluate established practices and seek innovative solutions.        Aartech collaborates closely with consultants, equipment manufacturers, contractors, and end-users to tackle process continuity challenges comprehensively. This approach ensures that Heavy Engineering Industries maintain operational resilience, minimising downtime, safeguarding revenue, and meeting efficiency and productivity benchmarks.        ",

        tag3: 'Reliable Engine Starting/Pulse Power is a crucial solution for Heavy Engineering Industries. It mitigates the common issue of engine starting failures caused by battery issues like discharge, ageing, or low temperatures. While conventional approaches stress proper sizing and maintenance, real-world applications often demand short bursts of power with variable duty cycles. In such scenarios, a pulse power source/sink plays a vital role, whether operating independently or complementing a base-level power source. This technology ensures the reliable supply of short bursts of energy when needed, effectively handling load fluctuations and enhancing the dependability and performance of Heavy Engineering Industries.',

        tag4: "Fault Current Limiting (FCL) is a pivotal solution for Heavy Engineering Industries. Aartech, in partnership with G&W Elec. Co. USA, delivers comprehensive FCL solutions to address evolving electrical system demands. These solutions cater to power generation, including captive power addition and diverse industries such as cement, oil, and gas. FCL technology effectively restrains excessive fault currents, safeguarding equipment and infrastructure while ensuring operational continuity. Aartech's expertise in implementing FCL enhances reliability, safety, and efficiency across Heavy Engineering Industries.",

        tag5: "C Cse",

        tag6: "Solar Design, Engineering, and Consultancy services offered by Aartech Solonics serve as a sustainable solution for Heavy Engineering Industries. Their commitment to harnessing solar power aligns with the industry's growing need for eco-friendly and efficient energy sources. Aartech's innovative approach, tailored solar solutions, and meticulous energy optimisation provide heavy engineering industries with sustainable power options. They offer a comprehensive suite of services, including feasibility studies, system design, and maintenance, making them a valuable partner in reducing energy costs and enhancing operational efficiency for industrial clients in this sector.",

        tag7: 'Waste',
    };


    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
        // Set the selected tag
    };

    const handleProClick = (tag) => {
        setSelectedProTag(tag);
    }
    return (
        <div>
            <Navbar />

            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 ">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Heavy Engineering Industries</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">INDUSTRIES</div>

                    <ImageSelect images={images}/>

                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Heavy Engineering Industries</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">Infrastructure development heavily depends on a range of heavy engineering resources. Prioritising system design, efficiency, protection, and maintenance is essential to maximise return on investments. Explore our diverse offerings in Metals, Material Handling, Petrochemical, Mining, Chemical, Textile, Cement, Paper, Sugar, and Water Handling for comprehensive solutions.
                        </div>
                    </div>
                </div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">SOLUTIONS</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                    Process Continuity
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Fault Current Limiter
                    </button>


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">


                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                    Customised Professional Case
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                    Solar Design, Engineering & Consultancy services
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                    Energy Efficiency
                    </button>


                </div>


                { /*     mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Process Continuity
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Pulse Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Fault Current Limiter
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                    Customised Professional Case
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                    Solar Design, Engineering & Consultancy services
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                    Energy Efficiency
                    </button>



                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">  {selectedTag && tagContents[selectedTag]}</div>




                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>

                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag2')}
                    >
                        BTS 2000
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Clip Fault current limiters
                    </button>



                </div>

                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                    Best Case
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                    Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                    AC & DC UPS
                    </button>

                    


                </div>



                {/*Product mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag2')}
                    >
                        BTS 2000
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Clip Fault current limiters
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                    Best Case
                    </button>



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                    Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                    AC & DC UPS
                    </button>

                    

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4  lg:leading-tight leading-snug">
                        Aartech's Control and relay Panels (CRP) are integral to Heavy Engineering Industries. Tailored for 11KV and 33KV substations, these panels employ outdoor switchgear and encompass relays, fuses, switches, wiring, and more to effectively monitor and control transformers, generators, and circuit breakers. Additionally, indoor control panels for outdoor VCBs feature relays and indicators, ensuring adaptability for single or multi-circuit configurations, precisely meeting customer requirements.


                        </div>
                    </div>

                    <div className={`Pro2 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={bts} alt=""></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The BTS 2000 Fast Bus Transfer System ensures uninterrupted power supply for Heavy Engineering Industries. This advanced microprocessor-based system swiftly executes high-speed motor bus transfers between two independent power sources while adhering to safety parameters. It proactively prevents process interruptions, even in the event of a power source contingency, safeguarding continuous operations.</div>
                    </div>

                    <div className={`Pro3 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto bg-blue-300">
                            <img src={kra} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The KranKing® Ultracapacitor series optimises engine starting in Heavy Engineering Industries. These ultracapacitors reduce the strain on lead-acid batteries during engine starts, resulting in smaller battery requirements and extended battery life. Their exceptional durability, lasting over 300,000 cycles even in extreme temperatures, enhances the reliability of engine-cranking systems, ensuring consistent performance in challenging conditions.</div>
                    </div>

                    <div className={`Pro4 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={clip} alt=""></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The Current Limiting Protector (CLiP®) is a proven solution for Heavy Engineering Industries. With over 25 years of global service, CLiP® offers superior system protection, limiting currents up to 5000A in systems rated to 38kV. It achieves fault interruption beyond 300kA rms symmetrical at 15.5kV. The CLiP® functions as an electronically sensed and triggered current limiter, enhancing safety by opening the continuous copper bus bar path under overcurrent conditions and introducing a parallel-mounted current limiting fuse to interrupt faults effectively.</div>
                    </div>

                    <div className={`Pro5 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[80%] w-[100%] h-auto ">
                            <img src={bestCase} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">Best Case facilitates the Heavy Engineering sector by offering easy access to quality enclosures through their online platform. This accessibility and affordability are crucial for industries that require specialised enclosures for machinery. Bestcase's commitment to quality and customisation aligns with the industry's demand for reliable solutions, contributing to smoother operations and project success in heavy engineering.</div>
                    </div>

                    <div className={`Pro6 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={solar} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">Aartech's Solar Design and Services offer comprehensive solutions for Heavy Engineering Industries. Their services encompass every aspect of solar energy integration, from permit design to system design, catering to commercial, industrial, and utility-scale projects. Their meticulous approach to solar panel layout and energy optimisation ensures tailored solutions that enhance efficiency in heavy engineering operations. Whether reducing utility bills or improving energy sustainability, Aartech provides end-to-end support, making it a valuable partner for this sector.</div>
                    </div>

                    <div className={`Pro7 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto bg-lime-300">
                            <img src="" alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">WTC or Waste To Compost machine, a fully automatic composting machine, contributes to renewable energy by swiftly converting organic waste into compost within 24 hours on-site. This eco-friendly solution adheres to the 3R Principle: reducing waste, recycling it into valuable compost, and using the compost for garden plants. Its quiet and odourless operation makes it a sustainable choice for waste management in renewable energy facilities.
                        </div>
                    </div>

                   
                </div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>

                <CustomerLogos2 />

            </div>

            <Footer />


        </div >
    )
}

export default HeavyEng;