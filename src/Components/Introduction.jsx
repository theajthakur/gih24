import React, { useState } from "react";
import Button from "../UI elements/Button";
import { Link } from "react-scroll";
import laptopImage from "../Assets/Images/laptopimage.png";
import gihImage from "../Assets/Images/gih.png";

const Introduction = () => {
  const [bulbToggle, setBulbToggle] = useState(false)
  return (
    <div
      className="pt-15 md:px-10 flex flex-col lg:flex-row justify-center items-center min-h-screen "
      id="introduction"
    >
      <div className="flex flex-col justify-center glassmorphism ">
        <div className="font-mono text-primary text-lg mt-14">
          Embrace the challenge
        </div>
        <div className=" font-[700] md:text-[60px] text-[40px] font-sans text-lightest_slate">
          <p>Galgotias International Hackathon!</p>
          <p className="md:text-[24px] 2xl:text-[28px] text-[20px] text-slate">Hack n' Innovate</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-24 justify-center items-center">
          <div className=" md:text-[24px] 2xl:text-[28px] text-[20px] text-lightest_slate max-w-[720px]">
            Take on the challenge, Unleash your creativity for
            <span className="text-primary"> 36 hours</span> of non-stop innovation! Get ready to join hundreds of student innovators from across the world on
            <span className="text-primary"> May 25-26  </span>
            for an exhilarating hackathon experience. Build cutting-edge projects, learn and connect with
            <span className="text-primary"> industry experts</span>.
            Are you ready to make your mark?
          </div>
          <img
            src={gihImage}
            alt="Hackathon"
            className={`mb-8 md:h-96 h-52 duration-500 hover:scale-110`}
            onClick={() => setBulbToggle(true)}
          />
          {/* {isHovered && <p className={` text-primary text-2xl font-bold bg-white w-fit p-5 ${!bulbToggle && `opacity-25`} rounded-lg`}>Turn on the bulb!</p>} */}
        </div>

      </div>

    </div >
  );
};

export default Introduction;
