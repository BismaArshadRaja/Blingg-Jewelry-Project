import React from 'react'

import {Autoplay} from 'swiper/modules';
import { product } from '../utils/ourProducts';
import { Swiper, SwiperSlide } from 'swiper/react';

const Products = () => {
  return (
    <>
      <div className=''>
        <h1 className='flex font-bold justify-center items-center  text-3xl text-center mt-28'>OUR PRODUCTS</h1>
         <hr class="w-52 mt-2 border-t-2 border-pink-500 mx-auto" />
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
                <img className='w-full h-[350px]  items-center flex font-bold justify-center mr-6 ml-2 mb-8 mt-10 px-8 text-3xl text-center ' src={item.image} alt={item.title} />
                
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