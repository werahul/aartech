import React, { useState } from "react";

const Accordion2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion  lg:hidden ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title  text-slate-900 text-base font-bold font-Barlow uppercase tracking-wider mt-[15px]">
          MAIN - TIE (2 BREAKER SCHEMES)
        </div>
        <hr />
        <div className="accordion-icon mt-[15px]">{isOpen ? "-" : "+"}</div>
      </div>
      <div className="accordion-content">
        <div className="text-black text-[16px] font-medium font-Barlow tracking-wider">
          <p>
            The 2-breaker scheme ensures a reliable power supply to a motor bus
            from two sources in scenarios like thermal power plants. A normal
            source powers the bus via the Main breaker, while an alternate
            source uses the tie breaker. Unit boards in power plants, supplying
            auxiliaries, can be fed by a Unit Auxiliary Transformer (UAT) or a
            station board.
          </p>

          <p className="mt-4 mb-4">
            During startup, the station board supplies power until the generator
            synchronizes, after which the unit board is connected to the UAT in
            a Station-to-Unit transfer. Unit-to-Station transfers occur
            automatically during various tripping conditions, ensuring
            continuous supply. Manual transfers are performed during planned
            shutdowns. The setup employs breaker-failure logic and backup
            measures like TIE-2 breaker to prevent dangerous back-feed
            conditions if primary breakers fail. This scheme ensures
            uninterrupted power supply and safeguards against potential failures
            in complex power systems. interconnects BUS I and BUS II, enabling
            various bus transfer scenarios based on the chosen power supply to
            the motor buses.
          </p>
        </div>

        {/* Add more list items as needed */}
      </div>
    </div>
  );
};

export default Accordion2;
