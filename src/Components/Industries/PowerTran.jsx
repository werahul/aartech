import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import { Cimg1, Cimg2, Cimg3, Cimg4 } from '../../assets/CLogoBlack'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip } from '../../assets/ProductImages'

import { CustomerLogos2 } from '../../Components'
import { ImageSelect } from "../ImageSelector";
import {Power1,Power2, Power3,Power4, Power5} from '../../assets/IndImages'



const PowerTran = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 


    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [Power1,Power2, Power3,Power4, Power5]; 

    const tagContents = {
        tag1: 'Control and automation are essential to Power Transmission and Distribution. Providing cost-effective solutions for utility companies and premium-quality solutions for demanding customers, Aartech offers a wide range of technological offerings. Their innovative approach prioritises customer satisfaction. As a power transmission and distribution company, Aartech excels at combining diverse components to craft tailored solutions. Microprocessor and solid-state embedded control products are meticulously designed to meet customised requirements. They deliver substantial value augmentation over conventional integration methods using discrete electrical devices.',

        tag2: "Reliable Engine Starting/Pulse Power offers critical support in Power Transmission and Distribution systems. Battery failures are a common challenge, stemming from issues like discharged batteries, old batteries, and cold temperatures. While traditional approaches emphasise proper sizing and maintenance, real-world scenarios often demand short bursts of power with variable duty cycles.In such situations, a pulse power source/sink is essential, whether used alone or with a base-level power source. These solutions boost Power Transmission and Distribution system resilience, managing load changes for reliable operation in tough conditions.        ",

        tag3: 'Power Backup Unit Solutions play a crucial role in Power Transmission and Distribution by ensuring uninterrupted electricity supply during outages and voltage fluctuations. These systems consist of backup generators, battery banks, and sophisticated control systems. When the primary power source experiences a disruption, the backup unit seamlessly takes over, preventing service interruptions for critical infrastructure like hospitals, data centres, and manufacturing plants. This enhances the reliability of power distribution networks and minimises downtime, ultimately improving the overall efficiency and resilience of the grid. Additionally, power backup units can be integrated with renewable energy sources to provide a cleaner and more sustainable energy supply.',

        tag4: "PBU",

       

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

            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 ">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Power Transmission and Distribution</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <ImageSelect images={images}/>
                    
                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Power Transmission and Distribution</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">Power transmission and distribution play a pivotal role in shaping the energy consumption experience and the overall effectiveness and economics of the power infrastructure. Aartech boasts a comprehensive portfolio in these domains, dedicated to identifying, developing, and implementing innovative technologies tailored for specific applications in this field.


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
                    Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                    Power Backup Unit
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                    Customised Professional Case
                    </button>


                </div>
              

                { /*     mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                    Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                    Power Backup Unit
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                    Customised Professional Case
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
                    Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                    Auxiliary Power Unit
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                    Best Case
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
                    Kranking Ultracapacitors 
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                    Auxiliary Power Unit
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                    Best Case
                    </button>
                  

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto lg:p-2 p-0">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4  lg:leading-tight leading-snug">
                        Aartech's Control and Relay Panels (CRP) enhance Power Transmission and Distribution systems. Panels for 11KV and 33KV substations are equipped with relays, fuses, switches, wiring, and more. Their primary functions are monitoring and controlling transformers, generators, and circuit breakers. The versatility of CRPs allows them to be customised for single or multi-circuit use, ensuring they meet specific customer requirements and contribute to the efficiency and reliability of Power Transmission and Distribution networks.
                        </div>
                    </div>

                    <div className={`Pro2 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto lg:p-2 p-0 ">
                            <img src={bts} alt=""></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">KranKing® Ultracapacitors are tailored for Power Transmission and Distribution applications. Specifically designed for engine-cranking tasks, they alleviate the strain on lead-acid batteries during startups, reducing battery size and extending their lifespan. Their exceptional durability, with over 300,000 cycles even in extreme temperatures, enhances the reliability of power systems in Power Transmission and Distribution.</div>
                    </div>

                    <div className={`Pro3 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto bg-blue-300 lg:p-2 p-0">
                            <img src="" alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The Auxiliary Power Unit (APU) proves essential in Power Transmission and Distribution operations. With an extra electrical generator, it provides auxiliary power for critical systems such as lighting and avionics, ensuring uninterrupted Power Transmission and Distribution functions. Additionally, it uses bleed air to drive environmental systems, maintaining suitable conditions in challenging environments.</div>
                    </div>

                    <div className={`Pro4 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[130%] w-[100%] h-auto lg:p-2 p-0 ">
                            <img src={clip} alt=""></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">BestCase aids Power Transmission and Distribution by providing entrepreneurs and engineers with timely and affordable access to high-quality enclosures. Their offerings address the challenges faced by innovators, ensuring that prototypes and delicate equipment are protected during transportation and demonstrations. BestCase's commitment to quality, affordability, and availability enhances the efficiency of showcasing products in the power sector, contributing to seamless presentations and successful business endeavours in the field of Power Transmission and Distribution.

                        </div>
                    </div>

                    <div className={`Pro5 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto lg:p-2 p-0 ">
                            <img src="" alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">BestCase aids Power Transmission and Distribution by providing entrepreneurs and engineers with timely and affordable access to high-quality enclosures. Their offerings address the challenges faced by innovators, ensuring that prototypes and delicate equipment are protected during transportation and demonstrations. BestCase's commitment to quality, affordability, and availability enhances the efficiency of showcasing products in the power sector, contributing to seamless presentations and successful business endeavours in the field of Power Transmission and Distribution.</div>
                    </div>

                 

                </div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>

                <CustomerLogos2 />

            </div>

            <Footer />


        </div >
    )
}

export default PowerTran;