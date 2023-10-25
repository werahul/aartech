import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

const PersonCard = ({ name, role, description, image, linkedInIcon, link, Mimage, id }) => (
  
  <div className="border border-black  lg:flex " data-aos = "fade-up">
    <div className=" flex gap-6">
      <div className="h-[50px] lg:h-auto lg:w-[200%] w-[100px]   lg:overflow-visible mt-0 lg:mt-0 lg:mb-0 mb-12">
        <img src={image} alt="" className="w-full h-[100px] lg:block hidden  lg:h-full object-cover  " />
        <img src={Mimage} alt="" className="min-w-[100px] lg:hidden block h-[100px]  object-cover  " />
      </div>
      <div className=" flex flex-col mt-4">
        <div className="nameRoleLinkedin flex lg:flex-row flex-col justify-between ">
          <div className="">
            <div className="text-black text-xl 2xl:text-[22px] font-semibold leading-tight font-Barlow">
              {name}
            </div>
            <div className="text-black uppercase text-[13px] lg:text-[16px] font-semibold lg:font-normal leading-snug font-Barlow">
              {role}
            </div>
          </div>

          
          <a href={link} target="_blank"> <div className="">
            <img src={linkedInIcon} alt="" className={`${id ? "hidden" : ""} cursor-pointer h-6 w-6 mr-0 -ml-[2px] lg:mr-8` } />
          </div></a>
        </div>


        <div className="text-black text-sm lg:text-[18px] 2xl:text-[20px] w-full hidden lg:block leading-6 pr-4 font-Barlow py-3 font-bold lg:font-normal">
          {description}
        </div>
      </div>


    </div>

    <div className="text-black block lg:hidden leading-snug text-base font-Barlow px-4 py-4 font-medium">
      {description}
    </div>
  </div>
)

const PeopleGrid = ({ peopleData }) => (

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-9 gap-6" >
    {peopleData.map((person, index) => (
      <PersonCard key={index} {...person} />
    ))}
  </div>
);
export default PeopleGrid
