import React, { useState } from "react";
import Heading from "../UI elements/Heading";
import gihImage from "../Assets/Images/gih.png";
import laptopImage from "../Assets/Images/laptopimage.png";


export const AboutMe = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className=" text-lightest_slate md:text-[30px] text-[20px] mt-10 sb:px-36" id="intro">
      <Heading index={"01"} title={"What is GIH ?"} />
      <div className="flex flex-col items-center gap-12 mt-8 lg:flex-row ">
        <div className=" md:text-[24px] 2xl:text-[28px] text-[20px] max-w-[720px] glassmorphism">
          <p>
            The biggest coding extravaganza in
            <span className="text-primary"> Delhi-NCR </span> is here! ⚡ Join our
            <span className="text-primary"> 36-Hour Hackathon </span> to showcase your skills.
            Explore new technologies, get expert guidance from mentors, and impress our esteemed judges. Experience inspiring talks by
            <span className="text-primary"> top speakers </span>
            from across the country live! ✨ But that's not all - win
            <span className="text-primary"> amazing prizes and goodies
            </span> by brainstorming and creating the ultimate hack! Get ready for an unforgettable night of fun, coding, and much more on
            <span className="text-primary"> 09 and 10 May </span>.
          </p>
        </div>
        <div
          onMouseEnter={() => {
            setisHovered(true);
          }}
          onMouseLeave={() => {
            setisHovered(false);
          }}
          className="relative"
        >
          <div
            className={` ${isHovered
              ? `translate-x-1 translate-y-1`
              : `translate-x-0 translate-y-0`
              } duration-300 absolute top-4 -right-4 -bottom-4 left-4 border-2 border-primary`}
          ></div>
          <div
            className={`${isHovered
              ? `-translate-x-1  -translate-y-1 `
              : `-translate-x-0 -translate-y-0`
              } duration-300`}
          >
            <img
              src={laptopImage}
              alt="gihImage"
              className=" opacity-100 min-w-[300px]  max-h-[340px] duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
