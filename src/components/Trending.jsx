import React from 'react'
import { items } from '../utils/trendingItems'; 
import { useDispatch} from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';
import { Link } from 'react-router-dom';

const Trending = () => {
  const dispatch = useDispatch();
  return (
       <div className='mb-20'>
         <h1 className='flex font-bold justify-center items-center mt-4 text-3xl text-center '>Discover Your Style</h1>
     <hr class="w-[260px] mt-2 border-t-2 border-pink-500 mx-auto" />
     <div className='flex text-center gap-2 p-16 justify-between w-full h-[350px] bg-white'>
         {items.map((item) => (
            <div key={item.id}>
  <Link to={item.link}>
    {/* Image and Icon Container */}
    <div className="relative w-full h-[350px]">
       <i className="fa-regular fa-heart absolute top-2 right-2 cursor-pointer hover:text-pink-500"></i>
      <img
        className="w-full h-[350px] object-cover rounded-md"
        src={item.image}
        alt={item.title}
      />
      
      {/* Icon */}
      <button 
                  onClick={(e) => {
                    e.preventDefault(); // Prevents link navigation on icon click
                    dispatch(addToCart(item));
                  }}
                >
                  <i className="fa-solid fa-bag-shopping absolute bottom-2 right-2 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
                </button>
    </div>
  </Link>

  <h2 className="text-sm font-bold hover:underline mt-3 text-gray-800 text-center">
    {item.title}
  </h2>
  {/* <p className='text-xs font-semibold text-gray-800'>{item.price}</p> */}
</div>

         ))}
     </div>
     </div>
   )
     
 }
export default Trending;