import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { CustomerLogos2 } from '../../Components'
import { bestCase, relayPannels, kra2, incinerator, wtc, solar, bts } from '../../assets/ProductImages'


import { ImageSelect } from "../ImageSelector";
import { Reliable1, Reliable2, Reliable3, Reliable4, Reliable5 } from '../../assets/solutionImages'


const Reliable = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [Reliable1, Reliable2, Reliable3, Reliable4, Reliable5];





    const tagContents = {
        tag1: "Aartech's KranKing™ Ultracapacitors are essential for reliable engines starting in the Defense Industry, enhancing performance and ensuring mission-critical reliability, certified through defence trials and reducing logistical challenges.        ",

        tag2: "Reliable engine starting solutions, like Aartech's, are invaluable in the Thermal Power industry. They ensure uninterrupted operations and improved Plant Load Factor (PLF), aligning with revenue goals, efficiency, productivity, and system enhancement needs.        ",

        tag3: "In Nuclear Power, reliable engine starting solutions are vital for safety and continuity. They ensure uninterrupted power generation and bolster the implementation of proven safety technologies, enhancing reliability in this high-stakes industry.        ",

        tag4: "In Hydro Power, reliable engine starting solutions are crucial for backup DG sets, the final defence against AC failure. They address battery and maintenance issues, ensuring the reliability of critical systems in hydroelectric installations.        ",

        tag5: "Reliable engine starting solutions are critical in Diesel Power, as these systems serve as the last line of defence during emergencies. They address battery and maintenance issues, ensuring dependable operation when needed most.        ",

        tag6: "In Biomass Power, reliable engine starting solutions are essential for off-grid applications, ensuring uninterrupted electricity supply to rural areas and supporting essential lighting needs for low-income consumers in remote regions.        ",

        tag7: " In Captive Power, reliable engine starting solutions are vital for backup DG sets to ensure continuous power supply for sensitive loads and maintain quality. They address battery and maintenance issues, bolstering reliability in captive power setups.        ",

        tag8: " In the Metal Industry, reliable engine starting solutions are vital for backup DG sets, ensuring continuous operations, revenue optimisation, and enhanced efficiency while addressing battery and maintenance concerns, supporting global competitiveness. ",
        tag9: " In the Oil & Gas industry, reliable engine starting solutions are essential for uninterrupted operations and enhanced plant utilisation, addressing battery issues and ensuring revenue optimisation, efficiency, and productivity.        ",
        tag10: " In the Petrochemical industry, reliable engine starting solutions are crucial for backup DG sets, ensuring uninterrupted operations, revenue optimisation, and enhanced safety while addressing battery and maintenance concerns in a rapidly growing sector.        ",
        tag11: " In the Chemical industry, dependable engine starting solutions are vital for backup DG sets, ensuring uninterrupted chemical production and addressing battery and maintenance issues in a sector driven by growing chemical demands and operational excellence.        ",
        tag12: "In the Textile industry, a reliable engine starting solution is crucial for backup DG sets, ensuring uninterrupted clothing and accessory production by addressing battery and maintenance issues and supporting efficiency in a sector driven by increasing demands.        ",

        tag13: " In the Cement industry, reliable engine starting solutions are essential for backup DG sets, ensuring continuous infrastructure production. These solutions address battery and maintenance issues, supporting operational efficiency in this growing sector.        ",
        tag14: " In the Paper industry, reliable engine starting solutions play a crucial role in backup DG sets, ensuring uninterrupted paper production. These solutions address battery and maintenance issues, supporting operational efficiency in this growing sector.        ",
        tag15: " In the Sugar industry, dependable engine starting solutions are vital for integrated sugar plants, ensuring uninterrupted power from bagasse and distillery operations. They tackle battery issues, enhancing efficiency and productivity in this agro-industry.        ",
        tag16: " In the Pharmaceutical industry, Reliable Engine Starting Solutions play a critical role in maintaining the quality of power supply services, ensuring tight control over processes, and meeting stringent efficiency and safety standards.        ",

        tag17: "Reliable Engine Starting Solutions are essential for the Telecom industry to prevent customer service disruptions, revenue loss and maintain goodwill by addressing battery and maintenance issues in backup power systems.",
        tag18: " Reliable Engine Starting Solutions ensure smooth Material Handling operations by preventing delays, holdups, and damage from battery failures in IC engine-based vehicles where battery power is critical for engine starting        ",
        tag19: "  Reliable Engine Starting Solutions reduce fuel costs and pollution by preventing diesel locomotives from idling for extended periods in the Railways industry, promoting efficiency and environmental sustainability.        ",
        tag20: "  Reliable Engine Starting Solutions in the Marine Industry ensure dependable engine starts, reducing battery replacement frequency, operational costs, and environmental impact in a space-constrained, critical deep-sea environment.        ",
        tag21: " Reliable Engine Starting Solutions transform the Automobile Industry by ensuring dependable engine starts, reducing maintenance costs, and minimising operational disruptions for both personal and commercial vehicles, enhancing overall efficiency.        ",


    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };
    const handleProClick = (tag) => {
        setSelectedProTag(tag);
    }

    return (
        <div>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20   px-5 pt-20 lg:mt-0 mt-5 sm:px-10">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Reliable Engine Starting
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">SOLUTIONS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Reliable Engine Starting</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">SOLUTIONS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            Reliable engine starting involves addressing common battery-related issues that can prevent engines from starting. These issues include discharged batteries, old batteries, and low temperatures. While some may resort to jump-starting "dead" batteries, it's essential to recognise that batteries have limitations due to their electrochemical nature, typically lasting 2-3 years or around 1000 charge-discharge cycles. Thus, proper sizing, maintenance, monitoring, and periodic replacements are crucial for dependable engine starting.

                        </div>


                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">INDUSTRIES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defense Industry
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Thermal Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Nuclear Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Hydro Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Diesel Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Biomass Power
                    </button>

                </div>
                <div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Captive Power
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                        Metals
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag9')}
                    >
                        Oil & Gas
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag10'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag10')}
                    >
                        Mining
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag11'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag11')}
                    >
                        Chemical
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag12'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag12')}
                    >
                        Textile
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag13'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag13')}
                    >
                        Cement
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag14'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag14')}
                    >
                        Paper
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag15'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag15')}
                    >
                        Sugar
                    </button>

                </div>
                <div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedTag === 'tag16'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag16')}
                    >
                        Pharmaceutical
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag17'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag17')}
                    >
                        Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag18'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag18')}
                    >
                        Material Handling
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag19'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag19')}
                    >
                        Railways
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag20'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag20')}
                    >
                        Marine Industry
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag21'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag21')}
                    >
                        Automobile Industry
                    </button>


                </div>


                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">

                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defense Industry
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Thermal Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Nuclear Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Hydro Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Diesel Power
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Biomass Power
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        Captive Power
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag8'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag8')}
                    >
                        Metals
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag9'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag9')}
                    >
                        Oil & Gas
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag10'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag10')}
                    >
                        Mining
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag11'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag11')}
                    >
                        Chemical
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag12'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag12')}
                    >
                        Textile
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag13'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag13')}
                    >
                        Cement
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag14'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag14')}
                    >
                        Paper
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag15'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag15')}
                    >
                        Sugar
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag16'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag16')}
                    >
                        Pharmaceutical
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag17'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag17')}
                    >
                        Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag18'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag18')}
                    >
                        Material Handling
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag19'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag19')}
                    >
                        Railways
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag20'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag20')}
                    >
                        Marine Industry
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag21'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag21')}
                    >
                        Automobile Industry
                    </button>

                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">  {selectedTag && tagContents[selectedTag]}</div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>
                <div div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        KranKing Ultracapacitors
                    </button>
                </div>

                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        KranKing Ultracapacitors
                    </button>
                </div>

                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={kra2} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                            KranKing® Ultracapacitors revolutionise engine cranking across industries. By reducing lead-acid battery load, they enable smaller batteries and extend their lifespan. With over 300,000 proven cycles and exceptional performance in extreme temperatures, these devices significantly enhance engine-cranking reliability, especially in demanding sectors like defence.






                        </div>
                    </div>
                </div>





                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>
                <CustomerLogos2 />






            </div>
            <Footer />

        </div>
    )
}

export default Reliable;