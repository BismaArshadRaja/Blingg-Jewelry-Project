import React from "react";  
import { NavLink} from "react-router-dom";

const  Footer = () => {
    return(
       <div className="bg-[#FAF5F0] w-full h-[380px] ">
          <div className="flex justify-center items-center py-5  ">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-regular.png" alt="logo" />
          </div>
          <div className="flex justify-center gap-10 text-2xl">
           
           <a href="https://x.com/NAVTTCOfficial/status/1879400315222716486" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-twitter cursor-pointer"></i>
</a>

<a href="https://www.youtube.com/NAVTTCOfficial" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-youtube cursor-pointer"></i>
</a>

<a href="https://www.pinterest.com/pin/national-vocational-and-technical-training-commission-navttc--410038741077411061/" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-pinterest cursor-pointer"></i>
</a>

<a href="https://www.facebook.com/NAVTTCOfficial/" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-facebook cursor-pointer"></i>
</a>

<a href="https://www.instagram.com/navttcofficial/?hl=en" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-square-instagram cursor-pointer"></i>
</a>

          </div>

          <div className="flex justify-evenly w-[25%] items-center gap-x-20 mx-16">
          <div className="mb-7">
            <ul> 
               <h4 className="ml-20 mt-5 font-semibold">About</h4>
            <li className="flex flex-col flex-wrap ml-20 justify-evenly mb-2 mt-2">
               <a className="text-sm text-gray-500 hover:text-black mb-2" href="Home">Home</a>
               <a className="text-sm text-gray-500 hover:text-black mb-2" href="about">About</a>
               <a className="text-sm text-gray-500 hover:text-black mb-2" href="contact">Contact</a>
            </li>   
            </ul>
          </div>
         
          <div >
            <ul >
               <h4 className="ml-20 mt-5 font-semibold">Shop</h4>
               <li className="flex flex-col flex-wrap ml-20 justify-between mb-2 mt-2">
                  <a className="text-sm text-gray-500 hover:text-black mb-2"  href="rings">Rings</a>
                  <a className="text-sm text-gray-500 hover:text-black mb-2"  href="bracelets">Bracelets</a>
                  <a className="text-sm text-gray-500 hover:text-black mb-2"  href="earrings">Earrings</a>
                  <a className="text-sm text-gray-500 hover:text-black mb-2"  href="necklaces">Necklaces</a>
               </li>
            </ul>
            </div>
            <div className="mb-1">
               <ul>
                   <h4 className="ml-20 mt-5 font-semibold">Address</h4>
                  <li className="flex flex-col ml-20 justify-between mb-2 mt-2 cursor-pointer">
                    <p className="text-sm text-gray-500 hover:text-black mb-2 cursor-pointer">123 Fifth Avenue, NewYork</p>
                    <p className="text-sm text-gray-500 hover:text-black mb-2 cursor-pointer">contact@info.com</p>
                    <p className="text-sm text-gray-500 hover:text-black mb-2 cursor-pointer">929-242-6868</p>
                  </li>
               </ul>
            </div>
            <div className="m-10 ">
               <ul>
                 <h4 className=" mb-2 font-semibold">Newsletter</h4>
                 <p className="text-sm text-gray-500 ">Don't miss any updates or promotions by signing up to our newsletter.</p>
                 <div className="relative mt-2">
                 <input className="w-[275px] px-2 py-2 h-8 pr-24 border hover:border-gray-300 " type="text"  placeholder="Your email" />
                <button
                  className="absolute right-0 top-0 hover:bg-pink-600 bg-pink-500 h-8 w-20 cursor-pointer text-white text-sm rounded-r" >Send<i className="fa-solid fa-envelope ml-1"></i> </button>
                 <div className="flex items-center mt-2 space-x-2">
                 <input type="checkbox" className="w-3 h-3" />
                 <p className="text-xs m-0 text-gray-500">I have read and agree to the <span class="underline cursor-pointer">Privacy Policy</span></p>
               </div>
            </div>
               </ul>
            </div>
          </div>
          <hr />
          <div className="justify-center items-center text-center p-4">
            <p className="text-xs text-gray-500">Copyright © 2025 Blingg Jewelry | Powered by Blingg Jewelry</p>
          </div>
       </div>
       
       
    )
}
export default Footer;