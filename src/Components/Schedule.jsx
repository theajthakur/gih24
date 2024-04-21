import React from "react";
import Heading from "../UI elements/Heading";

export default function Schedule() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh]">
      <Heading index={"02"} title={"Prizes ?"} />
      <p className="text-lightest_slate">
        Prize pool worth <span>₹15Lakh</span>
      </p>
      <div className="flex items-center justify-center w-full rounded-md bg-neutral-700 h-96">
        Coming soon.....
      </div>
    </div>
  );
}
