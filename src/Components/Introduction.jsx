import React from "react";
import Button from "../UI elements/Button";
import { Link } from "react-scroll";
import laptopImage from "../Assets/Images/laptopimage.png";
import gihImage from "../Assets/Images/gih.png";

const Introduction = () => {
  return (
    <div
      className="pt-10 flex flex-col lg:flex-row justify-center items-center gap-10 min-h-screen "
      id="introduction"
    >
      <div className="flex flex-col justify-center glassmorphism ">
        <div className="font-mono text-primary text-2xl">
          Embrace the challenge
        </div>
        <div className=" font-[700] md:text-[70px] text-[40px] font-sans text-lightest_slate mb-8">
          <p>Galgotias International Hackathon!</p>
          <p className="md:text-[30px] text-[20px] text-slate">Hack n' Innovate</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-24 justify-center items-center">
          <div className=" md:text-[30px] text-[20px] text-lightest_slate max-w-[720px]">
            Take on the challenge, Unleash your creativity for
            <span className="text-primary"> 36 hours</span> of non-stop innovation! Get ready to join hundreds of student innovators from across the world on
            <span className="text-primary"> May 11-12 </span>
            for an exhilarating hackathon experience. Build cutting-edge projects, learn from
            <span className="text-primary"> industry experts</span>, and connect with
            <span className="text-primary"> industry experts</span>.
            Are you ready to make your mark?
          </div>
          <img
            src={gihImage}
            alt="Hackathon"
            className=" md:h-96 h-52 duration-300 mb-5"
          />
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="self-center my-2"
        >
          <Button title="Register!" styles={'w-84 text-white text-[32px]'} />
        </Link>

      </div>

    </div>
  );
};

export default Introduction;
