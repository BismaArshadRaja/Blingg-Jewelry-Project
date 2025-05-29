import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RINGS from "../pages/Rings";
import BRACELETS from "../pages/Bracelets";
import EARRINGS from "../pages/Earrings";
import NECKLACES from "../pages/Necklaces";



const MainStack = () => {  
    return (
        <Routes>
            <Routes path="/" element={<Home />} />
            <Routes path="/about" element={<About />} />
            <Routes path="/contact" element={<Contact />} />
            <Routes path="/rings" element={<RINGS />} />
            <Routes path="/bracelets" element={<BRACELETS />} />
            <Routes path="/earrings" element={<EARRINGS />} />
            <Routes path="/necklaces" element={<NECKLACES />} />

        </Routes>
    );
}
export default MainStack;