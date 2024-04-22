import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../UI elements/Heading";

export default function OrgTeam() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh]"
      id="team"
    >
      <Heading index={"06"} title={"Organizing Team"} />
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px my-6"
      >
        <div className="w-64 h-64 m-1 bg-red-500 rounded-md drop-shadow-md">
          Item 1
        </div>
        <div className="w-64 h-64 m-1 bg-red-500 rounded-md drop-shadow-md">
          Item 2
        </div>
        <div className="w-64 h-64 m-1 bg-red-500 rounded-md drop-shadow-md">
          Item 3
        </div>
        <div className="w-64 h-64 m-1 bg-red-500 rounded-md drop-shadow-md">
          Item 4
        </div>
      </Carousel>
    </div>
  );
}
