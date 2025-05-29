import React from "react";

import {Autoplay,  Pagination} from 'swiper/modules';
import { smallCards } from "../utils/brandsmallcards";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const BrandsName = () => {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination]}
      
      slidesPerView={4}
      autoplay={{ delay: 3000 , disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="px-12 
   [&_.swiper-pagination-bullet]:bg-black 
     [&_.swiper-pagination-bullet]:mx-[2px] 
     [&_.swiper-pagination-bullet]:w-[6px] 
     [&_.swiper-pagination-bullet]:h-[6px]"

      loop={true}
      
    >
     {smallCards.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex items-center w-64 h-32 mb-12 mr-8 ml-5 border border-gray-300 " > 
                <img src={item.image} alt="logo" className="max-h-40 object-contain" />
          </div> 
        </SwiperSlide>
      ) ) }
    </Swiper>
    </>
  );};
   <div>
   </div>
export default BrandsName;
