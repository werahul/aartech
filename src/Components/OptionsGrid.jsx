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
    "FUEL CELL",
    "SOLID WASTE TREATMENT",
    "CLIP FAULT CURRENT LIMITORS",
    "CONTROL RELAY PANELS",
    "BTS 2000",
    "AC & DC UPS",
    "FLYWHEEL",
    "SOLAR DESIGN & SERVICES",
    "LOAD LIMITING"
  ];

  const solutions = [
    "LOAD LIMITING",
    "RELIABLE ENGINE STARTING",
    "POWER BACKUP UNIT",
    "ENERGY STORAGE",
    "CUSTOMIZED PLASTIC CASE",
    "SOLID WASTE TREATMENT",
    "CONTROL & AUTOMATION",
    "PROCESS CONTINUITY",
    "FAULT CURRENT LIMITING",
    "UNINTERRUPTED POWER SUPPLY",
    "SOLAR DESIGN, ENGINEERING"
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
    if (selectedProduct === products[7] && index === 16) {
      return "";
    }
    if (selectedProduct === products[8] && index === 17) {
      return "";
    }
    if (selectedProduct === products[9] && index === 18) {
      return "";
    }
    if (selectedProduct === products[10] && index === 19) {
      return "";
    }
    if (selectedSolution === solutions[0] && index === 20) {
      return "";
    }
    if (selectedSolution === solutions[1] && index === 21) {
      return "";
    }
    if (selectedSolution === solutions[2] && index === 22) {
      return "";
    }
    if (selectedSolution === solutions[3] && index === 23) {
      return "";
    }
    if (selectedSolution === solutions[4] && index === 24) {
      return "";
    }
    if (selectedSolution === solutions[5] && index === 25) {
      return "";
    }
    if (selectedSolution === solutions[6] && index === 26) {
      return "";
    }
    if (selectedSolution === solutions[7] && index === 27) {
      return "";
    }
    if (selectedSolution === solutions[8] && index === 28) {
      return "";
    }
    if (selectedSolution === solutions[9] && index === 29) {
      return "";
    }
    if (selectedSolution === solutions[10] && index === 30) {
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
                  onClick={() => handleItemClick('D')}
                >
                  Defense & Exploration
                </li></Link>
            </ul>
          </div>
          <div className="">
            <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
            <ul>
              <ul>
                <Link to="/products/BTS-2000" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>BTS-2000</li>
                </Link>
                <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Kranking Ultracapacitors</li>
                </Link>
                <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Fuel Cell</li>
                </Link>
                <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Best Case</li>
                </Link>
                <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Solid Waste Treatment</li>
                </Link>
                <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Solar Design & Services</li>
                </Link>
                <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>FLYWHEEL</li>
                </Link>
                <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>AC & DC UPS</li>
                </Link>
                <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
                  <li className='our-tailored-class'>Load Checker</li>
                </Link>
              </ul>


            </ul>
          </div>
          <div className="">
            <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
            <ul>
              <Link to="/solutions/reliable-engine-starting">
                <li className='our-tailored-class'>Reliable Engine Starting</li>
              </Link>
              <Link to="/solutions/uninterrupted-power-supply">
                <li className='our-tailored-class'>Uninterrupted Power Supply</li>
              </Link>
              <Link to="/solutions/power-backup-unit">
                <li className='our-tailored-class'>Power Backup Unit</li>
              </Link>
              <Link to="/solutions/customised-plastic-case">
                <li className='our-tailored-class'>Customized Plastic Case</li>
              </Link>
              <Link to="/solutions/solid-waste-treatment">
                <li className='our-tailored-class'>Solid Waste Treatment</li>
              </Link>
              <Link to="/solutions/solar-design-engineering">
                <li className='our-tailored-class'>Solar Design Engineering</li>
              </Link>
              <Link to="/solutions/energy-storage">
                <li className='our-tailored-class'>Energy Storage</li>
              </Link>
              <Link to="/solutions/load-limiting">
                <li className='our-tailored-class'>Load Limiting</li>
              </Link>
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

      {/*------------------------------------------------------------------------------------------------------------------------*/}


      <div className={`section2 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(1)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/renewable-energy            ">
              <li className='our-tailored-class' onClick={() => handleItemClick('D')}>Renewable Energy</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/BTS-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
          </ul >


        </div >
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/fault-current-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fault Current Limiting</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
          </ul>


        </div>
      </div >


      <div className={`section3 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]  ${getSectionClass(2)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/non-renewable-energy">
              <li className='our-tailored-class' onClick={() => handleItemClick('D')}>Non-Renewable Energy</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/BTS-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/clip-fault-current-limiters" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>CLIP Fault Current Limiters</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment Products</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/fault-current-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fault Current Limiting</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customised Plastic Case</li>
            </Link>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>


        </div>
      </div>


      <div className={`section4 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(3)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/power-transmission-and-distribution
            " onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission & Distribution</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checkers</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/power-backup-unit" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Backup Unit</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section5 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(4)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/heavy-engineering-industries " onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/bts-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/clip-fault-current-limiters" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>CLIP Fault Current Limiters</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/fault-current-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fault Current Limiting</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>


        </div>
      </div>

      <div className={`section6 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(5)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/health-care    " onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/bts-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
            <Link to="/solutions/power-backup-unit" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Backup Unit</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section7 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(6)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/it-and-Telecom  " onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT & Telecom</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="/products/bts-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
            <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/power-backup-unit" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Backup Unit</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
          </ul>

        </div>
      </div>

      <div className={`section8 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(7)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment Products</li>
            </Link>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Best Case</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>


        </div>
      </div >


      <div className={`section9 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(8)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Industry</p>
          <ul>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>

        </div>

        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold'>Related Products</p>
          <ul>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Bestcase</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
            <Link to="/solutions/power-backup-unit" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Backup Unit</li>
            </Link>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>



        </div>
      </div >









      {/*FOR PRODUCT DATA*/}


      <div className={`section10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(9)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section11 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(10)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Bestcase</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
          </ul>


        </div>
      </div>

      <div className={`section12 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(11)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class' onClick={() => handleItemClick('D')}>Customized Plastic Case</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className={`section13 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(12)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
          </ul>

        </div>
      </div>

      <div className={`section14 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(13)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/clip-fault-current-limiters" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>CLIP Fault Current Limitors</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/fault-current-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fault Current Limiting</li>
            </Link>
          </ul>

        </div>
      </div>

      <div className={`section15 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(14)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(15)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/BTS-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
          </ul>


        </div>
      </div >
      {/*<div className={`section15 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(15)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defence & Exploration</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non- Renewable Energy</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
          </ul>

        </div>
        </div>*/}

      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(16)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
          </ul>


        </div>
      </div >
      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(17)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Energy Storage</li>
            </Link>
          </ul>


        </div>
      </div >
      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(18)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
          </ul>


        </div>
      </div >
      <div className={`section16 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(19)}`}>
        <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
        <div className="">
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Product</p>
          <ul>
            <Link to="/products/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red  uppercase font-Barlow font-bold'>Related Solutions</p>
          <ul>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
          </ul>


        </div>
      </div >




      {/*Solution-Start */}


      <div className={`section17 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(20)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Soultion</p>
          <ul>
            <Link to="/products/load-checker" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Checker</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/load-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Load Limiting</li>
            </Link>
          </ul>


        </div>
      </div>

      <div className={`section18 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(21)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/kranking-ultracapacitors" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Kranking Ultracapacitors</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/reliable-engine-starting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Reliable Engine Starting</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section19 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(22)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/fuel-cell" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fuel Cell</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/power-backup-unit" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Backup Unit</li>
            </Link>
          </ul>
        </div>
      </div >

      <div className={`section20 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(23)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/flywheel" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>FLYWHEEL</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/energy-storage" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>ENERGY STORAGE</li>
            </Link>
          </ul>


        </div>
      </div>

      <div className={`section21 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(24)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission and Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/best-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Bestcase</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/customised-plastic-case" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Customized Plastic Case</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section22 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(25)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/solid-waste-treatment" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solid Waste Treatment</li>
            </Link>
          </ul>


        </div>
      </div>

      <div className={`section23 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(26)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/power-transmission-and-distribution" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Power Transmission & Distribution</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT & Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/control-relay-panels" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control Relay Panels</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/control-and-automation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Control & Automation</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section24 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(27)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/BTS-2000" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>BTS 2000</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/process-continuity" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Process Continuity</li>
            </Link>
          </ul>


        </div>
      </div >

      <div className={`section25 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(28)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/non-renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Non-Renewable Energy</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/clip-fault-current-limiters" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>CLIP Fault Current Limiters</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/fault-current-limiting" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Fault Current Limiting</li>
            </Link>
          </ul>


        </div>
      </div >
      <div className={`section25 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(29)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
            <Link to="/industries/transportation" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Transportation</li>
            </Link>
            <Link to="/industries/waste-management" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Waste Management</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/ac-and-dc" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>AC & DC UPS</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/uninterrupted-power-supply" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Uninterrupted Power Supply</li>
            </Link>
          </ul>


        </div>
      </div>
      <div className={`section25 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[29px]   ${getSectionClass(30)}`}>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Industries</p>
          <ul>
            <Link to="/industries/defence-and-exploration" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Defense & Exploration</li>
            </Link>
            <Link to="/industries/renewable-energy" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Renewable Energy</li>
            </Link>
            <Link to="/industries/heavy-engineering-industries" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Heavy Engineering Industries</li>
            </Link>
            <Link to="/industries/health-care" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Healthcare</li>
            </Link>
            <Link to="/industries/it-and-telecom" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>IT and Telecom</li>
            </Link>
          </ul>

        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Related Products</p>
          <ul>
            <Link to="/products/solar-design-and-services" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design & Services</li>
            </Link>
          </ul>


        </div>
        <div className="">
          <p className='lg:hidden block text-box-red uppercase font-Barlow font-bold mt-8'>Selected Soultion</p>
          <ul>
            <Link to="/solutions/solar-design-engineering" onClick={() => handleItemClick('D')}>
              <li className='our-tailored-class'>Solar Design, Engineering</li>
            </Link>
          </ul>


        </div>
      </div >




    </>
  )


}

export default OptionsGrid