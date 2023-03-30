import React from "react";
import { HiOutlineTruck, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export const Header = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] flex justify-between items-center mx-auto text-[#292D32] text-[14px] h-[74px] font-light px-4">
        <p>Need help? Call us: (+98) 0234 5678 9012</p>
        <div className="flex w-[230px] justify-between ">
          <div className="flex justify-between items-center gap-2">
            <HiOutlineLocationMarker size={20} />
            <p>Our store</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <HiOutlineTruck size={20} />
            <p>Track your order</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#003F62]">
        <div className="w-full max-w-[1440px] mx-auto h-[100px] flex justify-between items-center px-6">
          <img className="pl-4" src="/image/logo.svg" alt="logo" />
          <div className="relative w-[450px] flex-1 ml-[95px] mr-[320px]">
            <input
              className="rounded-[20px] w-full my-6 py-4 mx-auto px-4"
              type="text"
              placeholder="Search any things"
            />
            <button className="absolute top-0 right-0 bg-[#EDA415] text-white font-bold  text-center rounded-[20px] my-6 py-4 px-9">
              Search
            </button>
          </div>
          <div className="text-white flex justify-between gap-5 items-center mr-[40px]">
            <div className="flex justify-between gap-2">
              <BiUser size={20} />
              <p>Sign in</p>
            </div>
            <div className="flex justify-between gap-1">
              <AiOutlineHeart size={20} />
              <div className="rounded-[50px] px-[5px] bg-[#EDA415] text-sm">
                0
              </div>
            </div>
            <div className="flex justify-between gap-1">
              <AiOutlineShoppingCart size={20} />
              <div className="rounded-[50px] px-[5px] bg-[#EDA415] text-sm">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
