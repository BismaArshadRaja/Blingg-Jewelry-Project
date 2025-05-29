import React from 'react'
import { arrivals } from '../utils/trending'

const NewArrivals = () => {
  return (
      <div className='mb-16'>
        <h1 className='flex font-bold justify-center items-center text-3xl text-center '>NEW ARRIVALS</h1>
            <hr class="w-52 mt-2 border-t-2 border-pink-500 mx-auto" />

    <div className='flex text-center gap-2 p-16 justify-between w-full h-[350px] bg-white'>
        {arrivals.map((item) => (
            <div key={item.id}>
                <img className='w-full h-[300px] justify-between items-center ' src={item.image} alt={item.title} />
                {/* <h2 className='text-sm font-semibold text-gray-800'>{item.title}</h2>
                <p className='text-xs font-semibold text-gray-800'>{item.price}</p> */}
            </div>
        ))}
        
    </div>
    </div>

  )
    
}
export default NewArrivals;
