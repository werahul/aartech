import React from "react";
import { Link } from "react-router-dom";
import { headerImage } from "../assets/images";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="h-[40vh] lg:h-[110vh] flex flex-col px-4 md:px-44 justify-center">
        {<div className="mx-4 lg:mx-[.4rem] 2xl:mx-[3.5rem] flex h-[110vh] items-end">
          {/*<button className="font-Barlow text-[14px] md:text-[18px] tracking-wider hover:bg-transparent hover:border transition-all  hover:border-red-600 outline-none bg-red-600 mb-[24px] md:mb-[51px] text-white py-2 px-4 md:px-6">
            PLAY VIDEO
  </button>*/}
        </div>}
        
        <div className="flex flex-col  md:flex-row justify-center md:space-x-4">
          <Link
            to="/industries"
            className="w-full hidden lg:block md:w-[336px] h-[220px] text-white pt-8 px-4 md:px-7 font-Barlow link mb-4 md:mb-0"
          >
            <h2 className="font-bold text-[14px] tracking-wider md:text-[18px] mb-2 md:mb-6">
              INDUSTRIES
            </h2>
            <p className="font-normal font-Barlow text-[16px] md:text-[20px]">
              Work spanning 9 major industries & 33 sub-industries.
            </p>
          </Link>
          <Link
            to="/products"
            className="w-full hidden lg:block md:w-[336px] h-[220px]   text-white pt-8 px-4 md:px-7 font-Barlow link mb-4 md:mb-0"
          >
            <h2 className="font-bold text-[14px] tracking-wider md:text-[18px] mb-2 md:mb-6">
              PRODUCTS
            </h2>
            <p className="font-normal text-[16px] md:text-[20px]">
              12 products adopted across 15 countries.
            </p>
          </Link>
          <Link
            to="/solutions"
            className="w-full hidden lg:block md:w-[336px] h-[220px]   text-white pt-8 px-4 md:px-7 font-Barlow link mb-4 md:mb-0"
          >
            <h2 className="font-bold text-[14px] tracking-wider md:text-[18px] mb-2 md:mb-6">
              SOLUTIONS
            </h2>
            <p className="font-normal text-[16px] md:text-[20px]">
              Over 20+ customized solutions across industries and products.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
