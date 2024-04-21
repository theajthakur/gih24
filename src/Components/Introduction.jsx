import React from "react";
import Button from "../UI elements/Button";
import { Link } from "react-scroll";
import laptopImage from "../Assets/Images/laptopimage.png";

const Introduction = () => {
  return (
    <div
      className="flex justify-center items-center gap-10 min-h-screen d-[900px]"
      id="intro"
    >
      <div className="flex flex-col justify-center ">
        <div className="font-mono text-primary text-md">
          Embrace the challenge
        </div>
        <div className=" font-[700] md:text-[70px] text-[40px] font-sans text-lightest_slate">
          <p>Innohacks 3.0</p>
          <p className="text-sm text-slate">Hack n' Innovate</p>
        </div>
        <div className=" font-[20px] text-lightest_slate max-w-[580px] mb-8">
          Unleash your creativity for{" "}
          <span className="text-primary">24-Hour</span>! Join us on{" "}
          <span className="text-primary">April 28th</span>
          for a nationwide hackathon alongside hundreds of other{" "}
          <span className="text-primary">student innovators</span>. Build,
          learn, and connect - are you in?
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <Button title="Register!" />
        </Link>
      </div>
      <img
        src={laptopImage}
        alt="Hackathon"
        className="rounded-full h-80 w-80 scale-x-[-1] opacity-75 hover:opacity-100 duration-300"
      />
    </div>
  );
};

export default Introduction;
