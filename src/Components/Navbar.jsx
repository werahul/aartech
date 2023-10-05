import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, down } from "../assets/images";
import SlideInBar from "../Pages/SlideInBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkButtonActive, setIsWorkButtonActive] = useState(false);
  const [rotate, setRotate] = useState(0)
  const [isRed, setIsRed] = useState(true);

  // Create state to track the visibility of the absolute div
  const [isDivVisible, setDivVisibility] = useState(false);

  // Function to toggle the visibility of the absolute div
  const toggleDivVisibility = () => {
    setDivVisibility(!isDivVisible);
    setRotate(!rotate);
    setIsRed(!isRed);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleColor = () => {
    setIsWorkButtonActive(!isWorkButtonActive);
  };

  const location = useLocation();
  const rotateClass = rotate ? 'customRotate' : '';
  const workClass = isRed ? 'text-white' : 'text-box-red';
  const linkStyle = {
    color: isWorkButtonActive ? '#DA0001' : 'white',
    fontWeight: isWorkButtonActive ? "800" : "",

  };

  return (
    <div className="navbar-bg fixed inset-0 lg:h-[88px] h-[70px] flex items-center justify-between z-20 2xl:px-[40px]">
      <div className="flex items-center justify-between w-full px-5 md:px-20">
        <Link to="/" className="z-50 ">
          <img
            src={logo}
            alt=""
            className="w-[71px] h-[49px] md:w-auto md:h-auto "
          />
        </Link>
        <div className="flex items-center  flex-row-reverse lg:flex-row">
          <button
            className="md:hidden z-50 text-white ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h2 className="bse-bg block lg:hidden text-white ml-4 py-1 px-3 font-Barlow font-semibold">
            BSE
          </h2>
        </div>
      </div>
      <div
        className={`${isMenuOpen
          ? "flex flex-col lg:py-20 py-[7rem] px-5 lg:text-[24px] text-lg space-y-4 fixed h-screen inset-0 bg-neutral-800"
          : "hidden lg:flex"
          } flex md:items-center font-Barlow md:space-x-7 mt-0 px-5 md:px-20 z-1`}
      >
        <Link
          // to="/work" // Specify the route you want to link to
          className="text-white lg:block hidden font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4 border-neutral-500"
          style={linkStyle}
          onClick={() => {
            setIsMenuOpen(false);
            toggleColor(); // Toggle the color
          }}
        >
          WORK
        </Link>

        <Link
          // to="/work"
          // const linkClasses = `text-white lg:hidden block font-bold hover:opacity-75 ${isDivVisible ? 'active2' : ''}`;
          className={`text-white lg:hidden block font-bold  ${isDivVisible ? 'active2' : ''}`}
          onClick={() => {
            // setIsMenuOpen(false);
            setIsWorkButtonActive(!isWorkButtonActive); // Toggle the state

          }}
        >
          <div // to="/work"
            className="">
            <div className={`lg:border-none lg:pb-0 border-b pb-4 border-neutral-500 w-[100%] ${workClass}`}>
              WORK
              <img src={down} alt="" className={` float-right top-0 right-0 invert  text-white p-2 rounded-full cursor-pointer ${rotateClass} `} onClick={toggleDivVisibility} />
              {/*<button className=" float-right top-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer "
        onClick={toggleDivVisibility}
          >
            o        
        </button>*/}
            </div>



            <div
              className={`overflow-hidden flex flex-col customTransition  ${isDivVisible ? 'h-auto opacity-100 translate-y-[0%] ' : 'h-0 opacity-0 translate-y-[-20%]'} bg-transparent rounded-lg`}
            >
              <Link to="/industries" className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-white  py-4 ml-14 border-neutral-500">industries</Link>
              <Link to="/products" className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-white  py-4 ml-14 border-neutral-500">products</Link>
              <Link to="/solutions" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-white pl-14 py-4 border-neutral-500">solutions</Link>
            </div>
          </div>
        </Link>

        <Link
          to="/about"
          className={`text-white font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${location.pathname === "/about" ? "active" : ""
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          to="/brands"
          className={`text-white font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${location.pathname === "/brands" ? "active" : ""
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          BRANDS
        </Link>
        <Link
          to="/media"
          className={`text-white font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${location.pathname === "/media" ? "active" : ""
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          MEDIA
        </Link>
        <Link
          // to="/investors"
          className="text-white font-bold hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          INVESTORS
        </Link>
        <Link
          to="/contact"
          className={`text-white font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${location.pathname === "/contact" ? "active" : ""
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
        <h2 className="bse-bg lg:block hidden text-white ml-4 py-1 pr-10 pl-2 font-Barlow font-semibold">
          BSE
        </h2>
      </div>
      {isWorkButtonActive && <SlideInBar />} {/* Display the HorizontalBar when active */}
    </div>

  );
};

export default Navbar;
