import React, { useState } from "react";

const Accordion3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion lg:hidden ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title  text-slate-900 text-base font-bold font-Barlow uppercase tracking-wider mt-[15px]">
        Selection Guide
        </div>
        <hr />
        <div className="accordion-icon mt-[15px]">{isOpen ? "-" : "+"}</div>
      </div>
      <div className="accordion-content">
        <p className="text-black text-[18px] my-4 font-Barlow tracking-wider">
          BTS 2000 is tailored to each project's unique needs. Although some
          configurations may resemble others, it's crucial to design and
          integrate switchgear circuits to match specific bus transfer
          requirements. The product range on the right serves as a general
          reference, with variations per case. For personalised assistance,
          please email your specific requirements, Single Line Diagram (SLD),
          Specifications (if available), and Operational Philosophy to
          bts@aartechsolonics.com. We're here to provide the best
          recommendations.
        </p>

        {/* Add more list items as needed */}
      </div>
    </div>
  );
};

export default Accordion3;
