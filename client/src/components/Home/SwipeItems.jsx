import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const SwipeItems = () => {
  return (
    <div className="w-full h-[147px] max-w-[1440px] mx-auto flex px-4">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" w-full h-full flex flex-row border border-gray-900 rounded-[20px] items-center px-5 gap-5 ">
            <img className="" width={154} src="/image/swipe1.svg" alt="" />
            <div>
              <h6 className="font-[600] text-2xl text-[#1B5A7D]">Speaker</h6>
              <p className="font-medium text-[#1B5A7D] text-xl">(6 items)</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full flex flex-row border border-gray-900 rounded-[20px] items-center px-5 gap-5 ">
            <img className="" width={122} src="/image/swipe2.svg" alt="" />
            <div>
              <h6 className="font-[600] text-xl text-[#1B5A7D]">
                Desktop & Laptop
              </h6>
              <p className="font-medium text-[#1B5A7D] text-xl">(6 items)</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full flex flex-row border border-gray-900 rounded-[20px] items-center px-5 gap-5 ">
            <img className="" width={122} src="/image/swipe3.png" alt="" />
            <div>
              <h6 className="font-[600] text-xl text-[#1B5A7D]">
                Desktop & Laptop
              </h6>
              <p className="font-medium text-[#1B5A7D] text-xl">(6 items)</p>
            </div>
          </div>{" "}
          */
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
