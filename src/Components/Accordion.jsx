import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion lg:hidden ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title  text-slate-900 text-base font-bold font-['Barlow'] uppercase tracking-wider mt-[43px]">
          MAIN - TIE - MAIN (3 BREAKER SCHEME)
        </div>
        <hr />
        <div className="accordion-icon mt-[43px]">{isOpen ? "-" : "+"}</div>
      </div>
      <div className="accordion-content">
        <div className="text-black text-[16px]  font-Barlow tracking-wider">
          <p>
            A tiebreaker facilitates the connection of two motor buses in a
            process industry setting, with two separate power sources, SOURCES I
            and II, capable of meeting the load for both Buses I & II off the
            grid. The SOURCE I transformer links to BUS I via the I/C-I incoming
            breaker, while the SOURCE II transformer connects to BUS II via the
            I/C-II incoming breaker. The TIE breaker interconnects BUS I and BUS
            II, enabling various bus transfer scenarios based on the chosen
            power supply to the motor buses.
          </p>
          <li>
            Normally closed TIE breaker: Both BUS I and BUS II are transferred
            between SOURCE I and SOURCE II as a single unit.{" "}
          </li>
          <li className="mb-4">
            Normally open TIE breaker: Each source independently supplies power
            to one motor bus. In case of source failure, the motor bus connected
            to the failed source is transferred to the alternate source through
            the TIE breaker.
          </li>
          <p className="mb-4">
            To ensure uninterrupted industrial processes, automatic transfers
            triggered by various source contingencies and source equipment
            failures are employed. Manual transfers are typically performed
            during planned start-ups and shutdowns. Breaker-failure logics are
            in place to prevent permanent paralleling of the motor buses.
          </p>
        </div>

        {/* Add more list items as needed */}
      </div>
    </div>
  );
};

export default Accordion;
