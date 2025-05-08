import React, { useState, useEffect, useRef } from "react";
import NestedMenu from "./NestedMenu";
import {NavLink} from 'react-router-dom';
import {navbar} from "../utils/tailwind/style"

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cart, setCart] = useState(0);
  const menuRef = useRef(null); // Ref for menu area

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
     <div className="border-b border-white"></div>
      <div className="flex items-center w-full h-20 relative ">
        {/* Browser Category Button and Menu */}
        <div className="m-5 relative" ref={menuRef}>
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="bg-slate-900 rounded-md text-white p-2 text-xs font-medium"
          >
            <i className="fa-solid fa-table-list mr-1"></i>
            Browser Category
            <i className="fa-solid fa-angle-down ml-1"></i>
          </button>

          {menuVisible && <NestedMenu />}
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-6 ml-10">
          <li> <NavLink to="/Home" className={navbar.navLink}>Home</NavLink></li>
          <li> <NavLink to="/Offers" className={navbar.navLink}>Offers</NavLink></li>
          <li> <NavLink to="/DailyDeals" className={navbar.navLink}>Daily Deals</NavLink></li>
          <li> <NavLink to="/FlatSale" className={navbar.navLink}>Flat Sale</NavLink></li>
        </ul>

        {/* Phone and Cart */}
        <div className="flex items-center space-x-6 ml-auto mr-10">
          <div className="text-blue-400 text-sm">
            <i className="fa-solid fa-phone p-2"></i>
            <a href="#">+8801333384628</a>
          </div>
          <button
            onClick={() => setCart(cart + 1)}
            className="bg-green-500 text-white px-3 py-2 rounded-md text-sm"
          >
            <i className="fa-solid fa-basket-shopping mr-1"></i>
            My Cart {cart}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;