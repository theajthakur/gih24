import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Heading from "../UI elements/Heading";

export default function CarouselComp() {
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl min-h-[70vh] glassmorphism"
      id="prizes"
    >
      <Heading title={"Past Edition"} />
      <Carousel
        showStatus={false}
        showArrows={false}
        className="text-center rounded-md mt-16 p-4"
        autoFocus
        autoPlay
        emulateTouch
      >
        {/* <div className="rounded-md">
          <img src="/images/carousel4.jpeg" className="rounded-md" />
        </div> */}
        <div className="rounded-md">
          <img src="/images/carousel3.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel1.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel2.jpeg" className="rounded-md" />
        </div>
      </Carousel>
    </div>
  );
}
