import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

export const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const dropHandler = () => {
    setDrop(!drop);
  };

  return (
    <div className="bg-[#F4F4F4]">
      <div className="w-full max-w-[1440px] mx-auto justify-between h-[71px] flex items-center">
        <div className="relative w-[220px] h-full">
          <button
            onClick={dropHandler}
            className="bg-[#EDA415] w-full h-full px-[14px]  text-white font-medium text-[16px] flex items-center justify-between"
          >
            Browse categories
            <img
              src="/image/arrow-down.png"
              alt=""
              className={`transition-all ${
                drop ? "rotate-[-180deg]" : "rotate-0"
              }`}
            />
          </button>
          <div className={drop ? "block" : "hidden"}>
            <ul>
              <li>Cameras</li>
              <li>Laptops</li>
              <li>Phones</li>
              <li>Tablets</li>
            </ul>
          </div>
        </div>
        <ul className="flex text-[#3A3A3A] gap-10 font-medium text-[16px] flex-1 ml-[100px]">
          <li>Home</li>
          <li>Category</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About us</li>
        </ul>
        <p className="text-[#003F62] font-bold text-[16px] mr-[30px]">
          30 Days Free Return
        </p>
      </div>
    </div>
  );
};
