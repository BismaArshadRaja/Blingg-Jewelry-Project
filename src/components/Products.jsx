import React from 'react'

import {Autoplay} from 'swiper/modules';
import { product } from '../utils/ourProducts';
import { Swiper, SwiperSlide } from 'swiper/react';

const Products = () => {
  return (
    <>
      <div className=''>
        <h1 className='flex font-bold justify-center items-center mt-4 text-3xl text-center '>OUR PRODUCTS</h1>
        <div className='flex justify-between '>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            autoplay={{ delay: 3000 , disableOnInteraction: false }}
            
            loop={true}
          >
            {product.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='flex '>
                <i class="fa-regular fa-heart absolute mt-12 ml-64 cursor-pointer hover:text-pink-500"></i>
                <img className='w-full h-[300px]  items-center flex font-bold justify-center mr-6 ml-2 mb-8 mt-10 px-8 text-3xl text-center ' src={item.image} alt={item.title} />
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          
              
        </div>
        </div>
     <div className="flex justify-center items-center">
               <button className="uppercase text-xs hover:text-black border  border-black text-black w-28 h-10">
               SHOP NOW
               </button>
              </div>
    </>
      
  );    
}
export default Products;