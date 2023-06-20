import React from "react";
import curatedservice1 from "./img/curatedservice1.png";
/* import curatedservice2 from "./img/curatedservice2.png"; */

const CuratedService = () => {
  return (
    <div className="bg-[#69C5FF]">
      <div className="flex items-center">
        <div className="w-full lg:w-2/3 relative pl-10 ">
          <h1 className="text-3xl font-bold text-white whitespace-normal ">
            Curated <br /> Services
          </h1>
          <button className="py-2 px-6 mt-4 bg-yellow-500 text-white rounded-lg ">
            View More
          </button>
          <h3 className="text-2xl font-bold text-white whitespace-normal py-2 ">
            Pan India <br /> Network
          </h3>
        </div>

        <div className="w-full  lg:w-1/3 relative">
          {/*  <img
            className="h-auto max-w-full absolute bottom-2 left-2 z-10"
            src={curatedservice2}
            alt="First"
          /> */}
          <img
            className="h-auto max-w-full relative z-0"
            src={curatedservice1}
            alt="Second"
          />
        </div>
      </div>
    </div>
  );
};

export default CuratedService;
