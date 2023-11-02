import React, { useState } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { rNew } from '../../assets/subImg';
import { bestCase, relayPannels, kra, incinerator, wtc, bts, solar, flywheel, load } from '../../assets/ProductImages'

import { ImageSelect } from "../ImageSelector";
import { Renew1, Renew2, Renew3, Renew4, Renew5 } from '../../assets/IndImages'

import { CustomerLogos2 } from '../../Components'



const Renewable = () => {

    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [Renew1, Renew2, Renew3, Renew4, Renew5];

    const tagContents = {
        tag1: 'Control and automation are vital in optimising renewable energy utilisation. Aartech excels in adapting to the evolving technology landscape, addressing diverse needs from cost-effective solutions for distribution utilities to high-end, customised offerings for discerning customers. Leveraging cutting-edge concepts, Aartech integrates the ideal mix of components, tailoring solutions to unique requirements. They enhance value through solid-state and microprocessor-based embedded control products, purpose-built for customised renewable energy applications, departing from conventional discrete electrical device integration. This mastery ensures efficient, responsive, and eco-conscious operation, maximising the benefits of sustainable energy sources.',

        tag2: "Process continuity is critical for renewable energy systems. Electrical outages can disrupt operations and cause immediate and long-term damage. To ensure revenue, efficiency, and productivity are not compromised, it's essential to seek innovative solutions from trusted providers. Aartech collaborates with consultants, manufacturers, contractors, and end-users to address process continuity challenges comprehensively. This approach safeguards the uninterrupted operation of renewable energy systems, contributing to their reliability and performance.",

        tag3: 'Reliable Engine Starting/Pulse Power is a vital solution for renewable energy systems, addressing common battery failures during engine starts due to issues like discharged and ageing batteries, along with cold temperatures. While traditional methods prioritise proper sizing and maintenance, real-world applications often require brief, variable-duty bursts of power. In these cases, pulse power sources/sinks, whether standalone or paired with a base-level power source, prove indispensable. They ensure dependable energy bursts, effectively managing load fluctuations, enhancing renewable energy system reliability, and maintaining consistent operation in challenging conditions.',

        tag4: "Customised Plastic Cases play a crucial role in the renewable energy sector by safeguarding and showcasing sensitive equipment such as solar panel controllers and wind turbine components. Aartech Solonics' tailored solutions ensure that renewable energy companies can effectively present and protect their cutting-edge technology, facilitating a positive image and boosting business success. Their commitment to quality and affordability makes these cases an essential asset in this rapidly evolving industry.",

        tag5: "The Solid Waste Treatment plays a crucial role in promoting renewable energy by reducing the environmental impact of waste disposal. By efficiently managing and recycling materials, it contributes to resource conservation and minimizes the need for new raw materials. Additionally, waste-to-energy technologies can convert organic waste into biogas or other biofuels, providing a sustainable energy source. This holistic approach aligns with renewable energy goals, making waste management a valuable component of environmentally responsible and sustainable practices.",

        tag6: 'Solar Design, Engineering, and Consultancy services offered by Aartech Solonics are a pivotal solution for advancing renewable energy adoption. Their expertise in meticulously designing solar solutions, optimising energy generation, and tailoring designs to unique needs accelerates the transition to sustainable power sources. They cover the entire spectrum of solar energy integration, making them an ideal choice for residential clients seeking cost-effective energy solutions and industrial players aiming to enhance efficiency. Their commitment to engineering excellence and innovative approach paves the way for a greener future, transforming industries and lives by harnessing the power of the sun to create sustainable energy solutions.',

        tag7: 'Energy storage solutions are pivotal in the Renewable Energy Industry. They harness micro-energy sources like Solar, Wind, and Hydro Power using technologies such as Photo Voltaic (PV) and microturbines. The harvested energy is stored for on-demand use, powering various devices, from cell phones to remote sensing equipment. For instance, soldiers can charge communication devices with portable PV modules, while remote sensing buoys in challenging environments gather and utilise energy. These solutions cater to diverse sectors, including Marine, Defense, Real Estate, and Lighting, offering efficient, site-independent energy utilisation.',

        tag8: "Load Limiting Solutions are instrumental in Renewable Energy by ensuring equitable and efficient energy distribution. These systems promote fair allocation of power resources, catering to the growing consumer base while addressing technical and operational challenges. They play a key role in Smart Grids' self-healing concept, automating problem correction at the source. By encouraging demand-side management and responsible usage, load limiting helps minimise distribution sector issues and contributes to the reliable and sustainable integration of renewable energy sources into the grid, aligning with environmental and economic goals.",
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
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Renewable Energy</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <ImageSelect images={images} bgImg={rNew} />
                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Renewable Energy</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">The rapid depletion of non-renewable resources underscores the imminent dominance of renewable energy sources in meeting our energy demands. We are witnessing a swift rise in the adoption, deployment, and potential for grid parity in renewable energy. This shift is prompting a reevaluation of traditional approaches to power generation, transmission, distribution, and utilisation. <br /><br />
                            New strategies like distributed generation, energy storage, enhanced efficiency, cost-effective practices, and the application of intelligent power concepts are now at the forefront of this transformation.


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
                        Customised PLASTIC Case
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
                        Solid Waste Treatment
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
                        Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
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
                        Customised PLASTIC Case
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Solid Waste Treatment
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
                        Energy Storage
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
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
                        CONTROL RELAY PANELS
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
                        Best Case
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        Solid Waste Treatment
                    </button>
                   


                </div>

                < div className="lg:flex hidden space-x-3 mt-3">



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        Solar Design & Services
                    </button>

                    <button
                    className={`tag ${selectedProTag === 'PTag8'
                        ? 'bg-white text-box-red border-box-red'
                        : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                        } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                    onClick={() => handleProClick('PTag8')}
                >
                Flywheel
                </button>
                <button
                    className={`tag ${selectedProTag === 'PTag9'
                        ? 'bg-white text-box-red border-box-red'
                        : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                        } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
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
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL RELAY PANELS
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
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
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
                        solid waste Treatment
                    </button>



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        Solar Design & Services
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                       Flywheel
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag9')}
                    >
                        load Checker
                    </button>

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[70%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={relayPannels} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                            Control relay panels are vital for managing renewable energy systems, controlling equipment like transformers and generators, and offering protection through relays, fuses, and switches. They can be tailored to specific needs, providing both single and multi-circuit options for different setups.

                        </div>
                    </div>

                    <div className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[170%] lg:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={bts} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The BTS 2000 Fast Bus Transfer System ensures process continuity for renewable energy systems. This advanced microprocessor-based system is designed for power generation utilities and continuous process industries. It swiftly executes motor bus transfers between two power sources while adhering to safety parameters, guaranteeing uninterrupted power supply to critical plant motors. This proactive approach prevents disruptions, enhancing the reliability of renewable energy systems for consistent operation and energy delivery.</div>
                    </div>

                    <div className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={kra} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">KranKing® Ultracapacitors are tailored to enhance renewable energy systems by reducing the strain on lead-acid batteries during engine starts, resulting in smaller battery sizes and prolonged battery life. With a track record of over 300,000 cycles, even in extreme temperatures, they outperform traditional batteries, significantly boosting the overall reliability of engine-cranking systems for renewable energy applications.</div>
                    </div>

                    <div className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[170%] lg:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={bestCase} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Best Case aids in renewable energy by offering timely access to high-quality enclosures for various renewable energy products and components. Entrepreneurs and innovators in the renewable energy sector can benefit from affordable and readily available enclosure solutions, eliminating the need for expensive and custom-made options. Best Case ensures that renewable energy professionals can impressively showcase their offerings, meeting the highest industry standards for quality and affordability, ultimately contributing to the success of renewable energy projects.</div>
                    </div>

                    <div className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={wtc} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">WTC machines convert organic waste into compost, following the 3R Principle: reducing waste, recycling it into compost, and using it for plants. They offer an eco-friendly, quiet, and odourless waste management solution in renewable energy facilities. Plastic Shredders efficiently reduce plastic waste volume for recycling, contributing to environmental sustainability. Incinerators like the A-INC-50 model convert general waste into energy, aligning with the renewable energy industry's goals of waste reduction and resource efficiency.
                        </div>
                    </div>

                    <div className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={incinerator} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Incinerators, such as the A-INC-50 model, play a significant role in the Renewable Energy industry by efficiently converting general waste into energy. With a high-temperature combustion process and minimal gas residence time, they produce heat and power, contributing to the generation of renewable energy. This sustainable approach not only reduces waste but also harnesses energy from it, aligning with the industry's goals of environmental responsibility and resource efficiency.</div>
                    </div>

                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={solar} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Aartech Solonics' Solar Design and Services are a comprehensive solution for advancing renewable energy. Focusing on innovation and expertise, Aartech crafts tailored solar solutions, optimises energy generation, and provides a wide range of services, from permit design to system installation and maintenance. Their commitment to engineering excellence and sustainability transforms industries and lives by harnessing solar power, making them a key player in the transition to renewable energy sources. </div>
                    </div>
                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={flywheel} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Flywheels play a vital role in the Renewable Energy industry by storing and efficiently managing energy. In electric vehicles, they mitigate 'range anxiety' by providing fast-charging capability without location restrictions. They also aid in grid stabilisation for large-scale solar and wind farms, addressing over-voltage issues. Furthermore, in process industries, they act as an Uninterrupted Power Supply, ensuring productivity, reducing emissions, and stabilising power systems..
                        </div>
                    </div>
                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag9' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={load} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Load Checker plays a pivotal role in Renewable Energy applications. By blocking the mains supply during excessive current draw, the machine ensures system safety. Its patented self-reset feature automatically restores supply post-load disconnection, eliminating manual intervention. Operating with soft blocking technology, it guarantees longevity. Permitting temporary overloads, especially during motor starting, ensures seamless operations in renewable energy systems, enhancing efficiency and reliability.    </div>
                    </div>

                </div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>

                <CustomerLogos2 />

            </div>

            <Footer />


        </div >
    )
}

export default Renewable;