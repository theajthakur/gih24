import React from "react";
import Button from "../UI elements/Button";
import { Link } from "react-scroll";
import laptopImage from "../Assets/Images/laptopimage.png";

const Introduction = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-10 min-h-screen"
      id="introduction"
    >
      <div className="flex flex-col justify-center ">
        <div className="font-mono text-primary text-md">
          Embrace the challenge
        </div>
        <div className=" font-[700] md:text-[50px] text-[30px] font-sans text-lightest_slate mb-4">
          <p>Galgotias International Hackathon!</p>
          <p className="text-sm text-slate">Hack n' Innovate</p>
        </div>
        <div className=" font-[20px] text-lightest_slate max-w-[580px] mb-8">
          Take on the challenge, Unleash your creativity for
          <span className="text-primary"> 36 hours</span> of non-stop innovation! Get ready to join hundreds of student innovators from across the world on
          <span className="text-primary"> May 11-12 </span>
          for an exhilarating hackathon experience. Build cutting-edge projects, learn from
          <span className="text-primary"> industry experts</span>, and connect with
          <span className="text-primary"> industry experts</span>.
          Are you ready to make your mark?
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
        className="rounded-full h-80 w-80 scale-x-[-1] duration-300"
      />
    </div>
  );
};

export default Introduction;
