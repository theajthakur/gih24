import React from "react";
import Heading from "../UI elements/Heading";

export default function Prizes() {
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh] text-off_white"
      id="prizes"
    >
      <Heading index={"02"} title={"Our Patrons"} />
      <div className="grid w-full grid-cols-2">      <div className="text-center text-gray-400 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/ceo.jpg"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Dr. Dhruv Galgotia</a>
              </h3>
              <p>CEO, Galgotia Educational Institutions</p>
              </div>
              <div className="text-center text-gray-400 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/d.jpeg"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">MOHD. ASIM QADRI</a>
              </h3>
              <p>Director, GCET</p>
              </div></div>

    </div>
  );
}
