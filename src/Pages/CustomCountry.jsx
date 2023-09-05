import React, { useState, useRef } from 'react';
import { down } from '../assets/images'

// import '../styles/tailwind.css'; // Make sure to include your Tailwind CSS file

const CustomSelect = () => {
  const options = [
    "AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ANTIGUA AND BARBUDA",
    "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN",
    "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BHUTAN", "BOLIVIA",
    "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BRAZIL", "BRUNEI", "BULGARIA", "BURKINA FASO",
    "BURUNDI", "CABO VERDE", "CAMBODIA", "CAMEROON", "CANADA", "CENTRAL AFRICAN REPUBLIC",
    "CHAD", "CHILE", "CHINA", "COLOMBIA", "COMOROS", "CONGO", "COSTA RICA", "CROATIA",
    "CUBA", "CYPRUS", "CZECH REPUBLIC (CZECHIA)", "CÔTE D'IVOIRE", "DENMARK", "DJIBOUTI",
    "DOMINICA", "DOMINICAN REPUBLIC", "DR CONGO", "ECUADOR", "EGYPT", "EL SALVADOR",
    "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ESWATINI", "ETHIOPIA", "FIJI", "FINLAND",
    "FRANCE", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GREECE", "GRENADA",
    "GUATEMALA", "GUINEA", "GUINEA-BISSAU", "GUYANA", "HAITI", "HOLY SEE", "HONDURAS",
    "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL",
    "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KUWAIT",
    "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYA", "LIECHTENSTEIN",
    "LITHUANIA", "LUXEMBOURG", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI",
    "MALTA", "MARSHALL ISLANDS", "MAURITANIA", "MAURITIUS", "MEXICO", "MICRONESIA", "MOLDOVA",
    "MONACO", "MONGOLIA", "MONTENEGRO", "MOROCCO", "MOZAMBIQUE", "MYANMAR", "NAMIBIA",
    "NAURU", "NEPAL", "NETHERLANDS", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA",
    "NORTH KOREA", "NORTH MACEDONIA", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PANAMA",
    "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "POLAND", "PORTUGAL", "QATAR",
    "ROMANIA", "RUSSIA", "RWANDA", "SAINT KITTS & NEVIS", "SAINT LUCIA", "SAMOA",
    "SAN MARINO", "SAO TOME & PRINCIPE", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES",
    "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA",
    "SOUTH AFRICA", "SOUTH KOREA", "SOUTH SUDAN", "SPAIN", "SRI LANKA", "ST. VINCENT & GRENADINES",
    "STATE OF PALESTINE", "SUDAN", "SURINAME", "SWEDEN", "SWITZERLAND", "SYRIA", "TAJIKISTAN",
    "TANZANIA", "THAILAND", "TIMOR-LESTE", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA",
    "TURKEY", "TURKMENISTAN", "TUVALU", "UGANDA", "UKRAINE", "UNITED ARAB EMIRATES",
    "UNITED KINGDOM", "UNITED STATES", "URUGUAY", "UZBEKISTAN", "VANUATU", "VENEZUELA",
    "VIETNAM", "YEMEN", "ZAMBIA", "ZIMBABWE"
  ];
  
      const [selectedOption, setSelectedOption] = useState('COUNTRY');
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
            className={`flex items-center px-6 py-2 focus:outline-none w-full transition mt-2 ${
              isButtonClicked && (selectedOption === 'COUNTRY' || isDropdownOpen)
                ? 'bg-box-red text-white h-[50px] font-Barlow lg:text-[18px] text-[16px]'
                : 'border-[1px] border-black outline-none py-0 px-6 h-[50px] w-full text-[16px] font-Barlow text-black'
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
              className="absolute left-0 mt-0 bg-white border border-black shadow w-full z-20 overflow-x-hidden overflow-y-scroll h-[300px]"
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
    