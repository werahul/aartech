import React, {useEffect} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { main } from "../../assets/invester";


function FRFaradigm() {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []); 

  return (
    <div>
      <Navbar />
      <div className="pt-[69px] lg:pt-[88px]">
        <div className="relative">
          <img
            src={main}
            alt="Overview Image"
            className="w-full object-cover h-32 lg:h-auto"
          />
          <p className="font-antonio absolute bottom-10 text-[28px] lg:text-[36px] px-5 lg:px-20 2xl:px-[120px] text-white">
            Financial Reports
          </p>
        </div>
        <div className="px-5 lg:px-20 py-5 lg:py-9 2xl:px-[120px]">
          <Link
            to="/investors/financial-reports"
            className="font-Barlow pt-7 mb-10 lg:mb-20 text-[18px] text-[#0C013D] font-semibold 2xl:text-[24px]"
          >
            {"<"} Back
          </Link>
        </div>
        <div className="px-5 lg:px-20 pb-[105px] 2xl:px-[120px] ">
          <h1 className="text-[28px] lg:text-[36px] font-antonio mb-5 lg:mb-9">
            Reports
          </h1>
          <div className="border border-black lg:w-[80%]">
            <div className="bg-[#0C013D] border border-black">
              <h2 className="font-Barlow text-white text-[18px] pl-[17px] lg:pl-[35px] py-5 font-bold">
                FARADIGM SUBSIDIARY HALF-YEARLY RESULTS
              </h2>
            </div>
            <div className="flex flex-col underline paraHover font-Barlow text-[18px] space-y-3 p-4 lg:p-9">
              <p > 
                <a
                  href="https://drive.google.com/file/d/1iVinX4mro7TTkvELNqAojc5bkHYe6RT0/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2023
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1xwCRA5ksHGoedm7ti80k6ceDJxW0onOC/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2022
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1-GJEJqJYhi7K4ph5Xw_soQaTFOippp2s/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2022
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1NjUxm1gyfC5D3h8RHc8kscx1A58nKXwr/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2021
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1qF5Z1dFB7vAocEZEO0LtfLReIZMpdyt9/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2021
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1fyUnpFIpaNRf52WA2jU8wsLLXe4czxXQ/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2020
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FRFaradigm;
