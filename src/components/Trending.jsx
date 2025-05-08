import React from 'react';
import {trendingData } from '../utils/objectData/trending';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function Trending() {
  return (
    <div>
      <h1 className="text-[2rem] text-2xl ml-3 my-8 font-bold text-slate-800 mt-12 mb-5">Trending Items</h1>

      <div className="relative">

        <Swiper
          modules={[Navigation]}
          navigation={{clickable:true }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          className="px-5"
        >
          {trendingData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='w-full border border-slate-200 bg-white rounded-md p-2 my-2 relative'>
                <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

                <button className="absolute bg-green-500 text-white rounded-3xl w-20 h-7 mt-48 ml-32">
                  <i className="fa-solid fa-bag-shopping pr-2"></i>Add
                </button>

                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-auto object-cover rounded-md mb-3 transition ease-linear duration-300 hover:scale-110'
                />

                <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
                <p className='text-sm text-gray-500'>{item.description}</p>
                <div className='flex justify-between items-center mt-2'>
                  <span className='text-md font-bold text-green-600'>{item.price}</span>
                  <span className='text-sm line-through text-gray-400'>{item.oldPrice}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;