import React, { useState } from 'react'
import { Navbar, Footer } from "../index"
import { rNew } from '../../assets/subImg';
import { bestCase, relayPannels, kra, incinerator, wtc, bts, solar } from '../../assets/ProductImages'

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

        tag4: "Costmized Case",

        tag5: "Waste MAng",

        tag6: 'Solar Design, Engineering, and Consultancy services offered by Aartech Solonics are a pivotal solution for advancing renewable energy adoption. Their expertise in meticulously designing solar solutions, optimising energy generation, and tailoring designs to unique needs accelerates the transition to sustainable power sources. They cover the entire spectrum of solar energy integration, making them an ideal choice for residential clients seeking cost-effective energy solutions and industrial players aiming to enhance efficiency. Their commitment to engineering excellence and innovative approach paves the way for a greener future, transforming industries and lives by harnessing the power of the sun to create sustainable energy solutions.',

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

            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10 ">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Renewable Energy</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <ImageSelect images={images} bgImg={rNew}/>
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
                        Customised Professional Case
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
                        Waste Management System
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Solar Design, Engineering & Consultancy services
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
                        Customised Professional Case
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Waste Management System
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Solar Design, Engineering & Consultancy services
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
                        Best Case
                    </button>

                    <button
                        className={`tag ${selectedProTag === 'PTag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag5')}
                    >
                        WTC
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
                        WTC
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

                </div>




                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[70%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={relayPannels} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                            Control and relay panels are vital for managing renewable energy systems, controlling equipment like transformers and generators, and offering protection through relays, fuses, and switches. They can be tailored to specific needs, providing both single and multi-circuit options for different setups.

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
                        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">BestCase aids in renewable energy by offering timely access to high-quality enclosures for various renewable energy products and components. Entrepreneurs and innovators in the renewable energy sector can benefit from affordable and readily available enclosure solutions, eliminating the need for expensive and custom-made options. BestCase ensures that renewable energy professionals can impressively showcase their offerings, meeting the highest industry standards for quality and affordability, ultimately contributing to the success of renewable energy projects.</div>
                    </div>

                    <div className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag5' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={wtc} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">WTC or Waste To Compost machine, a fully automatic composting machine, contributes to renewable energy by swiftly converting organic waste into compost within 24 hours on-site. This eco-friendly solution adheres to the 3R Principle: reducing waste, recycling it into valuable compost, and using the compost for garden plants. Its quiet and odourless operation makes it a sustainable choice for waste management in renewable energy facilities.</div>
                    </div>

                    <div className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag6' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={incinerator} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">An incinerator is a device designed to burn waste materials at high temperatures, reducing them to ash and other byproducts. In the context of renewable energy, some modern incinerators are equipped with energy recovery systems that capture the heat generated during combustion. This captured heat can then be converted into electricity or used for various heating purposes, contributing to generating renewable energy while reducing waste volume.</div>
                    </div>

                    <div className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag7' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={solar} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">Aartech Solonics' Solar Design and Services are a comprehensive solution for advancing renewable energy. Focusing on innovation and expertise, Aarchtech crafts tailored solar solutions, optimises energy generation, and provides a wide range of services, from permit design to system installation and maintenance. Their commitment to engineering excellence and sustainability transforms industries and lives by harnessing solar power, making them a key player in the transition to renewable energy sources.
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

export default Renewable;