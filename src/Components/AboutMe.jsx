import React, { useState } from "react";
import Heading from "../UI elements/Heading";
import laptopImage from "../Assets/Images/laptopimage.png";

export const AboutMe = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className=" text-lightest_slate font-[20px]" id="about">
      <Heading index={"01"} title={"What is Innohacks ?"} />
      <div className="flex flex-col items-center gap-12 mt-8 lg:flex-row">
        <div className=" max-w-[540px]">
          <p>
            The largest code fest of{" "}
            <span className="text-primary">Delhi-NCR</span> is back! ⚡ Join
            this 24-Hour Hackathon to hustle and shine through 5 amazing tracks,
            Embark on an Odyssey to learn new technologies, seek guidance from
            experienced mentors and engrave your name on the boards of our
            esteemed Judges. Witness prodigious Speakers of the Nation live! ✨
            Not just that, win huge prizes and hampers by brainstorming and
            creating the best hack! Be ready to sail through an amazing night of
            fun, code and much more on 28th & 29th April! 💫
            {/* <ul className="grid grid-cols-2 gap-1 mt-4 font-mono">
              <li className="">
                <span className="text-primary">&#9656;</span> JavaScript (ES6+)
              </li>
              <li>
                <span className="text-primary">&#9656;</span> React
              </li>
              <li>
                <span className="text-primary">&#9656;</span> Next JS
              </li>
              <li>
                <span className="text-primary">&#9656;</span> React Native
              </li>
              <li>
                <span className="text-primary">&#9656;</span> Tailwind
              </li>
              <li>
                <span className="text-primary">&#9656;</span> Node.js
              </li>
              <li>
                <span className="text-primary">&#9656;</span> Mongo DB
              </li>
              <li>
                <span className="text-primary">&#9656;</span> TypeScript
              </li>
            </ul> */}
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
            class={` ${
              isHovered
                ? `translate-x-1 translate-y-1`
                : `translate-x-0 translate-y-0`
            } duration-300 absolute top-4 -right-4 -bottom-4 left-4 border-2 border-primary`}
          ></div>
          <div
            className={`${
              isHovered
                ? `-translate-x-1  -translate-y-1 `
                : `-translate-x-0 -translate-y-0`
            } duration-300`}
          >
            <img
              src={laptopImage}
              alt="Profile"
              className=" opacity-100  max-h-[300px] duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
