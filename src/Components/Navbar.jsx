import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { logo, down } from "../assets/images";
import SlideInBar from "../Pages/SlideInBar";
import SlideinBarInvester from "../Pages/SlideinBarInvester";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkButtonActive, setIsWorkButtonActive] = useState(false);
  const [isInvestButtonActive, setIsInvestButtonActive] = useState(false);
  const [isInvesterButtonActive, setIsInvesterButtonActive] = useState(false);
  const [rotate2, setRotate2] = useState(false)
  const [rotate, setRotate] = useState(0);
  const [isRed, setIsRed] = useState(true);
  const [nseData, setNseData] = useState(null);
  const [bseData, setBseData] = useState(null);
  const [selectedStock, setSelectedStock] = useState("NSE");
  const [isRedInv, setIsRedInv] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create state to track the visibility of the absolute div
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isDivOpen, setDivOpen] = useState(false);

  // Function to toggle the visibility of the absolute div
  const toggleDivVisibility = () => {
    setDivVisibility(!isDivVisible);
    setRotate(!rotate);
    setIsRed(!isRed);
  };
  const toggleDivVisibility4Invest = () => {
    setDivOpen(!isDivOpen);
    setRotate2(!rotate2);
    setIsRedInv(!isRedInv);
  };

  const toggleColor = () => {
    setIsWorkButtonActive(!isWorkButtonActive);
    setIsInvesterButtonActive(!isInvesterButtonActive);
  };
  const toggleColorForInvester = () => {
    setIsInvestButtonActive(!isInvestButtonActive);
  };

  const fetchData = () => {
    // Make an HTTP request to fetch the NSE data
    axios
      .get("http://localhost:3001/nse-data")
      .then((response) => {
        setNseData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occurred");
        setLoading(false);
        console.error(err);
      });

    axios
      .get("http://localhost:3001/bse-data")
      .then((response) => {
        setBseData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occurred");
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleStockSelectChange = (e) => {
    setSelectedStock(e.target.value);
  };
 
  const location = useLocation();
  const rotateClass = rotate ? 'customRotate' : '';
  const rotateClass2 = rotate2 ? 'customRotate' : '';
  const workClass = isRed ? 'text-foot-blue ' : 'text-box-red';
  const InvClass = isRedInv ? 'text-foot-blue ' : 'text-box-red';
  const linkStyle = {
    color: isWorkButtonActive ? '#DA0001' : '#0C013D',
    fontWeight: isWorkButtonActive ? "800" : "",

  };
  const linkStyleForInvester = {
    color: isInvestButtonActive ? '#DA0001' : '#0C013D',
    fontWeight: isInvestButtonActive ? "800" : "",

  };

  return (
    <div className="navbar-bg fixed inset-0 lg:h-[88px] h-[70px] sm:h-[90px] flex items-center justify-between z-50 2xl:px-[40px] shadow-lg">
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
            className="lg:hidden z-50 text-slate-900 ml-4"
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
          <div className="flex items-center space-x-4">
            <select
              className="inline-block lg:hidden outline-none text-white ml-4 py-1 px-3 font-barlow font-semibold bse-bg"
              value={selectedStock}
              onChange={handleStockSelectChange}
            >
              <option value="BSE">BSE</option>
              <option value="NSE">NSE</option>
            </select>
          </div>
          {selectedStock === "BSE" && bseData && (
            <p className="text-slate-900 block text-[16px] font-Barlow font-bold lg:hidden animate-pulse">
              <span>₹ {" "}</span>
              {bseData}
            </p>
          )}
          {selectedStock === "NSE" && nseData && (
            <p className="text-slate-900 block text-[16px] font-Barlow font-bold lg:hidden animate-pulse">
              <span>₹ {" "}</span>
              {nseData}
            </p>
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col lg:py-20 py-[7rem] px-5 lg:text-[24px] text-lg space-y-4 fixed h-screen inset-0 bg-white overflow-y-auto"
            : "hidden lg:flex "
        } flex lg:items-center font-Barlow lg:space-x-7 mt-0 sm:px-10 px-5 lg:px-20 z-1 `}
      >
        <Link
          //  to="/"
          className="text-foot-blue lg:block hidden font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4 border-neutral-500"
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
          // const linkClasses = `text-foot-blue  lg:hidden block font-bold hover:opacity-75 ${isDivVisible ? 'active2' : ''}`;
          className={`text-slate-900 lg:hidden block font-bold  ${
            isDivVisible ? "active2" : ""
          }`}
          onClick={() => {
            // setIsMenuOpen(false);
            setIsWorkButtonActive(!isWorkButtonActive); // Toggle the state
          }}
        >
          <div // to="/work"
            className=""
          >
            <div
              className={`lg:border-none lg:pb-0 border-b pb-4 border-neutral-500 w-[100%] ${workClass}`}
            >
              WORK
              <img
                src={down}
                alt=""
                className={` float-right top-0 right-0  text-slate-900 p-2 rounded-full cursor-pointer ${rotateClass} `}
                onClick={toggleDivVisibility}
              />
              {/*<button className=" float-right top-0 right-0 bg-blue-500 text-foot-blue  p-2 rounded-full cursor-pointer "
        onClick={toggleDivVisibility}
          >
            o        
        </button>*/}
            </div>

            <div
              className={`overflow-hidden flex flex-col customTransition  ${
                isDivVisible
                  ? "h-auto opacity-100 translate-y-[0%] "
                  : "h-0 opacity-0 translate-y-[-20%]"
              } bg-transparent rounded-lg`}
            >
              <Link
                to="/industries"
                className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-foot-blue   py-4 ml-14 border-neutral-500"
              >
                industries
              </Link>
              <Link
                to="/products"
                className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-foot-blue   py-4 ml-14 border-neutral-500"
              >
                products
              </Link>
              <Link
                to="/solutions"
                className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  pl-14 py-4 border-neutral-500"
              >
                solutions
              </Link>
            </div>
          </div>
        </Link>

        <Link
          to="/about"
          className={`text-foot-blue  font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          to="/brands"
          className={`text-foot-blue  font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${
            location.pathname === "/brands" ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          BRANDS
        </Link>
        <Link
          to="/media"
          className={`text-foot-blue  font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${
            location.pathname === "/media" ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          MEDIA
        </Link>
        <Link
          // to="/investors"
          className="text-foot-blue  font-bold hover:opacity-75 lg:block hidden"
          style={linkStyleForInvester}
          onClick={() => {
            setIsMenuOpen(false);
            toggleColorForInvester(); // Toggle the color
          }}
        >
          INVESTORS
        </Link>

        <div // to="/work"
          className="lg:hidden">
          <div className={`lg:border-none lg:pb-0 border-b pb-4 border-neutral-500 w-[100%] font-bold ${InvClass}`}>
          INVESTORS
            <img src={down} alt="" className={` float-right top-0 right-0  text-foot-blue  p-2 rounded-full cursor-pointer ${rotateClass2} `} onClick={toggleDivVisibility4Invest} />
          </div>



          <div
            className={`overflow-hidden flex flex-col customTransition  ${isDivOpen ? 'h-auto opacity-100 translate-y-[0%] ' : 'h-0 opacity-0 translate-y-[-20%]'} bg-transparent rounded-lg font-bold`}
          >
            <Link to="/investors/overview" className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-foot-blue   py-4 ml-14 border-neutral-500">OVERVIEW</Link>
            <Link to="/investors/financial-reports" className="lg:border-none lg:pb-0 border-b pb-4 uppercase text-foot-blue   py-4 ml-14 border-neutral-500">FINANCIAL REPORTS</Link>
            <Link to="/investors/shareholders-information" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  py-4 ml-14 border-neutral-500">SHAREHOLDERS INFORMATION</Link>
            <Link to="/investors/chairman-communication" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  py-4 ml-14 border-neutral-500">CHAIRMAI’S COMMUNICATION</Link>
            <Link to="/investors/disclosures" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  py-4 ml-14 border-neutral-500">DISCLOSURES</Link>
            <Link to="/investors/notices" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  py-4 ml-14 border-neutral-500">NOTICES</Link>
            <Link to="/investors/contact-and-grievance" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  py-4 ml-14 border-neutral-500">CONTACTS</Link>
            <Link to="/investors/downloads" className="lg:border-none  lg:pb-0 border-b pb-4 uppercase text-foot-blue  pl-14 py-4 border-neutral-500">DOWNLOADS</Link>
          </div>
        </div>


        <Link
          to="/contact"
          className={`text-foot-blue font-bold hover:opacity-75 lg:border-none lg:pb-0 border-b pb-4  border-neutral-500 ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
        <div className="flex items-center space-x-4">
          <select
            className="lg:inline-block hidden outline-none text-white  ml-4 py-1 px-3 font-barlow font-semibold select-box bse-bg"
            value={selectedStock}
            onChange={handleStockSelectChange}
          >
            <option value="BSE">BSE</option>
            <option value="NSE">NSE</option>
          </select>
        </div>
        {selectedStock === "BSE" && bseData && (
          <p className="text-foot-blue  hidden font-bold lg:block animate-pulse">
            <span className="mr-1">₹</span>
            {bseData}
          </p>
        )}
        {selectedStock === "NSE" && nseData && (
          <p className="text-foot-blue  hidden font-bold lg:block animate-pulse">
            <span className="mr-1">₹</span>
            {nseData}
          </p>
        )}
      </div>
      {isWorkButtonActive && <SlideInBar />}{" "}
      {isInvestButtonActive && <SlideinBarInvester />}{" "}
      {/* Display the HorizontalBar when active */}
    </div>
  );
};

export default Navbar;
