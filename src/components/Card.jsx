import React from 'react';
import { popularProduct } from '../utils/objectData/carddata';

function Card() {
  
  
  return (
    <div>
      <h1 className='text-slate-800 font-bold text-left text-4xl pt-5 ml-2 mt-12 mb-3'> Most Popular</h1>
    <div className='flex flex-wrap  justify-between p-4'>
      {popularProduct.map((item) => (
        <div key={item.id} className='w-[19%] border border-slate-300 bg-white rounded-md relative p-2 my-2 cursor-pointer'>
          
          <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

          {item.flash &&(
       <p className="absolute item-center text-sm bg-black text-white w-[5rem] h-[22px] rounded-lg ml-2 text-center">Flash Sale</p>
      )}


      <button className=" absolute bg-green-500 text-white rounded-3xl w-20 h-7 mt-48 ml-32"><i className="fa-solid fa-bag-shopping pr-2"></i>Add</button>

          <img
            src={item.image}
            alt={item.title}
            className='w-full h-auto object-cover rounded-lg mb-2 hover:bg-white hover:shadow-hover transition-all duration-300'
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

export default Card;