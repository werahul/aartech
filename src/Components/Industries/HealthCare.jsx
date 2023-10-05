import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import { Cimg1, Cimg2, Cimg3, Cimg4 } from '../../assets/CLogoBlack'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip, solar } from '../../assets/ProductImages'

import { CustomerLogos2 } from '../../Components'
import { ImageSelect } from "../ImageSelector";
import {health1, health2 , health3, health4 , health5} from '../../assets/IndImages'



const HealthCare = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 


    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [health1, health2 , health3, health4 , health5]; 

    const tagContents = {
        tag1: "Aartech's Control & Relay Panels (CRP) play a vital role in healthcare infrastructure. Designed for substations, they incorporate essential components for monitoring and controlling electrical systems, ensuring reliability and safety. These panels are adaptable for various circuit configurations, meeting the unique needs of healthcare facilities.",

        tag2: "Process continuity is a critical solution for healthcare, where electrical outages can lead to immediate and lasting disruptions in patient care and operational efficiency. These incidents are etched in the memory of healthcare professionals who witness their impact firsthand. As healthcare focuses on revenue, efficiency, productivity, and system improvements, Aartech collaborates closely with consultants, equipment manufacturers, contractors, and end users to provide holistic solutions. Our approach ensures uninterrupted processes, safeguarding patient well-being and aligning with the industry's ever-increasing performance and reliability standards.",

        tag3: 'Solutions like Reliable Engine Starting/Pulse Power are critical for healthcare facilities. In healthcare, reliable power is paramount, especially when engines must start without fail. Battery failures can be life-threatening due to various factors like discharge, ageing, and cold conditions. While traditional approaches emphasise proper maintenance and sizing, healthcare often demands short bursts of power for critical applications. In these scenarios, a pulse power source/sink, either standalone or working with a base-level power source, ensures uninterrupted power for vital medical equipment. This technology safeguards healthcare operations by handling load fluctuations, ensuring patient care is never compromised.',

        tag4: "A Power Backup Unit Solution plays a crucial role in Heavy Healthcare settings by ensuring uninterrupted power supply to critical medical equipment and facilities. Power outages can have severe consequences in the healthcare sector, where patient lives and well-being are at stake. These backup units are designed to instantly kick in during power failures, preventing disruptions to life-saving equipment like ventilators, monitors, and surgical instruments. They provide a seamless transition to backup power, safeguarding critical healthcare operations. Additionally, they reduce downtime, maintenance costs, and the risk of data loss, contributing to enhanced patient care, safety, and overall hospital efficiency.",

        tag5: "C Cse",

        tag6: "Waste",

        tag7: "Solar Design, Engineering, and Consultancy services from Aartech Solonics offer a sustainable energy solution for the healthcare sector. By harnessing solar power, they contribute to greener and more environmentally friendly healthcare facilities. Their tailored solar solutions, from intricate panel layouts to energy optimisation, ensure that healthcare facilities can generate energy efficiently, reducing utility bills and operational costs. Aartech's comprehensive services cover everything from feasibility studies to system design, installation, and maintenance, making them a valuable partner for healthcare providers looking to enhance energy sustainability and reduce their environmental footprint.",

        tag8: "Energy",
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
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Healthcare</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">INDUSTRIES</div>

                    <ImageSelect images={images}/>

                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Healthcare</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">The healthcare sector places paramount importance on performance and reliability, as it directly impacts the preservation of life. Energy management within this domain is mission-critical. Advanced technologies emphasising energy efficiency are gaining prominence. Given the life-saving nature of healthcare, performance standards are becoming increasingly stringent, necessitating the incorporation of cutting-edge technology to deliver state-of-the-art solutions.
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
                        Power Backup Unit
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
                        Waste Management System
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Solar Design, Engineering & Consultancy services
                    </button>




                </div>
                <div div className="lg:flex hidden space-x-3 mt-3">
                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
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
                        Power Backup Unit
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
                        Waste Management System
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Solar Design, Engineering & Consultancy services
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
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
                    Auxiliary Power Unit
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
                        WTC
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                    Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                    Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag9')}
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
                    Auxiliary Power Unit
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
                       WTC
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                    Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                    Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag9')}
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

                        Aartech's Control & Relay Panels (CRP) play a vital role in healthcare infrastructure. Designed for substations, they incorporate essential components for monitoring and controlling electrical systems, ensuring reliability and safety. These panels are adaptable for various circuit configurations, meeting the unique needs of healthcare facilities.




                        </div>
                    </div>

                    <div className={`Pro2 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={bts} alt=""></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The BTS 2000 Fast Bus Transfer System ensures an uninterrupted power supply in healthcare settings. By swiftly transferring power between independent sources while adhering to safety parameters, it prevents disruptions to critical medical equipment, maintaining continuous patient care even in the event of a power source contingency.</div>
                    </div>

                    <div className={`Pro3 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto bg-blue-300">
                            <img src={kra} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">KranKing® Ultracapacitors are vital for healthcare, ensuring reliable engine starts for critical equipment. They reduce the strain on lead-acid batteries during starts, prolonging battery life and decreasing their size. Unlike traditional batteries with around 1000 cycles, KranKing® Ultracapacitors excel with over 300,000 cycles, even in extreme temperatures. This exceptional durability enhances the overall reliability of engine-cranking systems in healthcare settings, guaranteeing prompt response and operation when needed most.</div>
                    </div>

                    <div className={`Pro4 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto ">
                            <img src="" alt=""></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">An Auxiliary Power Unit (APU) is a versatile device employed across various healthcare applications to supply auxiliary power when the primary power source is inaccessible or impractical. Equipped with an additional electrical generator, the APU generates sufficient power to operate essential medical equipment, ensuring continuous operation in an emergency or during power outages. Additionally, it can provide heating and cooling for medical facilities, maintaining optimal conditions for patient care and comfort.</div>
                    </div>

                    <div className={`Pro5 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[80%] w-[100%] h-auto ">
                            <img src={bestCase} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">BestCase addresses the challenges in healthcare by providing timely access to quality enclosures for various medical products and equipment. It offers cost-effective solutions, eliminating the need for expensive and often subpar alternatives. BestCase ensures availability, allowing professionals to showcase their offerings effectively, whether for prototypes, demonstrations, or important meetings, contributing to their best-case scenarios in healthcare settings.</div>
                    </div>

                    <div className={`Pro6 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={wtc } alt=""></img>  
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">WTC or Waste To Compost machine, a fully automatic composting machine, contributes to renewable energy by swiftly converting organic waste into compost within 24 hours on-site. This eco-friendly solution adheres to the 3R Principle: reducing waste, recycling it into valuable compost, and using the compost for garden plants. Its quiet and odourless operation makes it a sustainable choice for waste management in renewable energy facilities.</div>
                    </div>
  
                    <div className={`Pro7 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto bg-lime-300">
                            <img src={incinerator} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">An incinerator is a device designed to burn waste materials at high temperatures, reducing them to ash and other byproducts. In the context of renewable energy, some modern incinerators are equipped with energy recovery systems that capture the heat generated during combustion. This captured heat can then be converted into electricity or used for various heating purposes, contributing to generating renewable energy while reducing waste volume.
                        </div>
                    </div>

                    <div className={`Pro8 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto bg-lime-300">
                            <img src={solar} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">Aarchtech's Solar Design and Services for healthcare encompass a wide range of offerings, from permit design and sales proposals to utility-scale solutions and EV chargers. Their expert team ensures tailored solar panel layouts and optimised energy generation. Compliant with industry standards and regulations, Aarchtech provides end-to-end support, covering feasibility studies, system design, and comprehensive installation and maintenance services, fostering a greener and more sustainable energy future for healthcare facilities.

                        </div>
                    </div>

                    <div className={`Pro9 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag9' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto ">
                            <img src="" alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">AC & DC
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

export default HealthCare;