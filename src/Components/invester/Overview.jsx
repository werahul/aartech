import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SlideinBarInvester from "../../Pages/SlideinBarInvester";
import { main, cross } from "../../assets/invester";

function Popup({ name, designation, organization, description, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content mx-5 lg:mx-20 2xl:mx-[120px]">
        <div className="popup-close" onClick={onClose}>
          <img src={cross} alt="" />
        </div>
        <div className=" pt-10 lg:pt-0 flex">
          <div className="w-[300px] lg:w-[600px] h-auto bg-[#d9d9d9]"></div>
          <div className=" font-Barlow lg:px-[33px] px-5">
            <h3 className="font-bold text-[24px] lg:text-[28px]">{name}</h3>
            <p className="text-[16px]">
              {designation}, {organization}
            </p>
            <p className="font-Barlow pt-[28px] hidden lg:block text-[20px]">
              {description}
            </p>
          </div>
        </div>
        <p className="font-Barlow pt-[28px] lg:hidden block text-[16px] lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Overview() {
  const boardMembersData = [
    {
      name: "Name 1",
      designation: "Designation 1",
      organization: "Organization 1",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    // Add more board member data as needed
  ];

  const kmpMembersData = [
    {
      name: "Name 1",
      designation: "Designation 1",
      organization: "Organization 1",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    {
      name: "Name 2",
      designation: "Designation 2",
      organization: "Organization 2",
      description:
        "He is dedicated to shaping a brilliant future through innovation, & astute management. He holds a B.Tech. in Electrical Engineering from IIT Bombay ('95) and an MSEE in Power Systems & Power Electronics from the University of Minnesota, USA ('97). With over 25 years of international professional experience, he stands as a Senior Member of IEEE, USA.",
    },
    // Add more KMP data as needed
  ];

  const [boardMembers, setBoardMembers] = useState(
    Array(boardMembersData.length).fill(false)
  );
  const [kmpMembers, setKmpMembers] = useState(
    Array(kmpMembersData.length).fill(false)
  );

  const openPopup = (type, index) => {
    if (type === "board") {
      const newBoardMembers = [...boardMembers];
      newBoardMembers[index] = true;
      setBoardMembers(newBoardMembers);
    } else if (type === "kmp") {
      const newKmpMembers = [...kmpMembers];
      newKmpMembers[index] = true;
      setKmpMembers(newKmpMembers);
    }
  };

  const cross = (type, index) => {
    if (type === "board") {
      const newBoardMembers = [...boardMembers];
      newBoardMembers[index] = false;
      setBoardMembers(newBoardMembers);
    } else if (type === "kmp") {
      const newKmpMembers = [...kmpMembers];
      newKmpMembers[index] = false;
      setKmpMembers(newKmpMembers);
    }
  };

  return (
    <div>
      <Navbar />
      <SlideinBarInvester/>
      <div className="pt-[69px] lg:pt-[10.5rem]">
        <div className="relative">
          <img
            src={main}
            alt="Overview Image"
            className="w-full object-cover lg:h-auto h-32"
          />
          <p className="font-antonio absolute bottom-10 px-5 text-[28px] lg:text-[36px] lg:px-20 2xl:px-[120px] text-white">
            Overview
          </p>
        </div>
        <div className="px-5 lg:px-20 2xl:px-[120px]">
          <p className="font-Barlow pt-7 pb-10 lg:pb-20 text-[16px] lg:text-2xl 2xl:text-[24px] lg:leading-7">
            In the world of control and automation, many different technologies
            are available today. Aartech meets various needs, from simple and
            affordable solutions for utility companies to complex and
            high-quality requirements for demanding customers. They use advanced
            ideas to make their customers happy. Demonstrating adeptness in
            technology, Aartech is proficient in harmonising the optimal
            assortment of components to craft tailored solutions tailored to
            specific requirements. Moreover, substantial value augmentation is
            achieved through solid-state and microprocessor-based embedded
            control products, which are meticulously crafted to address
            customised needs, distinguishing themselves from conventional
            integration through discrete electrical devices.
          </p>
          <div>
            <h2 className="font-antonio text-[28px] lg:text-[36px] pb-5 lg:pb-9">
              Board of directors
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[32px]">
              {boardMembersData.map((member, index) => (
                <div
                  key={index}
                  className="border border-black flex"
                  onClick={() => openPopup("board", index)}
                >
                  <div className="w-[140px] lg:w-[150px] lg:h-[150px] bg-[#d9d9d9]"></div>
                  <div className="pt-[13px] lg:pt-[26px] font-Barlow px-[24px] lg:px-[33px]">
                    <h3 className="font-bold text-[24px] lg:text-[28px]">
                      {member.name}
                    </h3>
                    <p className="whitespace-nowrap text-[16px]">
                      {member.designation}, {member.organization}
                    </p>
                    <button className="mt-[10px] lg:mt-[21px] mb-[5px] text-[#b80001] font-bold">
                      More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-20">
            <h2 className="font-antonio text-[28px] lg:text-[36px] pb-5 lg:pb-9">
              Key managerial personnel (KMP)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[32px]">
              {kmpMembersData.map((member, index) => (
                <div
                  key={index}
                  className="border border-black flex"
                  onClick={() => openPopup("kmp", index)}
                >
                  <div className="w-[140px] lg:w-[150px] lg:h-[150px] bg-[#d9d9d9]"></div>
                  <div className="pt-[13px] lg:pt-[26px] font-Barlow px-[24px] lg:px-[33px]">
                    <h3 className="font-bold text-[24px] lg:text-[28px]">
                      {member.name}
                    </h3>
                    <p className="whitespace-nowrap text-[16px]">
                      {member.designation}, {member.organization}
                    </p>
                    <button className="mt-[10px] lg:mt-[21px] mb-[5px] text-[#b80001] font-bold">
                      More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {boardMembers.map(
        (isOpen, index) =>
          isOpen && (
            <Popup
              key={`board-${index}`}
              name={boardMembersData[index].name}
              designation={boardMembersData[index].designation}
              organization={boardMembersData[index].organization}
              description={boardMembersData[index].description}
              onClose={() => cross("board", index)}
            />
          )
      )}
      {kmpMembers.map(
        (isOpen, index) =>
          isOpen && (
            <Popup
              key={`kmp-${index}`}
              name={kmpMembersData[index].name}
              designation={kmpMembersData[index].designation}
              organization={kmpMembersData[index].organization}
              description={kmpMembersData[index].description}
              onClose={() => cross("kmp", index)}
              className="z-50 fixed top-[50%] left-[20%]"
            />
          )
      )}
    </div>
  );
}

export default Overview;
