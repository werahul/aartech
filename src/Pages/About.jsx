import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { abImg1, linkedIcon, abBlank, abDebasis, abSsR, abSyed, abVivek, abAmit, abJitendra, abPradeep, abSanjeev, abWajid, mAmit, mDebasis, mJitendra, mSanjeev, mSsR, mSyed, mVivek, mWajid, Mpradeep, abNitisha2, mNitisha, abAarti, mAarti, abTanuj, mTanuj, blankWhite, newAbLogo1, newAbLogo2, newAbLogo3, newAbLogo4 } from '../assets/images'
import PeopleGrid from '../Components/PeopleGrid'
import { AboutImages } from '../Components'
import ParnterAbout from '../Components/AutoScroll/ParnterAbout'




const peopleData = [
    {
        name: "Amit Raje (AMR)",
        role: " CHIEF MANAGING DIRECTOR",
        description:
            "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
        image: abAmit,
        Mimage: mAmit,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/amitraje/"
    },
    {
        name: "Arati Nath",
        role: "Chief executive officer",
        description:
            "The visionary CEO of Aartech Solonics, drives success with dedicated leadership. With a B.Com from Pune University, PGDBA in Finance from Welingkar Institute of Management, she boasts 18 years of experience, including roles at SICOM, ICICI, and BANK OF AMERICA, cementing her as a transformative trailblazer.",
        image: abAarti,
        Mimage: mAarti,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/arati-raje-08342239"
    },
    {
        name: "Pradeep Narkhede",
        role: "Chief Finance Officer",
        description:
            "He applies his financial acumen to create a harmonious fiscal environment within the company. An economics graduate with an extensive tenure spanning over 18 years at Aartech, he has demonstrated his expertise in financial management and strategic planning, leaving a huge impact on the organization's financial growth and stability.",
        image: abPradeep,
        Mimage: Mpradeep,
        linkedInIcon: linkedIcon,
        link: "http://linkedin.com/in/pradeep-narkhede-96a4a828b"
    },
    {
        name: "Vivek Attri",
        role: "CHIEF MARKETING OFFICER",
        description:
            "He pioneers inventive brand strategies & captivating customer interactions. His data-driven skills shape potent global campaigns, broadening the company's market influence. With a Post Graduate and Engineering background, he takes pride in his 13-year journey at Aartech, fueling its ongoing success.",
        image: abVivek,
        Mimage: mVivek,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/vivekattri"
    },
    {
        name: "Syed Sohail Hussain",
        role: "Chief experience officer",
        description:
            "He blends strategic foresight with innovation, driving the company's growth. His leadership is marked by advanced solutions and collaborations. His academic foundation in Engineering empowers him to leverage 13 years of invaluable Aartech experience, placing him at the forefront of steering the company's progress.",
        image: abSyed,
        Mimage: mSyed,
        linkedInIcon: linkedIcon,
        link: "http://www.linkedin.com/in/sohailhussain "
    },
    {
        name: "Debasis Barik",
        role: "Chief Revenue Officer",
        description:
            "He exemplifies leadership through collaborative prowess, fostering unity across functions. His synergy with sales, marketing, and product teams ensures a cohesive strategy for revenue, customer acquisition, and retention. An Engineering Graduate, he brings 13 years of Aartech experience, shaping the company's success.",
        image: abDebasis,
        Mimage: mDebasis,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/debasis-barik-electrical"
    },
    {
        name: "Ss Raghuwanshi",
        role: "Chief Operating Office",
        description:
            "He refines operations with meticulous precision, converting strategies into flawless execution and yielding remarkable outcomes. With an Engineering degree and a Master's in Business Administration, he boasts a total of 26 years of experience, including a decade of dedicated service at Aartech, where he continues to drive the company's excellence.",
        image: abSsR,
        Mimage: mSsR,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/shailendra-singh-raghuvanshi-207971126/"
    },
    {
        name: "Nitisha Tiwari",
        role: "MIDDLE MANAGEMENT EXECUTIV",
        description:
            "She is a dedicated professional with extensive experience in technical sales, marketing, programming, engineering, and customer support. With a robust background in overseeing BTS divisions and ultra capacitors, I bring a unique fusion of skills for exceptional outcomes. Engineering Graduate, 11 years at Aartech, 16 years total experience.",
        image: abNitisha2,
        Mimage: mNitisha,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/nitisha-tiwari-83006321"
    },
    {
        name: "Sanjeev Kumar",
        role: "MIDDLE MANAGEMENT EXECUTIVE",
        description:
            "He is an accomplished sales specialist with a distinct expertise in military applications. With an understanding of defense requirements, he crafts solutions that are finely tuned to armed forces' needs. His dedication ensures optimal performance and mission success. With a background in Marketing, he brings a strategic edge to his role.",
        image: abSanjeev,
        Mimage: mSanjeev,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/sanjeevkumar"
    },
    {
        name: "Wajid Siddiqui",
        role: "MIDDLE MANAGEMENT EXECUTIVE",
        description:
            "With a B.Com, CA (Inter), and Accounting Technician Diploma, he brings 13+ years' experience in the field of finance. Proficient in managing statutory compliances like Companies Act 2013, GST Filings, TDS Returns, ESIC, &  Professional Tax, his goal is to leverage his expertise to foster the growth of the company, society, and the nation as a whole.",
        image: abWajid,
        Mimage: mWajid,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/wajid-siddiqui-b0860a37"
    },
    {
        name: "Jitender Chauhan",
        role: "MIDDLE MANAGEMENT EXECUTIV",
        description:
            "He plays a pivotal role by seamlessly orchestrating various aspects of the CRP segment, including production, quality control, sales, and purchasing. His approach extends across the entire value chain, ensuring efficient and cohesive operations. As an Engineering Graduate, he embodies the essence of integrated success within the organization.",
        image: abJitendra,
        Mimage: mJitendra,
        linkedInIcon: linkedIcon,
        link: "https://www.linkedin.com/in/jitendra-chauhan-b62b7656"
    },
    {
        name: "K R Tanuj Reddy",
        role: "Company Secretary & Compliance Officer",
        description:
            "Holding an LLB and a Master's in Commerce from Barkatullah University, he's a member of the Institute of Company Secretaries of India. With 9+ years of experience in Corporate Governance, Listing Regulations, FEMA, ESOPs, Policy framework, Inspection, and Investigations, he leads Governance, Compliance, and Secretarial functions to ensure legal compliance.",
        image: abTanuj,
        Mimage: mTanuj,
        linkedInIcon: "",
        link: "",
        id: 10
    },

];


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <>
            <Navbar />
            <div className="2xl:px-[40px] text-box-red lg:text-4xl text-[28px] font-normal lg:pt-20 leading-9 font-antonio lg:mb-9 lg:mt-20 mt-[120px] lg:ml-10 ml-5 -mb-8 sm:px-10">Our History</div>
            <AboutImages />
            <div className=" h-[325px] bg-foot-blue mb-1 lg:mt-14 mt-24 flex flex-col items-center justify-center px-5 py-10 sm:px-10" >
                <div className="text-white lg:text-5xl text-[28px] font-normal lg:leading-[48px] leading-[39.20px] text-center font-antonio lg:mb-10 mb-[24px] lg:mt-0 mt-10">Living Passion through Engineering</div>
                <div className="lg:w-[844px] text-center text-white lg:text-xl text-base lg:px-4 lg:font-semibold font-normal lg:leading-7 leading-snug lg:mb-0 mb-10 font-Barlow">Our team comprises accomplished individuals with a shared passion for excellence. Each member brings a unique blend of skills and expertise to our mission. From creative thinkers to problem solvers, we collaborate to deliver innovative solutions.</div>
            </div>
            <div className="2xl:px-[100px] text-box-red lg:text-4xl text-[28px] font-normal lg:pt-20 pt-10 leading-9 font-antonio lg:mb-9  lg:ml-10 ml-5 -mb-8 sm:px-10">Our Partners</div>

            <div className="lg:flex hidden lg:px-20 px-5 sm:px-10 2xl:px-[100px] gap-x-16">
                <img src={newAbLogo1} alt="" />
                <img src={newAbLogo2} alt="" />
                <img src={newAbLogo3} alt="" />
                <img src={newAbLogo4} alt="" />
            </div>
            <div className="lg:hidden block mt-8">
                <ParnterAbout />
            </div>

            <div className="2xl:px-[120px] lg:px-20 lg:py-20 px-[20px] lg:pt-0 lg:pb-[80px] pt-[10px] pb-[40px] sm:px-10">
                <div className="text-box-red lg:text-4xl text-[28px] font-seminormal leading-9 font-antonio lg:mt-20 lg:mb-9 mb-6 mt-0">Our Team</div>

                <PeopleGrid peopleData={peopleData} />
            </div>
            <Footer />



        </>
    )
}

export default About