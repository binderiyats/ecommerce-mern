import React from "react";

export const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] flex mx-auto h-[390px]">
      <div className="ml-[100px]">
        <h1 className="text-[#1B5A7D] font-bold text-[43px] mt-[67px] w-[60%] mb-[19px]">
          Canon camera
        </h1>
        <div className="flex">
          <button className="bg-[#EDA415] text-white rounded-[20px] font-[600] py-4 px-8">
            Shop now
          </button>
          <button className="border-2 border-[#316887] text-[#316887] rounded-[20px] font-[600] py-4 px-8">
            Shop now
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
