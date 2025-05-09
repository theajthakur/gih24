import React from "react";
import Heading from "../UI elements/Heading";
import "../sliding.css";
import Slider from "./Slider";

const SponsersPartners = () => {
  const slides = [
    { source: "/images/Sponsers/byjus.png" },
    { source: "/images/Sponsers/pw.jpg" },
    { source: "/images/Sponsers/rb.jpg" },
    { source: "/images/Sponsers/royal_book.png" },
    { source: "/images/Sponsers/coding_ninjas.webp" },
    { source: "/images/Sponsers/GFG.png" },
    { source: "/images/Sponsers/unstop.jpg" },
    { source: "/images/Sponsers/zorko.jpg" },
  ];
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl my-10 glassmorphism"
      id="sponsors"
    >
      <Heading index={"04"} title={"Sponsors and Partners"} />

      <div className="font-mono text-md md:text-2xl mt-8 text-center">
        Our Valued Sponsors & Partners
      </div>
      <Slider slides={slides} />
    </div>
  );
};

export default SponsersPartners;
