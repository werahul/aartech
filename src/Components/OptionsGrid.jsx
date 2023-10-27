import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const OptionsGrid = () => {

  const industries = [
    "DEFENSE & EXPLORATION",
    "RENEWABLE ENERGY",
    "NON-RENEWABLE ENERGY",
    "POWER TRANSMISSION & DISTRIBUTION",
    "HEAVY ENGINEERING INDUSTRIES",
    "HEALTHCARE",
    "IT & TELECOM",
    "WASTE MANAGEMENT",
    "TRANSPORTATION"
  ];

  const products = [
    "KRANKING ULTRACAPACITORS",
    "BESTCASE",
    "INCINERATOR",
    "WTC",
    "CLIP FAULT CURRENT LIMITORS",
    "CONTROL RELAY PANELS",
    "BTS 2000"
  ];

  const solutions = [
    "LOAD LIMITING",
    "RELIABLE ENGINE STARTING",
    "PULSE POWER",
    "ENERGY HARVESTING",
    "CUSTOMISED CASES",
    "SOLID WASTE TREATMENT",
    "CONTROL & AUTOMATION",
    "PROCESS CONTINUITY",
    "FAULT CURRENT LIMITING"
  ];


  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
    setSelectedProduct(""); // Reset selected product when industry changes
    setSelectedSolution("");
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
    setSelectedIndustry(""); // Reset selected industry when product changes
    setSelectedSolution("");

  };
  const handleSolutionChange = (event) => {
    setSelectedSolution(event.target.value);
    setSelectedIndustry(""); // Reset selected industry when product changes
    setSelectedProduct(""); // Reset selected industry when product changes
  };

  const [isRotated, setIsRotated] = useState(false);
  const [isRotatedInd, setIsRotatedInd] = useState(false);
  const [isRotatedSol, setIsRotatedSol] = useState(false);

  const handleDropdownClick = () => {
    setIsRotated(!isRotated);
  };
  const handleDropdownIndClick = () => {
    setIsRotatedInd(!isRotatedInd);
  };
  const handleDropdownSolClick = () => {
    setIsRotatedSol(!isRotatedSol);
  };

  const getSectionClass = (index) => {

    if (selectedProduct === products[0] && index === 9) {
      return "";
    }
    if (selectedProduct === products[1] && index === 10) {
      return "";
    }
    if (selectedProduct === products[2] && index === 11) {
      return "";
    }
    if (selectedProduct === products[3] && index === 12) {
      return "";
    }
    if (selectedProduct === products[4] && index === 13) {
      return "";
    }
    if (selectedProduct === products[5] && index === 14) {
      return "";
    }
    if (selectedProduct === products[6] && index === 15) {
      return "";
    }
    if (selectedSolution === solutions[0] && index === 16) {
      return "";
    }
    if (selectedSolution === solutions[1] && index === 17) {
      return "";
    }
    if (selectedSolution === solutions[2] && index === 18) {
      return "";
    }
    if (selectedSolution === solutions[3] && index === 19) {
      return "";
    }
    if (selectedSolution === solutions[4] && index === 20) {
      return "";
    }
    if (selectedSolution === solutions[5] && index === 21) {
      return "";
    }
    if (selectedSolution === solutions[6] && index === 22) {
      return "";
    }
    if (selectedSolution === solutions[7] && index === 23) {
      return "";
    }
    if (selectedSolution === solutions[8] && index === 24) {
      return "";
    }
    if (selectedProduct && index >= 9 && index <= 10) {
      return "hidden";
    }


    if (selectedIndustry === industries[index] && !selectedProduct) {
      return "";
    }

    if (selectedProduct === products[index] && selectedIndustry) {
      return "";
    }

    return "hidden";
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[29px] lg:space-y-0 space-y-4">
        <div className="select-industry">
          <select
            id="industry-select"
            className={`proClass border-black border  h-[50px] w-full lg:px-[39px] px-4 lg:text-lg text-base  font-bold text-box-red font-Barlow focus:outline-none ${isRotatedInd ? 'rotate-image' : ''} ${selectedIndustry ? 'selected bg-box-red text-white border-none' : 'text-black bg-white'}`}
            onChange={handleIndustryChange}
            onClick={handleDropdownIndClick}
            value={selectedIndustry}
          >
            <option value="" hidden>CHOOSE INDUSTRY</option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Product selection */}
        <div className="select-product">
          <select
            id="product-select"
            className={`proClass border-black border  h-[50px] w-full lg:px-[39px] px-4 lg:text-lg text-base  font-bold text-box-red font-Barlow focus:outline-none ${isRotated ? 'rotate-image' : ''} ${selectedProduct ? 'selected bg-box-red text-white border-none' : 'text-black bg-white'}`}
            onChange={handleProductChange}
            onClick={handleDropdownClick}
            value={selectedProduct}
          >
            <option value="" hidden>CHOOSE PRODUCT</option>
            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        {/* Solution selection */}
        <div className={`select-solution custom-select ${selectedSolution ? 'selected bg-box-red text-white ' : ''}`}>
          <select
            id="solution-select"
            className={`proClass border-black border  h-[50px] w-full lg:px-[39px] px-4 lg:text-lg text-base  font-bold leading-[18px] tracking-wider text-box-red font-Barlow focus:outline-none ${isRotatedSol ? 'rotate-image' : ''} ${selectedSolution ? 'selected bg-box-red text-white border-none' : 'text-black bg-white'}`}
            onChange={handleSolutionChange}
            onClick={handleDropdownSolClick}
            value={selectedSolution}

          >
            <option value="" hidden >
              CHOOSE SOLUTION
            </option>
            {solutions.map((solution, index) => (
              <option key={index} value={solution} className="custom-dropdown-option">
                {solution}
              </option>
            ))}
          </select>
        </div>
      </div>


      <div className="relative">
        <div className={`section1 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]  ${getSectionClass(0)}`}>
          <div className="">
            <ul>
              <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
              <Link to="/industries/defence-and-exploration">
                <li
                  className='border border-black py-3 lg:py-[6px] my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow'
                  onClick={() => handleItemClick('Defense & Exploration')}
                >
                  Defense & Exploration
                </li></Link>
            </ul>
          </div>
          <div className="">
            <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
            <ul>
              <Link to="/products/kranking-ultracapacitors">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base  font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' >Kranking Ultracapacitors</li></Link>
              <Link to="/products/best-case">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base  font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' >Bestcase</li></Link>
              <Link to="">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base  font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li></Link>
              <Link to="">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base  font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li></Link>

            </ul>
          </div>
          <div className="">
            <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
            <ul>
              <Link to="">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li></Link>
              <Link to="/solutions/reliable-engine-starting">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' >Reliable Engine Starting</li></Link>
              <Link to="">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li></Link>
              <Link to="">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Energy Harvesting</li></Link>
              <Link to="/solutions/customised-professional-case">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' >Customised Cases</li></Link>
              <Link to="/solutions/solid-waste-treatment">
                <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' >Solid Waste Treatment</li></Link>

            </ul>
          </div>
        </div>
        {/* Modal */}
        {selectedItem && (
          <div className="fixed re inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50" onClick={closeModal}>
            <div className="relative modal-content bg-white p-6 lg:h-[300px] lg:w-[50%] w-[90%] h-[263px] lg:py-[60px] py-10 lg:px-[66px] px-[33px]">
              <span className="close absolute lg:-top-6 top-0 right-2 text-gray-600 lg:text-[60px] text-[40px] cursor-pointer" onClick={closeModal}>
                &times;
              </span>
              <div className="w-[126px] font-antonio text-box-red lg:text-4xl text-[28px] font-normal lg:leading-9 leading-7 lg:mb-6 mb-5">Sorry!</div>
              <div className="font-Barlow text-neutral-800 lg:text-2xl text-[18px] font-normal lg:leading-[31.20px] leading-snug lg:mb-9 mb-4">The detailed page is currently under construction. For more information, please connect with us.</div>
              <div className="lg:w-[140px] w-[120px] h-[45px] p-3 lg:p-2 cursor-pointer border border-black justify-center items-start gap-4 inline-flex">
                <div className="text-black lg:lg:text-lg text-base  font-normal leading-[18px] font-Barlow">CONTACT US</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`section2 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(1)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/renewable-energy"></Link>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Bestcase</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>CLIP Fault Current Limitors</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Fault Current Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Energy Harvesting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Plastic Cases</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>


      <div className={`section3 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]  ${getSectionClass(2)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>CLIP Fault Current Limitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Best Case</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Fault Current Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>


      <div className={`section4 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(3)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Power Transmission & Distribution</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>

      <div className={`section5 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(4)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>CLIP Fault Current Limitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Best Case</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Fault Current Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Energy Harvesting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>

      <div className={`section6 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(5)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>

      <div className={`section7 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(6)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>IT & Telecom</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
          </ul>
        </div>
      </div>

      <div className={`section8 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(7)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Waste Management</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>


      <div className={`section9 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(8)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Bestcase</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
          </ul>
        </div>
      </div>









      {/*FOR PRODUCT DATA*/}


      <div className={`section10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(9)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>

          </ul>
        </div>
      </div>

      <div className={`section11 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(10)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>
              Non-renewable Energy
            </li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>
              Heavy Engineering Industries
            </li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Bestcase</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
          </ul>
        </div>
      </div>

      <div className={`section12 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(11)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Waste Management</li>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li>

          </ul>
        </div>
      </div>

      <div className={`section13 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(12)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Waste Management</li>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>

      <div className={`section14 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(13)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>CLIP Fault Current Limitors</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Fault Current Limiting</li>
          </ul>
        </div>
      </div>

      <div className={`section15 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(14)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Power Transmission & Distribution</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>IT & Telecom</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Waste Management</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
          </ul>
        </div>
      </div>

      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(15)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>IT & Telecom</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
          </ul>
        </div>
      </div>







      <div className={`section17 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(16)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>
        <div className="">

          <ul>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Load Limiting</li>
          </ul>
        </div>
      </div>

      <div className={`section18 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(17)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Kranking Ultracapacitors</li>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Reliable Engine Starting</li>
          </ul>
        </div>
      </div>

      <div className={`section19 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(18)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>

          </ul>
        </div>
        <div className="">
          <ul>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Pulse Power</li>
          </ul>
        </div>
      </div>

      <div className={`section20 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(19)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>

          </ul>
        </div>
        <div className="">
          <ul>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Energy Harvesting</li>
          </ul>
        </div>
      </div>

      <div className={`section21 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(20)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Bestcase</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Customised Cases</li>
          </ul>
        </div>
      </div>

      <div className={`section22 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(21)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Defense & Exploration</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Incinerator</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>WTC</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Solid Waste Treatment</li>
          </ul>
        </div>
      </div>

      <div className={`section23 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(22)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Power Transmission & Distribution</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>IT & Telecom</li>

            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Transportation</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control Relay Panels</li>

          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Control & Automation</li>
          </ul>
        </div>
      </div>

      <div className={`section24 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(23)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Healthcare</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>IT & Telecom</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>BTS 2000</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Process Continuity</li>
          </ul>
        </div>
      </div>

      <div className={`section25 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(24)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Non-Renewable Energy</li>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Heavy Engineering Industries</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>CLIP Fault Current Limitors</li>
          </ul>
        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <li className='border border-black py-3 lg:py-[6px]  my-5 h-[45px] text-black lg:text-lg text-base font-semibold leading-[18px] tracking-wider text-center uppercase font-Barlow' onClick={() => handleItemClick('Defense & Exploration')}>Fault Current Limiting</li>
          </ul>
        </div>
      </div>




    </>
  )


}

export default OptionsGrid