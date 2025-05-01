import React from "react";
import Heading from "../UI elements/Heading";

export default function Themes() {
  const items = [
    { id: 1, imgSrc: "/images/themeLogos/bc.png", title: "Blockchain /Web3" },
    { id: 2, imgSrc: "/images/themeLogos/oi.png", title: "Open Innovation" },
    { id: 3, imgSrc: "/images/themeLogos/vr.png", title: "Ar/Vr" },
    { id: 4, imgSrc: "/images/themeLogos/rob.png", title: "Robotics" },
    { id: 5, imgSrc: "/images/themeLogos/wd.png", title: "Web" },
    { id: 6, imgSrc: "/images/themeLogos/iot.png", title: "IOT" },
    { id: 7, imgSrc: "/images/themeLogos/ai.png", title: "AI/ML" },
    { id: 8, imgSrc: "/images/themeLogos/sec.png", title: "Security" },
    { id: 9, imgSrc: "/images/themeLogos/sc.png", title: "Smart City" },
    { id: 10, imgSrc: "/images/themeLogos/fin.png", title: "Fintech" },
    { id: 11, imgSrc: "/images/themeLogos/saas.png", title: "Saas" },
  ];
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh] glassmorphism "
      id="themes"
    >
      <Heading index={"02"} title={"Our Themes"} />

      <div className="grid w-full grid-cols-2 gap-6 my-6 rounded-md place-items-center place-self-center center lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="sm:py-32 flex flex-col items-center justify-center w-full gap-3 glassmorphism  m-4 overflow-hidden transition-all duration-700 border border-transparent rounded-md cursor-default select-none hover:scale-105 glassmorphism h-52 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:border-primary"
          >
            <div>
              <img
                src={item.imgSrc}
                className="object-contain w-full h-32 lg:h-44 drop-shadow-lg"
              />
            </div>
            <p className="font-mono text-lg lg:text-xl font-bold text-center text-lightest_slate ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
