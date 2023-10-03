import React, { useState } from 'react';

const Accordion2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion  lg:hidden ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <div className="accordion-title  text-slate-900 text-base font-bold font-Barlow uppercase tracking-wider mt-[15px]">
                MAIN - TIE (2 BREAKER SCHEMES)
                </div>
                <hr />
                <div className="accordion-icon mt-[15px]">{isOpen ? '-' : '+'}</div>
            </div>
            <div className="accordion-content">
                <div className="text-black text-base font-medium font-Barlow  mt-4">Facilities : </div>
                <div className="text-black text-base font-medium font-Barlow ml-3">
                    <li>sddsd</li>
                    <li>dsfsdsf</li>
                    <li>fsdfdfds</li>
                    <li>sdfsdf</li>

                </div>

                <div className="text-black text-base font-medium font-Barlow  mt-4">Techniques & softwares : </div>
                <div className="text-black text-base font-medium font-Barlow ml-3">
                    <li>sddsd</li>
                    <li>dsfsdsf</li>
                    <li>fsdfdfds</li>
                    <li>sdfsdf</li>

                </div>

                <div className="text-black text-base font-medium font-Barlow  mt-4">Processes & standardisation : </div>
                <div className="text-black text-base font-medium font-Barlow ml-3 mb-4">
                    <li>sddsd</li>
                    <li>dsfsdsf</li>
                    <li>fsdfdfds</li>
                    <li>sdfsdf</li>

                </div>

                {/* Add more list items as needed */}

            </div>
        </div >
    );
};

export default Accordion2;
