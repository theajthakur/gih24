import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Heading from "../UI elements/Heading";

export default function CarouselComp() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[70vh] glassmorphism" id="gallery">
      <Heading title={"Past Edition"} index={"06"}/>
      <Carousel
        showStatus={false}
        showArrows={false}
        className="text-center rounded-md mt-16 p-4"
        autoFocus
        autoPlay
        emulateTouch
      >
        <div className="rounded-md">
          <img src="/images/carousel/1.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/2.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/3.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/4.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/5.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/6.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/7.jpeg" className="rounded-md" />
        </div>
        <div className="rounded-md">
          <img src="/images/carousel/8.jpeg" className="rounded-md" />
        </div>
      </Carousel>
    </div>
  );
}
