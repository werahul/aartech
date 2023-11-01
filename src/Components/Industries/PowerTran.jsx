import React, { useState, useEffect } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { power } from '../../assets/subImg'
import { bestCase, relayPannels, kra, incinerator, wtc, bts, clip , fuel ,load, flywheel } from '../../assets/ProductImages'

import { CustomerLogos2 } from '../../Components'
import { ImageSelect } from "../ImageSelector";
import { Power1, Power2, Power3, Power4, Power5 } from '../../assets/IndImages'



const PowerTran = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 


    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [Power1, Power2, Power3, Power4, Power5];

    const tagContents = {
        tag1: 'Control and automation are essential to Power Transmission and Distribution. Providing cost-effective solutions for utility companies and premium-quality solutions for demanding customers, Aartech offers a wide range of technological offerings. Their innovative approach prioritises customer satisfaction. As a power transmission and distribution company, Aartech excels at combining diverse components to craft tailored solutions. Microprocessor and solid-state embedded control products are meticulously designed to meet customised requirements. They deliver substantial value augmentation over conventional integration methods using discrete electrical devices.',

        tag2: "Reliable Engine Starting/Pulse Power offers critical support in Power Transmission and Distribution systems. Battery failures are a common challenge, stemming from issues like discharged batteries, old batteries, and cold temperatures. While traditional approaches emphasise proper sizing and maintenance, real-world scenarios often demand short bursts of power with variable duty cycles.        In such situations, a pulse power source/sink is essential, whether used alone or with a base-level power source. These solutions boost Power Transmission and Distribution system resilience, managing load changes for reliable operation in tough conditions.               ",

        tag3: 'Power Backup Unit Solutions play a crucial role in Power Transmission and Distribution by ensuring uninterrupted electricity supply during outages and voltage fluctuations. These systems consist of backup generators, battery banks, and sophisticated control systems. When the primary power source experiences a disruption, the backup unit seamlessly takes over, preventing service interruptions for critical infrastructure like hospitals, data centres, and manufacturing plants. This enhances the reliability of power distribution networks and minimises downtime, ultimately improving the overall efficiency and resilience of the grid. Additionally, power backup units can be integrated with renewable energy sources to provide a cleaner and more sustainable energy supply.        ',

        tag4: "Customised Plastic Cases play a crucial role in the Power Transmission and Distribution system by safeguarding essential equipment and components. Aarchtech Solonics provides timely, cost-effective, and quality solutions that ensure the protection and secure transportation of vital electrical and electronic devices. These cases not only enhance equipment safety during transport and storage but also project a professional image for the company, ultimately contributing to the success and reliability of the power transmission and distribution infrastructure.",

        tag5: "Energy storage solutions are indispensable in the Power Transmission and Distribution Industry. These systems leverage energy harvesting technologies to capture power from micro sources like Solar, Wind, and Hydro. The collected energy is stored and can be used when needed to support various applications, from handheld devices to remote sensing and telecom equipment. In real estate, energy storage facilitates efficient utilisation of passive and active energy sources, such as using solar tiles with PV arrays and LED lights for decorative or security purposes, reducing the need for extensive cabling.",

        tag6: "Load Limiting Solutions play a pivotal role in Power Transmission and Distribution by addressing the demand-supply gap and ensuring fair energy distribution. In areas where metering isn't feasible, load limiting prevents excessive use of electricity, especially in low-income communities. It curtails non-technical losses, enhances operational efficiency, and promotes responsible energy consumption. Additionally, load limiting is vital for distributed generation operations, aligning technical, operational, and commercial aspects. By automating overload management, these solutions foster a shift towards regular metered connections, ensuring equitable energy access and sustainable distribution practices.",
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
            <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10 ">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Power Transmission and Distribution</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <ImageSelect images={images} bgImg={power} />

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
                            : 'text-gray-500 border-gray-400  hover:text-box-red hover:border-box-red'
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
                        Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Power Backup Unit
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Customised PLASTIC Case
                    </button>



                </div>
                < div className="lg:flex hidden space-x-3 mt-2">

                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400  hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
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
                        Pulse power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Power Backup Unit
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Customised PLASTIC Case
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
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
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                        Fuel Cell
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Best Case
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        Flywheel
                    </button>



                </div>
                <div div className="lg:flex hidden space-x-3 mt-2">
                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
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
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
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
                        Kranking Ultracapacitors
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag3')}
                    >
                    Fuel Cell
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag4')}
                    >
                        Best Case
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                    Flywheel
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
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
                            Aartech's Control and Relay Panels (CRP) enhance Power Transmission and Distribution systems. Panels for 11KV and 33KV substations are equipped with relays, fuses, switches, wiring, and more. Their primary functions are monitoring and controlling transformers, generators, and circuit breakers. The versatility of CRPs allows them to be customised for single or multi-circuit use, ensuring they meet specific customer requirements and contribute to the efficiency and reliability of Power Transmission and Distribution networks.
                        </div>
                    </div>

                    <div className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={kra} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">KranKing® Ultracapacitors are tailored for Power Transmission and Distribution applications. Specifically designed for engine-cranking tasks, they alleviate the strain on lead-acid batteries during startups, reducing battery size and extending their lifespan. Their exceptional durability, with over 300,000 cycles even in extreme temperatures, enhances the reliability of power systems in Power Transmission and Distribution.</div>
                    </div>

                    <div className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={fuel} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Fuel cells play a pivotal role in modern Power Transmission and Distribution systems. Their high efficiency, extended endurance, portability, and eco-friendliness make them ideal for various applications, including defence. Fuel cells, such as Solid Oxide Fuel Cells (SOFC), are particularly well-suited for communication, surveillance, and unmanned systems, both onboard and stationary. They offer reliable, silent, and durable power generation, improving the efficiency and reliability of power delivery in these critical applications.</div>
                    </div>

                    <div className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[170%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={bestCase} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">BestCase aids Power Transmission and Distribution by providing entrepreneurs and engineers with timely and affordable access to high-quality enclosures. Their offerings address the challenges faced by innovators, ensuring that prototypes and delicate equipment are protected during transportation and demonstrations. BestCase's commitment to quality, affordability, and availability enhances the efficiency of showcasing products in the power sector, contributing to seamless presentations and successful business endeavours in the field of Power Transmission and Distribution.

                        </div>
                    </div>
                    <div className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[170%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={flywheel} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Flywheels revolutionise the Power Transmission industry by storing rotational energy. In Electric Vehicles, they enable unrestricted fast charging, overcoming location constraints. In Power Transmission, they stabilise grids, provide synthetic inertia, and resolve over-voltage issues. For Public Transport, flywheels recover energy from braking, reducing consumption and powering various applications. In Process Industries, they act as an Uninterrupted Power Supply, ensuring stability, cutting emissions, and reducing operational costs.  </div>
                    </div>

                    <div className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[170%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={load} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The Load Checker plays a crucial role in Power Transmission and Distribution by safeguarding the system against excessive current draw. It automatically blocks the mains supply in case of overload, preventing equipment damage and enhancing overall safety. The patented self-reset feature ensures uninterrupted power once the load is disconnected for a brief period. LoadChecker's ability to handle temporary overloads efficiently, like during motor start-ups, contributes to a more reliable and robust power distribution system. </div>
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