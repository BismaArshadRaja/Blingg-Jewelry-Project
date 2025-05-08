import React from "react";

import { popularBrandData } from "../utils/objectData/populardata.js";
function  Popular(){
return(
<div className="">
    <div className="flex justify-between items-center px-3 pt-2">
    <h1 className="text-slate-800 font-bold text-left text-4xl mt-8 mb-8">Popular Brands</h1>
    <i className="fa-solid fa-angle-right bg-green-50 text-green-600 hover:bg-green-500 hover:text-white border rounded-full float-right"></i>
    <i className="fa-solid fa-angle-left  bg-green-50 text-green-600 hover:bg-green-500 hover:text-white border rounded-full float-right"></i>
</div>

<div className='flex overflow-x-auto w-full space-x-6 justify-between '>
    {popularBrandData.map((item) => (
    <div key={item.id} className='flex-col flex-shrink-0 w-[200px] h-[160px] justify-center text-center items-center border rounded-2xl border-slate-100 bg-white relative p-2 my-2 cursor-pointer'>
        <img
        src={item.image}
        alt={item.title}
        className='w-[80px] h-[90px] object-contain ml-10'/>
        <p className='text-md '>{item.title}</p>
        
        </div>
    ))}

    </div>
    </div>
  );
}
export default Popular;