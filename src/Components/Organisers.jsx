import React from "react";
import Heading from "../UI elements/Heading";

export default function Organiser() {
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl mb-2 text-off_white"
      id="organiser"
    >
      <Heading index={"03"} title={"Our Organiser"} />
      <div className="grid w-full grid-cols-2">      <div className="text-center text-gray-400 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/team/24.png"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Ayush Ranjan</a>
              </h3>
              </div>
              </div>

    </div>
  );
}
