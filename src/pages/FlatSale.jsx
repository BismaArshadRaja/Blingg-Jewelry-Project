import React from 'react';
import { flashData } from '../utils/objectData/flash';

function FlatSale() {
  return (
    <div>
    <div className='flex px-3 pt-2 '>
    <h1 className='text-black font-bold text-left text-4xl'> Flash Sale</h1>
    <p className='flex text-black text-[1.5rem] font-small pt-2 pl-2'>(30 Products)</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
      {flashData.map((item) => (
        <div key={item.id} className='w-full border border-slate-300 bg-white rounded-md relative p-2 my-2 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1'>
          
        <i className="fa-regular fa-heart absolute top-4 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

       <p className="absolute item-center text-sm  bg-black text-white w-[5rem] h-[22px] rounded-lg ml-2 text-center top-5">Flash Sale</p>
      

      <button className=" absolute bg-green-500 text-white rounded-3xl w-20 h-7 mt-48 ml-32"><i className="fa-solid fa-bag-shopping pr-2"></i>Add</button>

          <img
            src={item.image}
            alt={item.title}
            className='w-full h-auto object-cover rounded-lg mb-2'
          />
          <p className='text-md font-semibold'>{item.title}</p>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <div className='flex items-center'>
            <span className='text-md font-bold text-green-600'>{item.price}</span>
            <span className='text-sm line-through text-gray-400 pl-3'>{item.oldPrice}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FlatSale;