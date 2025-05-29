import React from 'react'
import { items } from '../utils/trendingItems'; 
import { Link } from 'react-router-dom';

const Trending = () => {
  return (
       <div className='mb-20'>
         <h1 className='flex font-bold justify-center items-center mt-4 text-3xl text-center '>Discover Your Style</h1>
     <hr class="w-[260px] mt-2 border-t-2 border-pink-500 mx-auto" />
     <div className='flex text-center gap-2 p-16 justify-between w-full h-[350px] bg-white'>
         {items.map((item) => (
             <div key={item.id}>
               <Link to={item.link} >
                 <img className='w-full h-[300px] justify-between items-center  ' src={item.image} alt={item.title} />
                </Link>
                 <h2 className='text-sm font-bold justify-center items-center hover:underline mt-3 text-gray-800'>{item.title}</h2>
                 {/* <p className='text-xs font-semibold text-gray-800'>{item.price}</p> */}
             </div>
         ))}
     </div>
     </div>
   )
     
 }
export default Trending;