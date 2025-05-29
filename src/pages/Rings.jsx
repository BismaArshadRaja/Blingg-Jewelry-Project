import React from 'react';
import rings from '../assets/rings.mp4';
import { ringsData } from '../utils/ringsData';   

function Rings () {
  return (
    <>
     

      <div className="w-full h-full flex items-center justify-center mb-5">
        <div className="relative w-full h-[560px] overflow-hidden">

          {/* video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={rings}
            autoPlay
            muted
            playsInline
            loop
          ></video>

          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Text Content  */}
          <div className="absolute z-10 ml-16 mt-16 mb-28 text-white">
            <h1 className="text-[50px] font-serif uppercase">
              Be always <br /> on trend
            </h1>
            <p className="mt-5 text-sm align-middle text-slate-200">
              Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Ut elit tellus, <br /> luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.
            </p>
          </div>

          {/* Button */}
          <div className="absolute z-10 ml-16 mt-96">
            <button className="uppercase text-xs hover:bg-white hover:text-black border border-white text-white w-28 h-10">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="mt-10">
        <div className='grid grid-cols-4 px-20 gap-4 overflow-auto mb-10 '>
          {ringsData.map((item) => (
            <div key={item.id}>
              <i className="fa-regular fa-heart absolute mt-20 ml-64 cursor-pointer flex hover:text-pink-500 hover:bg-white"></i>
              <img className='grid grid-cols-4 gap-4 overflow-auto  w-full h-[300px] mt-16 justify-between items-center object-cover cursor-pointer ' src={item.image} alt={item.title} />
              <h2 className='text-sm font-semibold text-gray-800 mt-2'>{item.title}</h2>
              <p className='text-xs font-semibold text-gray-800 mt-1'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Rings;
