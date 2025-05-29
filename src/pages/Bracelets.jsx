
    import React, { useRef, useEffect } from 'react';
  import {braceData} from "../utils/BraceData.js";
    
    function Bracelets(){
      return (
        <>
       <div className='flex justify-between items-center '>
        <img className='w-[50%] h-[600px]' src="https://media.tiffany.com/is/image/tiffanydm/2025_ROWMOTHERSDAY_BG_2X2_ONFIG_4?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp" alt="right" />
        <img className='w-[50%] h-[600px]' src="https://media.tiffany.com/is/image/tiffanydm/2024_Lock_Narrow_BG_2x2_TILE?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp" alt="left" />
       </div>
        
        <div className="mt-10">
          <h1 className='flex font-bold justify-center items-center text-3xl text-center '>Bracelets</h1>
          <hr class="w-32 mt-2 border-t-2 border-pink-500 mx-auto" />
               <div className='grid grid-cols-4 px-20 gap-4 overflow-auto mb-10 '>
                 {braceData.map((item) => (
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
  
    
    export default Bracelets;
    
