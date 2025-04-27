import React from "react";
import Heading from "../UI elements/Heading";
import Button from "../UI elements/Button";

const CommunityPartners = () => {
  const items = [
    { id: 1, imgSrc: "/images/blockchain.png", title: "Blockchain/Web3" },
    { id: 2, imgSrc: "/images/blockchain.png", title: "Open Innovation" },
    { id: 3, imgSrc: "/images/blockchain.png", title: "Ar/Vr" },
    { id: 4, imgSrc: "/images/blockchain.png", title: "Robotics" },
    { id: 5, imgSrc: "/images/blockchain.png", title: "Blockchaing" },
    { id: 6, imgSrc: "/images/blockchain.png", title: "Security" },
    { id: 7, imgSrc: "/images/blockchain.png", title: "Web" },
    { id: 8, imgSrc: "/images/blockchain.png", title: "IOT" },
    { id: 9, imgSrc: "/images/blockchain.png", title: "Ai/Ml" },
  ];
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl my-10 glassmorphism"
      id="community"
    >
      <Heading title={"Community Partners"} />

      {/* <div className="grid w-full grid-cols-2 gap-6 my-6 rounded-md place-self-center lg:grid-cols-3"> */}
      {/* {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center w-full gap-3 p-6 overflow-hidden transition-all duration-700 border border-transparent rounded-full cursor-pointer select-none hover:scale-105 bg-neutral-700 h-52 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:border-primary"
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

      <div className="flex flex-col gap-5 mt-5 items-center my-5">
        <div className="font-mono text-md md:text-3xl w-full text-center">
          Looking for Community Partners
        </div>
        <a href="https://forms.gle/xySGofehy6ygcVRt7" target="_blank">
          <Button title="Become Community Partner" styles={'text-sm'} />
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CommunityPartners;
