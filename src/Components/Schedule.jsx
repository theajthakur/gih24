import React from "react";
import Heading from "../UI elements/Heading";

export default function Schedule() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[40vh]  text-off_white" id="schedule">
      <Heading title={"Schedule"} />
      <p className="text-lightest_slate">
      </p>
<div class="container glassmorphism">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 "
          >
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                class="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">10 MAY</h3>
                <p class="leading-tight text-justify">
                  PRIZE DISTRIBUTION 
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="glassmorphism text-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">9 MAY</h3>
                <p class="leading-tight text-justify">
                  ROUND 2 STARTS (EVENING)
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                class="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">9 MAY</h3>
                <p class="leading-tight text-justify">
                  ROUND 1 STARTS (MORNING)
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="glassmorphism col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">8 MAY</h3>
                <p class="leading-tight text-justify">
                  PPT SUBMISSION DEADLINE
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
                ></div>
              </div>
              <div
                class="glassmorphism col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">8 MAY</h3>
                <p class="leading-tight text-justify">
                  REGISTRATIONS ENDS
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
  );
}
