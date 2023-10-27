import React, { useState, useEffect } from 'react'
import { CustomerLogos2 } from '../Components'
import { ImageSelect } from '../Components/ImageSelector';
import { r1, r2, r3, r4, r5, rn1, rn2, rn3, rn4 } from '../assets/rndImages';
import { Footer, Navbar } from '../Components';
import SlideInBar from './SlideInBar';
import { RndAuto } from '../Components/AutoScroll';


const RnD = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [r1, r2, , r3, r4, r5];





    const tagContents = {
        tag1: "Aartech, in partnership with G&W Elec. Co. USA, offers CLiP® Fault Current Limiter solutions, enhancing electrical reliability in non-renewable energy sectors like cement and oil & gas amid a shifting energy landscape towards renewables.        ",

        tag2: "Aartech's CLiP® Fault Current Limiter solutions, in partnership with G&W Elec. Co. USA, enhance electrical reliability in heavy engineering industries like metals, material handling, petrochemicals, and more, improving operational efficiency and ROI in infrastructure development.",

    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };
    const handleProClick = (tag) => {
        setSelectedProTag(tag);
    }

    return (
        <div>
            <SlideInBar />
            <Navbar />
            <div className=" 2xl:px-[120px] lg:pt-24 lg:px-20   px-5 pt-20 lg:pb-20 pb-10 lg:mt-0 mt-5 sm:px-10">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">IRDD (Industrial Research, Design & Development) Lab
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">OVERVIEW</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio whitespace-nowrap">IRDD (Industrial Research, Design & Development) Lab</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">OVERVIEW</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            Aartech's Industrial Research, Design & Development Lab (IRDD) is dedicated to nurturing R&D human resources in the domains of design, development, deployment, testing, and validation. Recognized by esteemed authorities like the <b> Department of Scientific & Industrial Research (DSIR)</b> and the <b> Department of Science & Technology (DST)</b>, Government of India, the lab has made significant contributions to various specialized energy applications. Over the years, Aartech has been instrumental in pioneering cutting-edge technology-driven products, including the BTS 2000 Fast Bus Transfer Systems for Power Plants and Process Industries and the KranKing® Ultracapacitors designed for Defense Applications.
                        </div>
                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PROJECTS</div>
                <div class="text-box-red text-2xl font-bold font-Barlow tracking-widest lg:mt-8 mt-2">UPLIFT </div>
                <div class="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[28.80px] lg:mt-4 mt-2">UPLIFT ( Ultracapacitor Powered Lift): Sponsored under the Clean Energy Research Initiative (CERI) by the Department of Science & Technology, Government of India.</div>

                <div class="text-box-red lg:text-2xl text-xl font-bold font-Barlow lg:tracking-widest tracking-wider lg:mt-8 mt-6">UCPPS </div>
                <div class="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[28.80px] lg:mt-4 mt-2">SAUR STAMBH (A Smart Solar High Mast Light with Agri-IOT applications): Sponsored by the Department of Science & Technology (DST), Government of India, under the Solar Energy for Rural Development (SERD-2019).</div>

                <div class="text-box-red lg:text-2xl text-xl font-bold font-Barlow lg:tracking-widest tracking-wider lg:mt-8 mt-6">SAUR STAMBH </div>
                <div class="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[28.80px] lg:mt-4 mt-2">UCPPS (Ultracapacitor Based Pulse Power Source): A technology demonstration project in collaboration with DRDO Lab for Electromagnetic Aircraft Launching System (EMALS) and demonstrated Pulse Power Source of 1MW / 1 Sec - 300kJ Discharge.</div>

                <div class="text-box-red lg:text-2xl text-xl font-bold font-Barlow lg:tracking-widest tracking-wider lg:mt-8 mt-6">DISC5 - KRANKING APU</div>
                <div class="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[28.80px] lg:mt-4 mt-2">DISC5 - KRANKING® APU+: Part of the Defence India Startup Challenge (DISC Round#5) under the SPARK Framework of iDEX (Innovation for Defence Excellence) Programme.</div>


                <div class="text-box-red lg:text-2xl text-xl font-bold font-Barlow lg:tracking-widest tracking-wider lg:mt-8 mt-6">NPOL, KOCHI - SBATR</div>
                <div class="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[28.80px] lg:mt-4 mt-2">NPOL, KOCHI - SBATR: NPOL in Kochi is involved in developing the SBATR, a critical module of an autonomous frontline unmanned airborne system. The operation of the SBATR is continuous and mission-critical to safeguard valuable assets, although details about this project are confidential.</div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Collaborations</div>
                <div class="text-black lg:text-2xl text-lg font-normal font-Barlow lg:leading-[31.20px] leading-[20px] lg:mt-5 mt-2">Aartech's IRDD Lab actively collaborates with renowned institutions and organizations</div>
                <div className="lg:flex hidden mt-10 gap-x-10" >
                    <img src={rn1} alt="" />
                    <img src={rn2} alt="" />
                    <img src={rn3} alt="" />
                    <img src={rn4} alt="" />
                </div>
                <RndAuto />

                <div class=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-[31.20px] leading-tight lg:mt-10">1. Applications of Ultracapacitors with Fuel Cells in a Microgrid Environment.<br />2. Application of Ultracapacitor-based Energy Storage as Smart Grid Initiative for Recuperation and Reuse of Energy in Elevators for High Rise Buildings in Smart Cities.</div>
            </div>
            <Footer />

        </div>
    )
}

export default RnD;