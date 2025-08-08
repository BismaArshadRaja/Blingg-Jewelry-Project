import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  return (
    <div className=" w-screen h-screen  flex items-center justify-center mb-0 mt-10 p-2 ">
   
        
        <div className="w-auto h-full  ">
          <img
            src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg"
            alt="Jwellery"
            className="rounded-md shadow-md w-full"
          />
        </div>

<div className='width-max-w-2xl absolute mr-96 mb-28 ml-10 '>
    <p className='text-xs mb-5 '>New collection</p>
    <h1 className='text-[60px] text-black-500 font-Cinzel uppercase mr-[380px] font-roboto font-serif'>The new ring <br /> sensation</h1>
      <p className='mt-5 text-sm text-black/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br />
      luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
</div>

    <div className="width-max-w-2xl absolute mr-96 mb-0 ml-16">
     <NavLink to="/RINGS">
      <button className='Roboto Condensed - 300  mt-80 uppercase text-xs hover:bg-black hover:text-white border border-black mr-[710px] w-28 h-10'>SHOP NOW</button>
    </NavLink>
    </div>
          </div>
        
    
   
  );
}

export default Banner;