import React, { useState } from 'react';
import { down } from '../../assets/images';

const Dropdown = ({ title, items, selected, onItemSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onItemSelected(item);
    setIsOpen(false); // Close the dropdown when an option is clicked
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="btn-dropdown">
        {selected || title} {/* Display selected value if available, otherwise display title */}
        <span className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}> <img src={down} alt="" /> </span>
      </button>
      {isOpen && (
        <div className="dropdown">
          {items && items.map((item, index) => (
            <div
              key={index}
              className={`item  ${selected === item ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
