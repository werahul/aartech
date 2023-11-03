import React, { useState, useEffect } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { df } from '../../assets/subImg'
import { DefenceMain, Defence1, Defence2, Defence3, Defence4 } from '../../assets/IndImages'
import { bestCase, relayPannels, kra, incinerator, wtc, solar, fuel, ac, flywheel, load } from '../../assets/ProductImages'
import { ImageSelect } from "../ImageSelector";


import { CustomerLogos2 } from '../../Components'



const DefenceAndExp = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
     }, []); // Empty dependency array ensures the effect runs only 


    const images = [DefenceMain, Defence1, Defence2, Defence3, Defence4]; // Specify the images for this page
    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const [selectedProTag, setSelectedProTag] = useState('PTag1');

    const tagContents = {
        tag1: 'In the world of control and automation, many different technologies are available today. Aartech meets various needs, from simple and affordable solutions for utility companies to complex and high-quality requirements for demanding customers. They use advanced ideas to make their customers happy. Demonstrating adeptness in technology, Aartech is proficient in harmonising the optimal assortment of components to craft tailored solutions tailored to specific requirements. Moreover, substantial value augmentation is achieved through solid-state and microprocessor-based embedded control products, which are meticulously crafted to address customised needs, distinguishing themselves from conventional integration through discrete electrical devices.',

        tag2: "Battery failures are a common concern when engines don't start. Failures can occur due to discharged batteries (low State-Of-Charge), old batteries (low state of health), and cold temperatures. To address this issue, many emphasise the importance of proper sizing, maintenance, special operating procedures, periodic checks, monitoring, and replacements. However, in the real world, certain applications require short bursts of power with varying duty cycles. A grid source is better suited to handle these load fluctuations than a standalone source. In such situations, a pulse power source/sink, either working on its own or complementing a base-level power source, becomes essential.",

        tag3: 'A Power Backup Unit solution for Defense and Exploration is a robust and reliable system designed to ensure uninterrupted power supply in challenging environments. It is essential in remote defence outposts, exploration missions, and critical operations where power disruptions can be detrimental. This solution typically includes backup generators, advanced energy storage systems, and renewable energy integration, providing a dependable source of electricity even in remote or harsh conditions. It ensures mission-critical equipment and communication systems remain operational, enhancing the effectiveness and safety of defence and exploration activities.',

        tag4: "Customised Plastic Cases play a pivotal role in Defense and Exploration, transcending their role as enclosures. Aartech Solonics provides the crucial advantage of timely, cost-effective, and tailored solutions. In these high-stakes environments, where first impressions matter, these cases not only protect equipment but also convey a strong product and company image. Aartech's dedication to quality, affordability, and availability is invaluable, ensuring that professionals, including innovators and entrepreneurs in defence and exploration, can confidently showcase their offerings, ultimately contributing to mission success and business growth.",

        tag5: "In Defense and Exploration, a Waste Management System proves crucial for safeguarding the environment in remote and sensitive areas. It plays a pivotal role by efficiently collecting, processing, and recycling various waste types, minimising environmental impact, and reducing the need for landfills. This not only ensures responsible waste handling but also supports sustainability, a critical consideration in defence outposts and exploration missions. It adheres to stringent waste management practices and employs the latest technology to preserve delicate ecosystems and maintain operational integrity.",

        tag6: 'Solar Design, Engineering, and Consultancy services offer a sustainable solution for Defence and Exploration by harnessing solar power. These services provide tailored solar solutions, optimising energy generation and reducing reliance on conventional power sources. They contribute to energy efficiency in remote locations, making them ideal for exploration missions. Additionally, in defence applications, solar solutions ensure a reliable and renewable power source, enhancing operational capabilities and reducing the logistics burden of fuel supply in remote areas. This commitment to engineering excellence helps transform industries and promotes a greener future for critical sectors like Defense and Exploration.',

        tag7: 'In the Defense and Exploration sectors, uninterrupted power supply (UPS) is paramount for critical operations. Conventional UPS solutions often fall short in providing efficient power protection for large-scale systems. Aartech partners with S&C USA to offer PureWave UPS, a cutting-edge Smart Grid solution. This system ensures superior power quality, safeguarding equipment against voltage sags, surges, and outages. Its rapid response and extended backup capabilities, up to 180 seconds, make it ideal for essential applications. The technology aligns with Tier III and Tier IV electrical requirements and supports Class A and Class B cooling needs, ensuring uninterrupted power for vital defence and exploration activities.',

        tag8: 'Energy storage solutions are indispensable in the Defense and Exploration Industry. They enable the harnessing of micro energy sources like solar, wind, and hydropower through technologies like PV panels and microturbines. This harvested energy can be stored and used to power various portable devices, such as communication tools and instruments, ensuring uninterrupted operations in remote and challenging environments. From soldiers in the field to data buoys in harsh climates, these solutions enhance energy autonomy and support critical functions in marine, defence, space, remote sensing, and telecom applications.',

        tag9: 'Load Limiting technology finds crucial applications in Defense and Exploration by ensuring efficient energy allocation and preventing overloads in remote and critical environments. This solution enables automated corrections and ensures power is distributed fairly. In defence, it aids in resource-efficient energy management, which is vital for mission-critical operations. In exploration, where power sources are limited, load limiting helps avoid system strain. This cost-effective approach benefits various sectors, enhancing energy control, security, and reliability in challenging settings, addressing non-technical losses, and promoting efficient allocation in areas of social obligation.',

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
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Defence & Exploration</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">INDUSTRIES</div>

                    <ImageSelect images={images} bgImg={df} />
                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Defence & Exploration</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">In the fields of defence and exploration, the pursuit of excellence in quality, reliability, flexibility, and consistency sets the highest performance standards. Achieving these benchmarks necessitates dedicated application-focused R&D and the creation of tailored solutions to meet these sectors' unique demands precisely. <br /> <br />
                            Additionally, the dynamic nature of these industries requires a constant commitment to innovation and adaptability to stay at the forefront of technological advancements.

                        </div>
                    </div>
                </div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">SOLUTIONS</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red '
                            : 'text-gray-500 border-gray-400   hover:text-box-red hover:border-box-red '
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red '
                            : 'text-gray-500 border-gray-400  hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Pulse Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400  hover:text-box-red hover:border-box-red'
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
                        Solar Design & Engineering
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


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">


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


                { /*     mobile-------------------------------------------------------------*/}



                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold  font-Barlow tracking-wider`}
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
                        Pulse Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
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
                        Solid Waste Treatment
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Solar Design & Engineering
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

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-3 lg:leading-tight leading-snug ">  {selectedTag && tagContents[selectedTag]}</div>




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



                </div>

                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        Solid Waste Treatment Products
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
                    Fuel cells
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
                     Solid Waste Treatment Products
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
                     Load Checker
                    </button>

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[70%]  w-[100%] h-auto sm:p-2 p-0">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">Aartech's Control & Relay Panels (CRP), designed for 11KV and 33KV substations, use outdoor switchgear. These panels include relays, fuses, switches, wiring, and more for monitoring and controlling transformers, generators, and circuit breakers. Indoor control panels for outdoor VCBs include relays and indicators. They're customisable for single or multi-circuit use to meet customer needs.</div>
                    </div>

                    <div className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="sm:w-[120%] w-[100%] h-auto sm:p-2 p-0">
                            <img src={kra} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The KranKing® Ultracapacitor series is purpose-built for engine-cranking tasks. They effectively lessen the load on lead-acid batteries during engine starts, allowing for significant reductions in battery size and extending battery lifespan. Unlike batteries, which typically last around 1000 cycles, KranKing® devices have consistently performed well for more than 300,000 cycles, even in extreme temperatures ranging from -45°C to 55°C. This exceptional durability significantly improves the reliability of the engine-cranking system as a whole.</div>
                    </div>

                    <div className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto sm:p-2 p-0">

                            <img src={fuel} alt=""></img>

                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Fuel cells are invaluable in defence and exploration. Their high efficiency, long endurance, portability, silent operation, and durability make them superior to conventional IC engines. In defence, fuel cells power communication, surveillance, and unmanned systems for various applications. In exploration, they provide reliable, eco-friendly energy for remote, off-grid operations, ensuring extended mission capabilities and reducing environmental impact, which is crucial for both sectors.</div>
                    </div>

                    <div className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto  sm:p-2 p-0">
                            <img src={bestCase} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">BestCase is the solution for entrepreneurs, innovators, and professionals in defence and exploration. Aartech provides timely access to quality enclosures at an affordable price, eliminating the need for expensive, low-quantity options. Whether showcasing lab results, transporting delicate equipment, or meeting with stakeholders, Aartech ensures your products meet the highest standards. We're here to support your best-case scenarios, 24/7, helping you succeed in your endeavours.</div>
                    </div>

                    <div className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto sm:p-2 p-0">
                            <img src={wtc} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The Waste To Compost (WTC) machine is an automatic composting device that transforms organic waste into compost within 24 hours on-site, adhering to the 3R Principle (reduce, recycle, reuse). It's eco-friendly, quiet, and odor-free. Plastic shredders are crucial in the Defense and Exploration Industry, reducing plastic waste in remote areas. Incinerators like the A-INC-50 model efficiently dispose of general waste in these industries, maintaining cleanliness and safety in remote or sensitive areas.</div>
                    </div>

                    <div className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={solar} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Aartech's Solar Design and Services for Defence and Exploration encompass a range of activities such as permit design, sales proposal design, utility-scale solutions, and site-specific optimisation. These services involve meticulous planning, innovative engineering, and adherence to industry standards to harness solar energy effectively. By providing tailored solar solutions and comprehensive consultancy, they contribute to sustainable energy sources for remote defence operations and exploration missions, reducing environmental impact and enhancing operational efficiency.
                        </div>
                    </div>

                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto  sm:p-2 p-0">
                            <img src={ac} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">J. Schneider's DC UPS systems play a pivotal role in Defense and Exploration. These systems provide uninterrupted power, ensuring the safety and integrity of critical controls and processes, even in remote and challenging environments. With microcontroller-supported charging, load shedding, and customisable backup times, they are ideal for mission-critical applications. Their robust technology, wide voltage range, and German-made quality make them a reliable choice for defence and exploration ventures, where power reliability is paramount.
                        </div>
                    </div>

                    <div className={`Pro8 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto  sm:p-2 p-0">
                            <img src={flywheel} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Flywheels play a pivotal role in defence and exploration efforts. In electric vehicles, they enable rapid charging, overcoming infrastructure challenges. For power transmission, they stabilise grids, preventing voltage issues caused by renewable sources. In public transport, regenerative braking stores energy, powering stations and reducing environmental impact. In process industries, flywheels act as Uninterruptible Power Supplies, ensuring continuous operations, reducing emissions, and enhancing system stability, making them invaluable in critical sectors.
                        </div>
                    </div>

                    <div className={`Pro8 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag9' ? '' : 'hidden'}`}>
                        <div className="lg:w-[120%] w-[100%] h-auto  sm:p-2 p-0">
                            <img src={load} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">The Load Checker is invaluable in the defence and exploration sectors. Its ability to block excessive current without manual intervention ensures the safety and stability of critical equipment. LoadChecker's self-reset feature guarantees an uninterrupted power supply after load disconnection. It accommodates temporary overloads, such as those during motor startups, allowing for efficient operations in demanding environments, safeguarding valuable equipment, and enhancing mission success.
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

export default DefenceAndExp