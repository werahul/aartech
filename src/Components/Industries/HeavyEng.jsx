import React, { useState, useEffect } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { heavy } from '../../assets/subImg'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip, solar, fuel ,flywheel,ac, load } from '../../assets/ProductImages'
import { CustomerLogos2 } from '../../Components'
import { ImageSelect } from "../ImageSelector";
import { heavy1, heavy2, heavy3, heavy4, heavy5 } from '../../assets/IndImages'



const HeavyEng = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the page
    // }, []); // Empty dependency array ensures the effect runs only 


    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [heavy1, heavy2, heavy3, heavy4, heavy5];

    const tagContents = {
        tag1: 'Control and Automation serve as indispensable solutions for the Heavy Engineering Industries. With its wide range of technologies, Aartech provides both cost-effective solutions for utility companies and high-quality solutions for discerning customers. Aarchtech’s innovative approach prioritises customer satisfaction by utilising advanced technologies for specific needs. Providing tailored solutions for Heavy Engineering Industries, Aartech seamlessly blends diverse components to enhance efficiency and effectiveness. Solid-state and microprocessor-based embedded control products are meticulously designed to address customised requirements, setting them apart from conventional integration methods. In this critical sector, this approach delivers substantial value.',

        tag2: "Process Continuity is a vital solution for Heavy Engineering Industries. Electrical outages can cause immediate and lasting harm to continuous process operations, profoundly affecting witnesses. As industries increasingly prioritise revenue, efficiency, productivity, and system enhancement, it becomes imperatiev to reevaluate established practices and seek innovative solutions.        Aartech collaborates closely with consultants, equipment manufacturers, contractors, and end-users to tackle process continuity challenges comprehensively. This approach ensures that Heavy Engineering Industries maintain operational resilience, minimising downtime, safeguarding revenue, and meeting efficiency and productivity benchmarks. ",

        tag3: 'Reliable Engine Starting/Pulse Power is a crucial solution for Heavy Engineering Industries. It mitigates the common issue of engine starting failures caused by battery issues like discharge, ageing, or low temperatures. While conventional approaches stress proper sizing and maintenance, real-world applications often demand short bursts of power with variable duty cycles. In such scenarios, a pulse power source/sink plays a vital role, whether operating independently or complementing a base-level power source. This technology ensures the reliable supply of short bursts of energy when needed, effectively handling load fluctuations and enhancing the dependability and performance of Heavy Engineering Industries.',

        tag4: "Fault Current Limiting (FCL) is a pivotal solution for Heavy Engineering Industries. Aartech, in partnership with G&W Elec. Co. USA, delivers comprehensive FCL solutions to address evolving electrical system demands. These solutions cater to power generation, including captive power addition and diverse industries such as cement, oil, and gas. FCL technology effectively restrains excessive fault currents, safeguarding equipment and infrastructure while ensuring operational continuity. Aartech's expertise in implementing FCL enhances reliability, safety, and efficiency across Heavy Engineering Industries.",

        tag5: "In heavy engineering industries, Customised Professional Cases play a pivotal role by serving as protective showcases for vital equipment. Aarchtech Solonics' solutions help maintain the integrity of intricate machinery during transportation and storage. These cases not only protect valuable assets but also uphold the industry's professional image. Aarchtech's emphasis on quality, affordability, and availability ensures that heavy engineering businesses can secure the most suitable and cost-effective enclosures, ultimately contributing to their operational efficiency and success.",

        tag6: "Solar Design, Engineering, and Consultancy services offered by Aartech Solonics serve as a sustainable solution for Heavy Engineering Industries. Their commitment to harnessing solar power aligns with the industry's growing need for eco-friendly and efficient energy sources. Aartech's innovative approach, tailored solar solutions, and meticulous energy optimisation provide heavy engineering industries with sustainable power options. They offer a comprehensive suite of services, including feasibility studies, system design, and maintenance, making them a valuable partner in reducing energy costs and enhancing operational efficiency for industrial clients in this sector.",

        tag7: "In Heavy Engineering Industries, Uninterrupted Power Supply (UPS) solutions, such as S&C's PureWave UPS offered by Aartech, play a pivotal role in maintaining uninterrupted operations. These industries rely on critical equipment and processes that demand superior power quality and continuity. The advanced UPS technology safeguards against voltage fluctuations, surges, and momentary disruptions, ensuring uninterrupted power to heavy machinery. It supports crucial applications, like manufacturing and processing, where even the slightest power disturbance can result in costly downtime. By meeting stringent electrical and cooling requirements, these UPS solutions enhance the reliability, efficiency, and productivity of heavy engineering operations.",

        tag8: 'Energy storage solutions play a crucial role in the Heavy Engineering industry by harnessing micro-energy sources from sources like Solar Power, Wind Power, and Hydro Power. These sources are tapped using technologies such as PV modules, micro wind turbines, and micro-hydro turbines. The stored energy is used to power various portable devices, making them ideal for applications in the Marine, Defense, Space, Remote Sensing, and Telecom industries. They enable energy independence and can power communication devices for soldiers in the field, remote data collection buoys, and even provide backup power in real estate and lighting applications, reducing the need for extensive cabling.',

        tag9: 'Load Limiting Solutions offer substantial benefits to Heavy Engineering Industries. These industries often operate critical equipment and machinery, and sudden overloads can lead to power disruptions and equipment damage. Load limiting devices provide automated protection against excessive loads, preventing downtime and costly repairs. They promote energy efficiency, reducing the risk of power interruptions, which is particularly crucial in heavy engineering, where precision and safety are paramount. Moreover, these solutions contribute to resource and cost savings by avoiding the need for manual metering and ensuring fair utilisation of energy resources in large industrial setups.',
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
            <SlideInBar/>

            <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Heavy Engineering Industries</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <ImageSelect images={images} bgImg={heavy} />

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
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Process Continuity
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Fault Current Limiter
                    </button>


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">


                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Customised PLASTIC Case
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Solar Design, Engineering
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Uninterrupted Power Supply
                    </button>


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">
                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                    Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag9')}
                    >
                    Load Limiting
                    </button>


                </div>


                { /*     mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Process Continuity
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Pulse Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Fault Current Limiter
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                    Customised PLASTIC Case
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Solar Design, Engineering
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                    Uninterrupted Power Supply
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                    Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag9')}
                    >
                    Load Limiting
                    </button>



                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">  {selectedTag && tagContents[selectedTag]}</div>




                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>

                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag2')}
                    >
                        BTS 2000
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Clip Fault current limiters
                    </button>



                </div>

                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        Best Case
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                    AC & DC UPS
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                    Flywheel
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag9')}
                    >
                    Load Checker
                    </button>




                </div>



                {/*Product mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag2')}
                    >
                        BTS 2000
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Clip Fault current limiters
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        Best Case
                    </button>



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        AC & DC UPS
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                    Flywheel
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag9')}
                    >
                    Load Checker
                    </button>



                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={relayPannels} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                            Aartech's Control and relay Panels (CRP) are integral to Heavy Engineering Industries. Tailored for 11KV and 33KV substations, these panels employ outdoor switchgear and encompass relays, fuses, switches, wiring, and more to effectively monitor and control transformers, generators, and circuit breakers. Additionally, indoor control panels for outdoor VCBs feature relays and indicators, ensuring adaptability for single or multi-circuit configurations, precisely meeting customer requirements.


                        </div>
                    </div>

                    <div className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%]  w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={bts} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The BTS 2000 Fast Bus Transfer System ensures uninterrupted power supply for Heavy Engineering Industries. This advanced microprocessor-based system swiftly executes high-speed motor bus transfers between two independent power sources while adhering to safety parameters. It proactively prevents process interruptions, even in the event of a power source contingency, safeguarding continuous operations.</div>
                    </div>

                    <div className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={kra} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The KranKing® Ultracapacitor series optimises engine starting in Heavy Engineering Industries. These ultracapacitors reduce the strain on lead-acid batteries during engine starts, resulting in smaller battery requirements and extended battery life. Their exceptional durability, lasting over 300,000 cycles even in extreme temperatures, enhances the reliability of engine-cranking systems, ensuring consistent performance in challenging conditions.</div>
                    </div>

                    <div className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[160%] lg:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={clip} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The Current Limiting Protector (CLiP®) is a proven solution for Heavy Engineering Industries. With over 25 years of global service, CLiP® offers superior system protection, limiting currents up to 5000A in systems rated to 38kV. It achieves fault interruption beyond 300kA rms symmetrical at 15.5kV. The CLiP® functions as an electronically sensed and triggered current limiter, enhancing safety by opening the continuous copper bus bar path under overcurrent conditions and introducing a parallel-mounted current limiting fuse to interrupt faults effectively.</div>
                    </div>

                    <div className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[140%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={bestCase} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Best Case facilitates the Heavy Engineering sector by offering easy access to quality enclosures through their online platform. This accessibility and affordability are crucial for industries that require specialised enclosures for machinery. Bestcase's commitment to quality and customisation aligns with the industry's demand for reliable solutions, contributing to smoother operations and project success in heavy engineering.</div>
                    </div>

                    <div className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[160%] lg:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={solar} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Aartech's Solar Design and Services offer comprehensive solutions for Heavy Engineering Industries. Their services encompass every aspect of solar energy integration, from permit design to system design, catering to commercial, industrial, and utility-scale projects. Their meticulous approach to solar panel layout and energy optimisation ensures tailored solutions that enhance efficiency in heavy engineering operations. Whether reducing utility bills or improving energy sustainability, Aartech provides end-to-end support, making it a valuable partner for this sector.</div>
                    </div>

                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={ac} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The DC UPS System from J. Schneider plays a crucial role in Heavy Engineering Industries by ensuring uninterrupted power for control systems and processes. With its microcontroller-supported charging and discharging, it provides a reliable solution for safeguarding operations during voltage interruptions or fluctuations. This robust, German-made technology offers a wide power range and customisable features, making it an ideal choice for heavy engineering applications where uninterrupted power is essential for safety and productivity.</div>
                    </div>
                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={flywheel} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Flywheels are pivotal in Heavy Engineering, acting as an energy storage solution with diverse applications. In Electric Vehicles, they enable rapid charging, easing grid demands. They stabilise power transmission, addressing voltage issues in renewables. In Public Transport, they recover energy from braking, reducing waste. In Process Industries, they offer uninterruptible power supply, ensuring productivity, emissions reduction, and cost-efficiency. Flywheels elevate efficiency and sustainability in heavy engineering.</div>
                    </div>
                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag9' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={load} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Load Checker is a crucial asset in Heavy Engineering Industries. It safeguards machinery and electrical systems by blocking the mains supply if excessive current is drawn, preventing potential damage due to overload. The patented self-reset feature ensures uninterrupted operation without manual intervention. Load Checker's soft blocking technology offers a long product life and allows for temporary overloads, making it an essential tool for heavy machinery and equipment protection in the heavy engineering sector.</div>
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