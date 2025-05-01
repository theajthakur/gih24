import React from "react";
import Heading from "../UI elements/Heading";

export default function Schedule() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[40vh]  text-off_white" id="schedule">
      <Heading index={"03"} title={"Schedule"} />

      <p className="text-lightest_slate">
      </p>
<div className="container glassmorphism">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 "
          >
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                className="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">10 MAY</h3>
                <p className="leading-tight text-justify">
                  PRIZE DISTRIBUTION 
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="glassmorphism text-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">9 MAY</h3>
                <p className="leading-tight text-justify">
                  ROUND 2 STARTS (EVENING)
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                className="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">9 MAY</h3>
                <p className="leading-tight text-justify">
                  ROUND 1 STARTS (MORNING)
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="glassmorphism col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">8 MAY</h3>
                <p className="leading-tight text-justify">
                  PPT SUBMISSION DEADLINE
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                className="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">8 MAY</h3>
                <p className="leading-tight text-justify">
                  REGISTRATIONS ENDS
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
  );
}
