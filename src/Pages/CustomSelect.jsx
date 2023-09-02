import React, { useState, useRef } from 'react';
import { down } from '../assets/images';

const CustomSelect = () => {
  const options = ["Mr.", "Ms.", "Mrs."];
  const [selectedOption, setSelectedOption] = useState('SALUTATION');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setIsButtonClicked(true);
  };

  const handleButtonClick = () => {
    if (isDropdownOpen) {
      setIsButtonClicked(false); // Set button color back to white when closing options
    } else {
      setIsButtonClicked(true);  // Set button color to red when opening options
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center px-6 py-2 focus:outline-none w-full transition mt-5  ${
          isButtonClicked && (selectedOption === 'SALUTATION' || isDropdownOpen)
            ? 'bg-red-700 text-white h-[50px] font-Barlow lg:text-[18px] text-[16px]'
            : 'border-[1px] border-black outline-none py-0 px-6 h-[50px] w-full text-[18px] font-Barlow text-black'
        }`}
        onClick={handleButtonClick}
      >
        {selectedOption}
        <svg
          xmlns={down}
          className={`ml-auto transform ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform duration-300 ease-in-out`}
          viewBox="0 0 20 20"
          fill="currentColor"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 mt-0 bg-white border border-black shadow w-full z-20 overflow-hidden"
          style={{ width: dropdownRef.current && dropdownRef.current.offsetWidth }}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <li
                className={`px-6 py-2 h-[50px] cursor-pointer hover:bg-slate-200 hover:bg-slate-300${
                  option === selectedOption ? 'bg-red-700 text-white' : 'bg-white text-black'
                }`}
                onClick={() => {
                  if (option !== selectedOption) {
                    handleOptionClick(option);
                  }
                }}
              >
                {option}
              </li>
              {index !== options.length - 1 && <hr className="border-gray-800 w-full " />}
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
