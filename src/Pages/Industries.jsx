import React, { useEffect } from "react";
import { Navbar, BreadCrumbs, Footer, SlideInBar } from "../Components";
import { Link } from "react-router-dom";
// import { breadHome } from "../assets/images";
import { industry } from "../constants";

import Aos from "aos"
import "aos/dist/aos.css"

const Industry = ({ title, image, desc, path }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({duration: 2000});
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div data-aos="fade-up">
      <Link to={path}>
        <h3 className="text-[#B80001] font-bold font-Barlow text-[20px] lg:text-[24px] lg:tracking-wider tracking-wide">
          {title}
        </h3>
        <img src={image} alt="" className="my-2 w-[100%] h-auto" />
        <p className="font-Barlow text-[16px] lg:leading-[26px] leading-snug  lg:font-normal font-medium lg:text-[20px]">
          {desc}
        </p>
      </Link>
    </div>
  );
};

const Industries = () => {

  {/*const breadcrumbs = [  
    {
      url: "/",
      image: breadHome,
    },
    { displayName: "ALL INDUSTRIES", url: "/industries" },
  ];*/}
  return (
    <div>
      <Navbar />
      <SlideInBar />
      <div className="px-4 pt-[20px] lg:pt-[88px] 2xl:px-[120px] lg:px-20 sm:px-10" >
        {/* <div className="font-Barlow font-[500] mt-[24px] mb-[24px] lg:mt-[28px] lg:mb-[18px] text-[#0C013D]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
  </div>*/}
        <h1 className="text-[28px] lg:text-[36px] mt-[80px] lg:mt-[80px] lg:mb-[14px] mb-[24px] font-antonio">
          All Industries
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-y-[40px] gap-y-8 lg:mb-[80px] mb-10 font-Barlow">
          {industry.map((indus, index) => {
            return <Industry key={index} {...indus} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;
