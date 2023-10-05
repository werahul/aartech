import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import {DefenceMain, Defence1,Defence2, Defence3 ,Defence4 } from '../../assets/IndImages'
import { bestCase, relayPannels, kra, incinerator, wtc, solar } from '../../assets/ProductImages'
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

        tag4: "Content for tag4 goes here.",

        tag5: "Content for tag5 goes here.",

        tag6: 'Solar Design, Engineering, and Consultancy services offer a sustainable solution for Defence and Exploration by harnessing solar power. These services provide tailored solar solutions, optimising energy generation and reducing reliance on conventional power sources. They contribute to energy efficiency in remote locations, making them ideal for exploration missions. Additionally, in defence applications, solar solutions ensure a reliable and renewable power source, enhancing operational capabilities and reducing the logistics burden of fuel supply in remote areas. This commitment to engineering excellence helps transform industries and promotes a greener future for critical sectors like Defense and Exploration.',

        tag7: 'Content for tag7 goes here.',
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
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Defence & Exploration</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">INDUSTRIES</div>

                    <ImageSelect images={images}/>
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
                        Pulse Power
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
                < div className="lg:flex hidden space-x-3 mt-3">


                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Waste Management System
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
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
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
                        Pulse Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Power Backup Unit
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Customised Professional Case
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Waste Management System
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

                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        WTC
                    </button>

                </div>

                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        Solar Design & Services
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
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
                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        WTC
                    </button>



                    <button
                        className={`tag ${selectedProTag === 'PTag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag6')}
                    >
                        Incinerator
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag7')}
                    >
                        Solar Design & Services
                    </button>
                    <button
                        className={`tag ${selectedProTag === 'PTag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag8')}
                    >
                        AC & DC UPS
                    </button>

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[70%] w-[100%] h-auto">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4  lg:leading-tight leading-snug">Aartech's Control & Relay Panels (CRP), designed for 11KV and 33KV substations, use outdoor switchgear. These panels include relays, fuses, switches, wiring, and more for monitoring and controlling transformers, generators, and circuit breakers. Indoor control panels for outdoor VCBs include relays and indicators. They're customisable for single or multi-circuit use to meet customer needs.</div>
                    </div>

                    <div className={`Pro2 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag2' ? '' : 'hidden'}`}>
                        <div className="lg:w-[110%] w-[100%] h-auto bg-pink-300">
                            <img src={kra} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">The KranKing® Ultracapacitor series is purpose-built for engine-cranking tasks. They effectively lessen the load on lead-acid batteries during engine starts, allowing for significant reductions in battery size and extending battery lifespan. Unlike batteries, which typically last around 1000 cycles, KranKing® devices have consistently performed well for more than 300,000 cycles, even in extreme temperatures ranging from -45°C to 55°C. This exceptional durability significantly improves the reliability of the engine-cranking system as a whole.</div>
                    </div>

                    <div className={`Pro3 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag3' ? '' : 'hidden'}`}>
                        <div className="lg:w-[70%] w-[100%] h-auto bg-blue-300"></div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">An Auxiliary Power Unit (APU) is a versatile device employed across various applications, including military vehicles, ships, and industrial settings, to supply auxiliary power when the primary power source is inaccessible or impractical. Equipped with an additional electrical generator, the APU generates sufficient power to operate essential systems like onboard lighting, galley electrics, and cockpit avionics. Additionally, it harnesses bleed air through its compressor to drive environmental systems, ensuring the heating and cooling of the aircraft or relevant environment.</div>
                    </div>

                    <div className={`Pro4 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag4' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto ">
                            <img src={bestCase} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">BestCase is the solution for entrepreneurs, innovators, and professionals in defence and exploration. Aarchtech provides timely access to quality enclosures at an affordable price, eliminating the need for expensive, low-quantity options. Whether showcasing lab results, transporting delicate equipment, or meeting with stakeholders, Aarchtech ensures your products meet the highest standards. We're here to support your best-case scenarios, 24/7, helping you succeed in your endeavours.</div>
                    </div>

                    <div className={`Pro5 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className="lg:w-[100%] w-[100%] h-auto ">
                            <img src={wtc} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">WTC, or Waste To Compost machine, is a fully automatic composting machine that effortlessly transforms all types of organic waste into compost within 24 hours right on the premises. This innovative solution effectively resolves your waste management challenges by adhering to the 3R Principle: It reduces garbage at the source, recycles organic waste into valuable compost, and utilises the compost for your garden plants. Moreover, this machine operates quietly and without emitting any unpleasant odours, making it an eco-friendly addition to your environment.</div>
                    </div>

                    <div className={`Pro6 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className="lg:w-[80%] w-[100%] h-auto ">
                            <img src={incinerator} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">An incinerator is a high-temperature device that burns waste materials, reducing them to ash and gas. In defence, incinerators can be employed to safely dispose of sensitive or hazardous materials, such as classified documents or chemical agents. In exploration, portable incinerators can assist in waste management during remote missions, minimising environmental impact and ensuring the safe disposal of waste.</div>
                    </div>

                    <div className={`Pro7 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className="lg:w-[110%] w-[100%] h-auto bg-lime-300">
                        <img src={solar} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">Aartech's Solar Design and Services for Defence and Exploration encompass a range of activities such as permit design, sales proposal design, utility-scale solutions, and site-specific optimisation. These services involve meticulous planning, innovative engineering, and adherence to industry standards to harness solar energy effectively. By providing tailored solar solutions and comprehensive consultancy, they contribute to sustainable energy sources for remote defence operations and exploration missions, reducing environmental impact and enhancing operational efficiency.
                        </div>
                    </div>

                    <div className={`Pro8 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag8' ? '' : 'hidden'}`}>
                        <div className="lg:w-[70%] w-[100%] h-auto bg-lime-300"></div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">content8</div>
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