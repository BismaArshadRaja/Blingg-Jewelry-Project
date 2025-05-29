import React from "react";
import { necklaces } from "../utils/neckData";

const Necklaces = () => {
   return (
    <>
   <div className="mx-2">
    <div>
    <img className="h-[580px] w-full rounded-md" src="https://media.tiffany.com/is/image/tiffanydm/TiffanyDiamond-ContentPg-Hero-Desktop?$tile$&wid=2992&fmt=webp" alt="necklace"/>
     </div>
              <h1 className='flex font-bold justify-center items-center text-3xl text-center mt-12'>The Blingg Diamond</h1>
                  <hr class="w-64 mt-2 border-t-2 border-pink-500 mx-auto" />
      
          <div className='grid grid-cols-4 px-20 gap-4 overflow-auto mb-10 '>
              {necklaces.map((item) => (
                  <div key={item.id}>
                    <i class="fa-regular fa-heart absolute mt-20 ml-64 cursor-pointer flex hover:text-pink-500 hover:bg-white"></i>
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
export default Necklaces;
