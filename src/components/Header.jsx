import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/slice/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white flex items-center justify-between text-xs mb-1 space-x-4 h-[55px] font-sans mt-3">
      {/* Left Navigation */}
      <ul className="flex px-20 space-x-5 text-[14px] text-gray-700">
        <li><NavLink to="/rings" className="hover:text-[#C7A66D]">RINGS</NavLink></li>
        <li><NavLink to="/bracelets" className="hover:text-[#C7A66D]">BRACELETS</NavLink></li>
        <li><NavLink to="/earrings" className="hover:text-[#C7A66D]">EARRINGS</NavLink></li>
        <li><NavLink to="/necklaces" className="hover:text-[#C7A66D]">NECKLACES</NavLink></li>
      </ul>

      {/* Logo */}
      <div className="w-24 mb-1 text-center">
        <img
          className="mr-28"
          src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-regular.png"
          alt="Logo"
        />
      </div>

      {/* Right Navigation */}
      <ul className="flex space-x-4 ml-20 text-gray-700 items-center text-center">
        <li><NavLink to="/home" className="hover:text-[#C7A66D] capitalize">Home</NavLink></li>
        <li><NavLink to="/about" className="hover:text-[#C7A66D] capitalize">About</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-[#C7A66D] capitalize">Contact</NavLink></li>
      </ul>

      {/* Icons */}

      <div className="flex text-lg space-x-5 px-10 items-center text-gray-950 opacity-90">
        <i class="fa-regular fa-heart font-bold ml-3 hover:text-[#C7A66D]"></i>
        <NavLink to="/login">
          <i className="fa-solid fa-user cursor-pointer ml-5 hover:text-[#C7A66D]"></i>
        </NavLink>

        <i className="fas fa-search cursor-pointer hover:text-[#C7A66D]"></i>

        {/* Cart Icon with count */}
        <div className="relative">
          <i
            className="fa-solid fa-bag-shopping hover:text-[#C7A66D] cursor-pointer"
            onClick={() => dispatch(toggleCart())}
          />
          {totalCount > 0 && (
            <span className="absolute top-2/3 right-1/2 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full bg-black hover:bg-[#C7A66D]">
              {totalCount}
            0</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;