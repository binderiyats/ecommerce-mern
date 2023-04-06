import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[390px]">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-between">
            <div className="ml-[100px]">
              <h1 className="text-[#1B5A7D] font-bold text-[43px] mt-[67px] w-[60%] mb-[19px]">
                Canon camera
              </h1>
              <div className="flex gap-5">
                <button className="bg-[#EDA415] text-white rounded-[20px] font-[600] py-4 px-8">
                  Shop now
                </button>
                <button className="border-2 border-[#316887] text-[#316887] rounded-[20px] font-[600] py-4 px-8">
                  Shop now
                </button>
              </div>
            </div>
            <div className="flex-1 ml-[500px]">
              <img src="/image/hero1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
