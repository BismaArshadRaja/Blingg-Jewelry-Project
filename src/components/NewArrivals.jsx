import React from 'react'
import { arrivals } from '../utils/trending'

const NewArrivals = () => {
  return (
    <div className='mb-16'>
      <h1 className='flex font-bold justify-center items-center text-3xl text-center mt-40'>NEW ARRIVALS</h1>
      <hr className="w-52 mt-2 border-t-2 border-pink-500 mx-auto" />

      <div className='flex text-center gap-2 p-16 justify-between w-full h-[350px] bg-white'>
        {arrivals.map((item) => (
          <div key={item.id} className="relative">
            <i className="fa-regular fa-heart absolute top-2 right-2 cursor-pointer hover:text-pink-500"></i>
            <img className='w-full h-[350px] justify-between items-center' src={item.image} alt={item.title} />
            <button className='relative'
                              onClick={(e) => {
                                e.preventDefault(); // Prevents link navigation on icon click
                                dispatch(addToCart(item));
                              }}
                            >
                              <i className="fa-solid fa-bag-shopping absolute bottom-2 left-24 mb-5 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
                            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrivals;
