import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { main, cross, mainMobile } from '../../assets/invester'
import {
  amit,
  anil,
  arati,
  dabshish,
  kshi,
  pradeep,
  sohail,
  ssr,
  supriya,
  vivek,
  mAmit, mAnil ,mArati, mBlank, mKshitij, mSupriya
} from "../../assets/invester/overview";
import SlideinBarInvester from "../../Pages/SlideinBarInvester";

function Popup({
  name,
  designation,
  organization,
  description,
  onClose,
  image,
  image2
}) {
  return (
    <div className="popup">
      <div className="popup-content mx-5 lg:mx-20 2xl:mx-[120px]">
        <div className="popup-close" onClick={onClose}>
          <img src={cross} alt="" className="w-4 h-4 lg:w-6 lg:h-6"/>
        </div>
        <div className=" pt-10 lg:pt-0 flex">
          <div className=" h-auto ">
            <img
              src={image}
              alt=""
              className="h-auto w-[300px] lg:w-[600px] lg:h-[200px]"
            />
          </div>
          <div className=" font-Barlow lg:px-[33px] px-5">
            <h3 className="font-bold text-[20px] lg:text-[28px] uppercase tracking-wider">{name}</h3>
            <p className="text-[14px] lg:text-[16px] uppercase">
              {designation}
            </p>
            <p className="font-Barlow pt-[15px] hidden lg:block text-[20px]">
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
      name: "Amit Anil Raje",
      designation: "Chief Managing Director",
      organization: "Aartech Solonics Limited",
      description:
        "Amit Anil Raje is an engineer with a B.Tech. in Electrical Engineering and an M.S.E.E. in Power Systems and Power Electronics, leading as Chairman and Managing Director. With over 21 years at Aartech, he drives innovations in control, protection, automation, energy storage, and more, aligning with the company's objectives        ",
      image: amit,
      image2: mAmit
    },
    {
      name: "Anil Anant Raje",
      designation: "Director ",
      organization: "Aartech Solonics Limited",
      description:
        "Anil Anant Raje is a distinguished engineer and entrepreneur with over 40 years of experience in the power sector. He co-founded Aartech Solonics, pioneering import-substitute fast bus transfer systems. An alumnus of MACT, he's a leader in the field, known internationally for his expertise and contributions to the industry.",
      image: anil,
      image2: mAnil
    },
    {
      name: "Arati Nath",
      designation: "Chief Executive Officer ",
      organization: "Aartech Solonics Limited",
      description:
        "With over 15 years of financial expertise, Arati Nath, a PGDBA-Finance graduate from Welingkar Institute of Management, Mumbai, and a Commerce alumni of Pune University, has ascended from General Manager of Aarchtech Solonics Limited in 2015 to its CEO since May 2020, showcasing her impressive career journey.",
      image: arati,
      image2: mArati
    },
    {
      name: "Chaaya Anil Raje",
      designation: "Promoter",
      organization: "Aartech Solonics Limited",
      description:
        "Chhaya Anil Raje, a founding member of Aarchtech, brings over 42 years of experience as a qualified chemical scientist. She holds a Master's degree and has excelled academically. As the company's Promoter, Mrs Chhaya Raje has been instrumental in ensuring financial sustainability, prioritising even the smallest stakeholder's interests.",
        image2: mBlank,
    },
    {
      id: 1,
      name: "Kshitij Negi",
      designation: "independent & Non-executive Director",
      organization: "Aartech Solonics Limited",
      description:
        "Kshitij Negi, a visionary leader with 25+ years of experience, drives organisational transformations at KoeN Meta Consulting. As the founder, he guides clients through innovative Consulting and Facilitation. With a rich background in leadership development, he crafts unique experiences, leaving a profound impact on executives worldwide.",
      image: kshi,
      image2: mKshitij
    },
    {
      name: "P D Lowelekar",
      designation: "Non-executive Director",
      organization: "Aartech Solonics Limited",
      description:
        "Prashant Dattatrey Lowlekar, a seasoned Fellow Member of the Institute of Chartered Accountants of India, brings over 25 years of experience to his role as an Independent Director. His journey includes partnership at A.V Lowlekar and Co., internal auditing for the United Group, and continued success at 'MAMTANI AND LOWLEKAR' since 1993.",
        image2: mBlank
    },
    {
      id: 2,
      name: "Supriya Sunil Chitre",
      designation: "independent & Non-executive Director",
      organization: "Aartech Solonics Limited",
      description:
        "Squadron Leader Supriya Chitre (Retd), a dynamic educator and psychologist, dedicated a decade to the Indian Air Force, serving at the National Defense Academy. Post-retirement, she passionately imparts her wisdom to the youth, nurturing future leaders and inspiring them to contribute to the nation's growth.        ",
      image: supriya,
      image2: mSupriya
    },
    // Add more board member data as needed
  ];

  const kmpMembersData = [
    {
      name: "Vivek Attri",
      designation: "Chief Marketing Officer",
      organization: "Aartech Solonics",
      description:
        "Vivek Attri, our BTS leader in Parwanu, Himachal Pradesh, is a skilled manager and a strong advocate for teamwork. He sets ambitious targets and motivates his team to achieve outstanding results. Highly regarded by clients, colleagues, and visitors to the Parwanu Unit, he is at the forefront of international project development.        ",
      image: vivek,
    },
    {
      name: "Sohail Hussain",
      designation: "Chief Experience Officer",
      organization: "Aartech Solonics",
      description:
        "Sohail, a charismatic Bhopal native, adeptly juggles diverse roles, handling Fault Limiters, Control Panels, Relay settings, and Technical purchases. He also mentors aspiring engineers with an ever-present smile. Notably, he's played a pivotal role in independently commissioning numerous cutting-edge G & W USA Fault Limiters worldwide.",
      image: sohail,
    },
    {
      name: "Pradeep Narkhede",
      designation: "Chief Finance Officer",
      organization: "Aartech Solonics",
      description:
        "Pradeep Narkhede, a steadfast beacon in every crisis and our dependable champion, faces no shortage of challenges. Amidst the chaos, he adeptly oversees the F&A operations, ensuring all groups meet their obligations. A venerable Aartech Clan veteran of three decades, he stands as one of the most seasoned Aartechies.",
      image: pradeep,
    },
    {
      name: "Debashish Barik",
      designation: "Chief Revenue Officer",
      organization: "Aartech Solonics",
      description:
        "Debasis, a seasoned marketing expert in the bus transfer systems industry, boasts extensive domestic and international travel experience, often spanning months at a time. He's esteemed by both customers and colleagues for his no-nonsense approach to problem-solving and his role as a valuable resource for mentoring junior team members.",
      image: dabshish,
    },
    {
      name: "S S Raghuwanshi",
      designation: "Chief Operating Officer",
      organization: "Aartech Solonics",
      description:
        "Shailendra Raghuwanshi epitomises urban charm in sales. Exceptionally responsive to both customers and colleagues, he pursues business leads with unwavering dedication, demonstrating remarkable patience. His unobtrusive approach and single-minded focus characterise his interactions, making him a standout professional in the sales arena.        ",
      image: ssr,
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
      <SlideinBarInvester />
      <div className="pt-0">
        <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
          <img src={main} alt="" className='w-full lg:block hidden' />
          <img src={mainMobile} alt="" className='w-full lg:hidden block' />
          <div class="text-foot-blue absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Overview</div>
        </div>
        <div className="px-5 lg:px-20 2xl:px-[120px]">
          <p className="font-Barlow lg:pt-[56px] pt-4 lg:font-normal font-medium  pb-5 lg:pb-16 text-[16px] lg:text-2xl 2xl:text-[24px] lg:leading-7">
            Within Aartech, the strength of our leadership and management is paramount. Our Board of Directors comprises visionary individuals who bring a wealth of experience and strategic insight to the company. Their guidance ensures that Aartech remains at the forefront of innovation and customer satisfaction. For our valued investors, rest assured that Aartech is backed by a robust and capable team. Our management is adept at harmonizing the optimal assortment of components to craft tailored solutions. We consistently deliver results by focusing on cutting-edge technology and a commitment to meeting specific customer requirements.
          </p>
          <div>
            <h2 className="font-antonio text-[28px] lg:text-[36px] pb-4 lg:pb-9">
              Board of directors
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] lg:gap-y-[32px] gap-y-6">
              {boardMembersData.map((member, index) => (
                <div
                  key={index}
                  className="border border-black flex"
                  onClick={() => openPopup("board", index)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt=""
                      className=" w-full h-full object-cover min-w-[130px] lg:w-[150px] lg:h-[150px] lg:block hidden"
                    />
                    <img
                      src={member.image2}
                      alt=""
                      className=" w-full h-full object-cover min-w-[130px] lg:w-[150px] lg:h-[150px] lg:hidden block"
                    />
                  </div>
                  <div className="pt-[13px] lg:pt-[24px] font-Barlow px-[10px] lg:px-[33px]">
                    <h3 className="font-bold text-[18px] lg:text-[28px] uppercase tracking wider leading-6 lg:tracking-wider ">
                      {member.name}
                    </h3>
                    <p className=" text-[12px]  lg:text-[16px] uppercase lg:font-normal font-medium mt-2">
                      {member.designation}{/*{member.organization}*/}
                    </p>
                    <button className="mt-[30px]  lg:mt-[30px] mb-[5px] text-[#b80001] hover:text-black font-bold">
                      More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:py-16 py-6">
            <h2 className="font-antonio text-[26px] lg:text-[36px] pb-3 lg:pb-9">
              Key managerial personnel (KMP)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] lg:gap-y-[32px] gap-y-6">
              {kmpMembersData.map((member, index) => (
                <div
                  key={index}
                  className="border border-black flex"
                  onClick={() => openPopup("kmp", index)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt=""
                      className=" w-full h-full object-cover lg:w-[150px] lg:h-[150px] "
                    />
                  </div>
                  <div className="pt-[13px] lg:pt-[24px] font-Barlow px-[24px] lg:px-[33px]">
                    <h3 className="font-bold text-[18px] lg:text-[28px] uppercase tracking-wider lg:tracking-wider leading-5">
                      {member.name}
                    </h3>
                    <p className="whitespace-nowrap text-[12px] lg:text-[16px] uppercase lg:font-normal font-medium lg:mt-3 mt-1 ">
                      {member.designation}
                    </p>
                    <button className="mt-[20px] lg:mt-[30px] mb-[5px] text-[#b80001] hover:text-black font-bold">
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
              image={boardMembersData[index].image}
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
              image={kmpMembersData[index].image}
              onClose={() => cross("kmp", index)}
              className="z-50 fixed top-[50%] left-[20%]"
            />
          )
      )}
    </div>
  );
}

export default Overview;
