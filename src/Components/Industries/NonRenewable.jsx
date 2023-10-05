import React, { useState } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip } from '../../assets/ProductImages'

import { CustomerLogos2 } from '../../Components'

import { ImageSelect } from "../ImageSelector";
import {non1, non2, non3, non4, non5} from '../../assets/IndImages'



const NonRenewable = () => {
    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [non1, non2, non3, non4, non5 ]; 

    const tagContents = {
        tag1: 'Control and Automation are key solutions in Non-Renewable Energy. Aartech, with a wide range of technology options, caters to diverse needs, providing both cost-effective utility solutions and premium-quality offerings. Their expertise and commitment to innovation create custom solutions. Aartech excels in blending components for tailored solutions, enhancing non-renewable energy system efficiency. They stand out with meticulously designed solid-state and microprocessor-based control products, distinct from conventional approaches, boosting system performance and reliability.',

        tag2: "Process continuity is crucial in the non-renewable energy sector, preventing disruptions caused by electrical outages. These interruptions have a lasting impact, prompting the need for reevaluation and innovative solutions in revenue, efficiency, and productivity. At Aartech, we're dedicated to addressing process continuity challenges by collaborating with experts and end-users to provide holistic solutions. This approach ensures non-renewable energy systems stay resilient, with uninterrupted operations, safeguarding key benchmarks in this critical sector.",

        tag3: 'Reliable Engine Starting/Pulse Power offers a vital solution in the non-renewable energy sector. Battery failures during engine starts are caused by issues like low State-Of-Charge, ageing batteries and cold temperatures, which are common concerns. While emphasis is placed on proper sizing, maintenance, and regular checks, real-world scenarios often demand short bursts of power with variable duty cycles. In these situations, a pulse power source/sink comes to the forefront. Whether operating independently or in tandem with a base-level power source, it becomes essential to ensure a consistent power supply. This technology effectively handles load fluctuations, outperforming standalone sources and ensuring uninterrupted non-renewable energy operations.',

        tag4: "Electrical engineering solutions must often adapt to evolving demands and operational considerations. Aartech is a trusted partner, collaborating with M/s G&W Elec. Co. USA as a value-added system integrator for their CLiP® Fault Current Limiter solutions. We offer comprehensive, end-to-end solutions in this domain, serving customers across Asia, particularly in power generation (especially captive power addition) and industries like cement and oil & gas. CLiP® (Current Limiting Protector) boasts a 25-year track record as a globally trusted system protector. It delivers current limitation benefits for systems up to 38kV, with high continuous current ratings of up to 5000A. Remarkably, it has achieved fault interruption beyond 300kA rms symmetrical at 15.5kV.",

        tag5: "A Power Backup Unit (PBU) solution for non-renewable energy is a system designed to provide uninterrupted power supply during outages or periods of high demand. It typically relies on conventional energy sources such as fossil fuels or nuclear power to generate electricity. The PBU includes backup generators, energy storage systems, or redundant power sources to ensure continuity in critical applications like hospitals, data centres, and industries. While not based on renewable energy sources, PBUs are essential for maintaining essential services and minimising disruptions in power supply when primary energy sources fail or fluctuate.",

        tag6: 'C Case',

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
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Non-Renewable Energy</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">INDUSTRIES</div>

                    <ImageSelect images={images}/>
                    
                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Non-Renewable Energy</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">Today, most of society's energy requirements still rely on non-renewable sources. AAs awareness of non-renewable energy's environmental impact grows, the gap between energy demand and the level of resources shrinks. This has spurred a concurrent push for improved operational practices, energy efficiency measures, and adopting safe and intelligent solutions.
                        Aartech boasts a comprehensive portfolio in the non-renewable energy sector, encompassing Thermal Power, Nuclear Power, Diesel Power, Oil and Gas, and Captive Power, to address these evolving challenges.
                        


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
                        Power Backup Unit
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Customised Professional Case
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Waste Management System
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
                        Power Backup Unit
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Customised Professional Case
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Waste Management System
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
                        Auxiliary Power Unit
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Best Case
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        WTC
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                        Incinerator
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
                        Auxiliary Power Unit
                    </button>



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Best Case
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
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

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4  lg:leading-tight leading-snug">
                            Aartech's Control & Relay Panels (CRP) are invaluable in non-renewable energy. Designed for 11KV and 33KV substations with outdoor switchgear, they incorporate a comprehensive range of components, including relays, fuses, switches, and wiring. These panels effectively monitor and control critical equipment like transformers, generators, and circuit breakers. Moreover, they offer customisation options, allowing adaptation for single or multi-circuit use to meet customer requirements precisely.

                        </div>
                    </div>

                    <div className={`Pro2 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={bts} alt=""></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The BTS 2000 Fast Bus Transfer System significantly bolsters non-renewable energy systems. This advanced microprocessor-based system, tailored for Power Generation Utilities and Process Industries, swiftly executes motor bus transfers between independent power sources, ensuring safety compliance. By maintaining the power supply to crucial plant motors, it prevents process interruptions, even during power source contingencies. This outstanding capability fortifies non-renewable energy system reliability and performance.</div>
                    </div>

                    <div className={`Pro3 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto bg-blue-300">
                            <img src={kra} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">KranKing® Ultracapacitors offer substantial benefits in non-renewable energy applications. Designed specifically for engine-cranking tasks, they reduce the strain on lead-acid batteries during starts, enabling significant reductions in battery size and prolonged lifespan. Unlike traditional batteries with around 1000 cycles, KranKing® devices deliver consistent performance for over 300,000 cycles, even in extreme temperatures. This exceptional durability enhances the overall reliability of non-renewable energy systems, ensuring dependable operation in critical scenarios.</div>
                    </div>

                    <div className={`Pro4 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[50%] w-[100%] h-auto ">
                            <img src={clip} alt=""></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The CLiP operates as an electronically sensed and triggered current limiter, featuring a continuous copper bus bar for regular current flow. Under overcurrent conditions, this path opens to introduce a parallel-mounted current limiting fuse, effectively interrupting the fault.</div>
                    </div>

                    <div className={`Pro5 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto ">
                            <img src="" alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The Auxiliary Power Unit (APU) is a valuable asset in non-renewable energy applications. It provides essential auxiliary power when the primary source is inaccessible, enhancing operational flexibility. Equipped with an additional generator, it supports critical systems like lighting and avionics. Furthermore, it efficiently manages environmental systems, contributing to the overall reliability and functionality of non-renewable energy operations.</div>
                    </div>

                    <div className={`Pro6 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto ">
                            <img src={bestCase} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">BestCase aids in the field of Non-Renewable Energy by providing entrepreneurs and innovators timely access to quality enclosures for their products. We understand the challenges of prototyping and the importance of cost-effective solutions. Whether showcasing prototypes or carrying fragile equipment, we ensure your presentation matches the highest standards. With 24x7 online access to our products, we are committed to delivering quality, affordability, and availability, supporting your endeavours for business success in the non-renewable energy sector.</div>
                    </div>

                    <div className={`Pro7 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto bg-lime-300">
                            <img src={wtc} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">WTC or Waste To Compost machine, a fully automatic composting machine, contributes to renewable energy by swiftly converting organic waste into compost within 24 hours on-site. This eco-friendly solution adheres to the 3R Principle: reducing waste, recycling it into valuable compost, and using the compost for garden plants. Its quiet and odourless operation makes it a sustainable choice for waste management in renewable energy facilities.
                        </div>
                    </div>

                    <div className={`Pro8 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className="lg:w-[90%] w-[100%] h-auto bg-lime-300">
                            <img src={incinerator} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">An incinerator is a device designed to burn waste materials at high temperatures, reducing them to ash and other byproducts. In the context of renewable energy, some modern incinerators are equipped with energy recovery systems that capture the heat generated during combustion. This captured heat can then be converted into electricity or used for various heating purposes, contributing to generating renewable energy while reducing waste volume.
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

export default NonRenewable;