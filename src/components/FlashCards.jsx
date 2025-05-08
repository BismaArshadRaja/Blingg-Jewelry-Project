import React from 'react';
import {flashCardData} from '../utils/objectData/flashcard';

function FlashCards() {
  return (
    <div>
    <div className='flex justify-between items-center px-3 pt-2 '>
      <h1 className='text-black font-bold text-left text-4xl'> Flash Sale</h1>
      <button className='flex rounded-[20px] bg-gray-200 text-sm w-[70px] h-8 text-center items-center float-right pl-2 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 top-2'>View All</button>
    </div>
    <div className='flex flex-wrap  justify-between p-4'>
      {flashCardData.map((item) => (
        <div key={item.id} className='w-[19%] border border-slate-300 bg-white rounded-md relative p-2 my-2 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1'>
          
          <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

          {item.flash &&(
       <p className="absolute item-center text-sm bg-black text-white w-[5rem] h-[22px] rounded-lg ml-2 text-center">Flash Sale</p>
      )}

      <button className=" absolute bg-green-500 text-white rounded-3xl w-20 h-7 mt-48 ml-32"><i className="fa-solid fa-bag-shopping pr-2"></i>Add</button>

          <img
            src={item.image}
            alt={item.title}
            className='w-full h-auto object-cover rounded-lg mb-2'
          />
          <p className='text-lg font-semibold'>{item.title}</p>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <div className='flex justify-between items-center mt-2'>
            <span className='text-lg font-bold text-green-600'>{item.price}</span>
            <span className='text-sm line-through text-gray-400'>{item.oldPrice}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FlashCards;