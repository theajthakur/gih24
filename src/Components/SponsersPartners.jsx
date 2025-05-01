import React from "react";
import Heading from "../UI elements/Heading";
import Button from "../UI elements/Button";
import '../sliding.css'
import Slider from "./Slider";

const SponsersPartners = () => {
  const slides = [
    { source: "/images/Sponsers/ae.jpg" },
    { source: "/images/Sponsers/aw.jpg" },
    { source: "/images/Sponsers/byjus.png" },
    { source: "/images/Sponsers/cn.jpg" },
    { source: "/images/Sponsers/ee.png" },
    { source: "/images/Sponsers/idp.jpg" },
    { source: "/images/Sponsers/ieee.png" },
    { source: "/images/Sponsers/nis.jpg" },
    { source: "/images/Sponsers/pw.jpg" },
    { source: "/images/Sponsers/rb.jpg" },
    { source: "/images/Sponsers/w.jpg" },
  ];
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl my-10 glassmorphism"
      id="sponsors"
    >
      <Heading index={"04"} title={"Sponsors and Partners"} />
      {/* <div className="slider">
        <div className="slide-track">
          <img src="/images/Sponsers/images.png" className="slide" />
          <img src="/images/Sponsers/images.png" className="slide" />
        </div>
      </div> */}

      <div className="font-mono text-md md:text-2xl mt-8 text-center">
        Past Sponsors and Partners
      </div>
      <Slider slides={slides} />



      {/* <div className="grid w-full grid-cols-2 gap-6 my-6 rounded-md place-self-center lg:grid-cols-3"> */}
      {/* {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center w-full gap-3 p-6 overflow-hidden transition-all duration-700 border border-transparent rounded-md cursor-pointer select-none hover:scale-105 bg-neutral-700 h-52 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:border-primary"
                    >
                        <div>
                            <img
                                src={item.imgSrc}
                                className="object-contain w-full h-20 lg:h-24 drop-shadow-lg"
                            />
                        </div>
                        <p className="text-lg font-medium text-center text-primary">
                            {item.title}
                        </p>
                    </div>
                ))} */}


      <div className="flex flex-col gap-5 mt-5 items-center text-center">
        <div className="font-mono text-md md:text-3xl w-full">
          Looking for Sponsors and Partners
        </div>
        <a href="https://forms.gle/toWc8mR5kX5E5PX17" target="_blank"><Button title="Become Sponsor/ Partners" styles={'text-sm'} /></a>
      </div>
    </div>
    // </div>
  );
};

export default SponsersPartners;
