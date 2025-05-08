import React from 'react';
import {popularBrandData } from "../utils/objectData/populardata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function Brands() {
  return (
    <div>
      <h1 className="text-[2rem] text-2xl ml-3 my-8 font-bold text-gray-900">Popular Brand</h1>

      <div className="relative">

        <Swiper
          modules={[Navigation]}
          navigation={{clickable:true }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          className="px-5"
        >
          {popularBrandData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col items-center justify-center m-[20px] border border-gray-300 rounded-lg p-4 '>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-[80px] h-[90px] object-contain'
                />

                <p className='text-sm font-semibold text-center mt-2 hover:text-green-500 '>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brands;