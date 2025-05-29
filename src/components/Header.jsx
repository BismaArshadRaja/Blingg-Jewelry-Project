import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Rings from "../pages/Rings";
import Bracelets from "../pages/Bracelets";
import Earrings from "../pages/Earrings"; 
import Necklaces from "../pages/Necklaces";
import {NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between text-xs mb-1 space-x-4 h-[55px] roboto-300 font-sans mt-3 style-normal">
      {/* Left nav */}
      <ul className="flex px-20 space-x-5 size[14px] text-gray-700">
      
        <li> <NavLink to="/rings" className={"hover:text-[#C7A66D] cursor-pointer"}>RINGS</NavLink></li>
        <li> <NavLink to="/bracelets" className={"hover:text-[#C7A66D] cursor-pointer"}>BRACELETS</NavLink></li>
        <li> <NavLink to="/earrings" className={"hover:text-[#C7A66D] cursor-pointer"}>EARRINGS</NavLink></li>
        <li> <NavLink to="/necklaces" className={"hover:text-[#C7A66D] cursor-pointer"}>NECKLACES</NavLink></li>
      
      </ul>

      {/* Logo in center */}
      <div className=" items-center justify-center w-24 mb-1 text-center  ">
        <img 
          className="mr-28 "
          src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-regular.png"
          alt="Logo"
          
        />
      </div>

      {/* Right nav */}
      <ul className="flex space-x-4  ml-20 text-gray-700 items-center text-center">
       
        <li> <NavLink to="/Home" className={"hover:text-[#C7A66D] cursor-pointer capitalize"}>Home</NavLink></li>
       <li> <NavLink to="/about" className={"hover:text-[#C7A66D] cursor-pointer capitalize"}>ABOUT</NavLink></li>
       <li> <NavLink to="/contact" className={"hover:text-[#C7A66D] cursor-pointer capitalize"}>CONTACT</NavLink></li>
      </ul>

      {/* Icons */}
     <div className="flex text-lg space-x-5 px-10 justify-center items-center text-gray-950 opacity-90">
  <i className="fa-solid fa-user cursor-pointer ml-5"></i>
  <i className="fas fa-search cursor-pointer"></i>

  <div className="relative gap-2 ">
   
    <i className="fa-solid fa-bag-shopping mb-2 hover:text-[#C7A66D]  cursor-pointer">
     <span className="absolute -top-2 -right-2 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full bg-black hover:bg-[#C7A66D]">
      0
    </span>
      
    </i>
  </div>
</div>

    </div>
  );
};

export default Header;
