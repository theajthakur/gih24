import React from "react";
import Heading from "../UI elements/Heading";

export default function Prizes() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh]">
      <Heading index={"02"} title={"Prizes"} />
      <p className="text-lightest_slate font-mono text-3xl my-5">
        Prize pool worth <span>₹1.5Lakh</span>
      </p>
      <div className="flex items-center justify-center w-full rounded-md glassmorphism h-96 text-3xl font-mono">
        Coming soon.....
      </div>
    </div>
  );
}
