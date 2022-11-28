import * as React from "react";
import { useEffect } from "react";
import "../assets/css/homepage.css";
import { getDataPlayer } from "../Service/getDataPlayer";

export const Homepage = () => {
  const DataMock: string[] = ["1", "2", "3", "4", "5", "6"];

  useEffect(() => {
    getDataPlayer();
  }, []);

  // Function
  const RenderOverview = () => {
    return DataMock.map((value: any, i) => {
      return (
        <div
          className=" bg-[#ffffff] m-[1rem] md:w-3/12 p-[3rem] md:p-[4.7rem] rounded-md shadow-2xl text-[#282828]"
          key={i}
        >
          value
        </div>
      );
    });
  };

  return (
    <div className="homepage flex justify-center items-center w-full h-full min-h-screen">
      <section className="flex  flex-col md:p-0   md:flex-row w-full justify-around ">
        <div className=" bg-[#eeeeee]  m-[1rem]   md:w-7/12  m-3 md:m-0    p-6 rounded-md md:min-h-[20rem]">
          <div className="bg-[#d6d6d6] max-w-[12rem] p-[1rem] rounded-md ml-[-1.8rem] md:mt-[1rem] mb-2">
            <h1 className="text-2xl text-[#00000082]">Details</h1>
          </div>
          <div className="space-y-2 md:mt-[2rem] text-[#00000082] text-lg">
            <p>Real Name</p>
            <p>Player Name</p>
            <p>Asset</p>
          </div>
        </div>
        <div className="flex flex-col p-6 md:bg-[#eeeeee] w-full h-full   md:w-4/12 rounded-md min-h-[20rem]">
          <div className="md:bg-[#d6d6d6] text-center w-full md:max-w-[12rem] p-[1rem] rounded-md md:ml-[-1.8rem] mt-[1rem] mb-[-2rem] md:mb-2">
            <h1 className="text-2xl text-[#00000082]">Controls</h1>
          </div>
          <div className="flex justify-between mt-[2rem] mb-[2rem] text-[#00000082] space-x-4">
            <button className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] w-full py-2 px-10 rounded-md">
              SORT ASC
            </button>
            <button className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] w-full py-2 px-10 rounded-md">
              SORT DESC
            </button>
          </div>
          <button className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] text-[#00000082]  w-full py-2 px-10 rounded-md">
            SUBMIT
          </button>
        </div>
      </section>
      <section className="flex bg-[#eeeeee] mb-[3rem]  md:w-7/12 md:ml-[2vw] self-start justify-between rounded-md p-6 md:mt-[3rem]">
        <div className="overview">
          <h1 className="text-2xl text-[#00000082] mb-[2rem]">Overview</h1>

          <div className="flex flex-wrap justify-center ">
            {RenderOverview()}
          </div>
        </div>
      </section>
    </div>
  );
};
