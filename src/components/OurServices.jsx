import React from 'react'
import { arrivals } from '../utils/trending'
import { services } from '../utils/services';

const OurServices = () => {
  return (
      <div className='mt-20'>
       
    <div className='flex text-center px-20 space-x-20 mt-20 justify-between w-full mb-20 bg-white'>
        {services.map((item) => (
            <div key={item.id}>
                <img className='w-[80px] h-[80px] justify-between items-center ' src={item.image} alt={item.title} />
                <h2 className='text-lg font-semibold text-start text-gray-600 capitalize font-serif'>{item.title}</h2>
                <p className='text-sm text-gray-500 text-start '>{item.text}</p>
            </div>
        ))}
    </div>
    </div>
  )
    
}
export default OurServices;
