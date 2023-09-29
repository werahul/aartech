import React, {useEffect} from "react";
import { Navbar, BreadCrumbs, Footer, SlideInBar } from "../Components";
import { solution } from "../constants";
// import { breadHome } from "../assets/images";

const Solution = ({ title, image, desc }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div>
      <h3 className="text-[#B80001] font-Barlow font-bold whitespace-nowrap text-[20px] lg:text-[24px] lg:tracking-widest tracking-wide">
        {title}
      </h3>
      <img src={image} alt="" className="my-2 w-[100%] h-auto " />
      <p className="font-Barlow text-[16px] lg:leading-[26px] leading-snug font-[500] lg:font-normal lg:text-[20px]">
        {desc}
      </p>
    </div>
  );
};

const Solutions = () => {
  {/*const breadcrumbs = [
    {
      url: "/",
      image: breadHome,
    },
    { displayName: "ALL SOLUTIONS", url: "/solutions" },
  ];*/}
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className="px-5 pt-[80px] lg:pt-[88px] lg:px-20 2xl:px-[120px]">
       {/* <div className="font-Barlow font-[500] mt-[24px] mb-[24px] lg:mt-[28px] lg:mb-[18px] text-[#0C013D]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
  </div>*/}
        <h1 className="text-[28px] lg:text-[36px] mt-[80px] lg:mt-[80px] mb-[22px] lg:mb-[14px] font-antonio">
          All Solutions
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-[48px] mb-[48px]">
          {solution.map((sol, index) => {
            return <Solution key={index} {...sol} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
