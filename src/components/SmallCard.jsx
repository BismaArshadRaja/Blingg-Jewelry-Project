import React from 'react';
import { smallCardData } from '../utils/objectData/smallCard';

function SmallCard() {
  return (
    <div>
      <h1 className='text-black font-bold text-left text-4xl pt-5 ml-2 mt-40 mb-10'>
        Browse by Categories
      </h1>
      <div className='flex overflow-x-auto w-full space-x-6 justify-between '>
        {smallCardData.map((item) => (
          <div
            key={item.id}
            className='flex-col flex-shrink-0 w-[200px] h-[160px] justify-center text-center font-bold items-center border rounded-2xl border-slate-300 bg-slate-50 hover:text-green-600 hover:bg-white relative p-2 my-2 cursor-pointer'
          >
            <img src={item.image} alt={item.title} 
            className='w-[80px] h-[90px] object-contain ml-10 group-hover:rotate-6 transition-all duration-300'/>
            <p className='text-md '>{item.title}</p>
          </div>
        ))}
      </div >
      <div className='flex rounded space-x-6 justify-center items-center mt-16'>
      <img src="https://d91ztyz4qy326.cloudfront.net/storeking/1430/conversions/collected_from_garden-cover.jpg" alt="Collected from Garden"
      className=' rounded-3xl w-[30%]' />
        <img src="https://d91ztyz4qy326.cloudfront.net/storeking/1431/conversions/seasonal_fruits-cover.jpg" alt="Seasonal Fruits" 
        className=' rounded-3xl w-[30%]'/>
        <img src="https://d91ztyz4qy326.cloudfront.net/storeking/1432/conversions/special_offer_on_seafood-cover.jpg" alt="Special Offer on Seafood"
        className=' rounded-3xl w-[30%]' />
      </div>
    </div>
  );
}

export default SmallCard;
