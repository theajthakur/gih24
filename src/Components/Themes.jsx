import React from "react";
import Heading from "../UI elements/Heading";

export default function Themes() {
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
      className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh]"
      id="themes"
    >
      <Heading index={"03"} title={"Our Themes"} />

      <div className="grid w-full grid-cols-2 gap-6 my-6 rounded-md place-self-center lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center w-full gap-3 p-6 overflow-hidden transition-all duration-700 border border-transparent rounded-md cursor-default select-none hover:scale-105 glassmorphism h-52 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:border-primary"
          >
            <div>
              <img
                src={item.imgSrc}
                className="object-contain w-full h-20 lg:h-24 drop-shadow-lg"
              />
            </div>
            <p className="font-mono text-lg font-medium text-center text-lightest_slate">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
