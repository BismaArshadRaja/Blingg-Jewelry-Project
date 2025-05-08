import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import FlatSale from "../pages/FlatSale";
import DailyDeals from "../pages/DailyDeals";
import Profile from "../pages/Profile";


function MainStack({ role }) {
  if (role !== 'user') return null;

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/flatSale" element={<FlatSale />} />
      <Route path="/dailydeals" element={<DailyDeals />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default MainStack;
