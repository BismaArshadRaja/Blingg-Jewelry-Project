import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import BrandsName from './components/BrandsName';
import Footer from './pages/Footer';
import About from '../src/pages/About';      
import Contact from '../src/pages/Contact';  
import Home from '../src/pages/Home';
import RINGS from '../src/pages/Rings';
import BRACELETS from '../src/pages/Bracelets';
import EARRINGS from '../src/pages/Earrings';
import NECKLACES from '../src/pages/Necklaces';     
import Login from '../src/pages/Login';   
import Register from '../src/pages/Register';
import CartSidebar from './components/CartSidebar';
import { useSelector } from 'react-redux';


function App() {
const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <BrandsName />
        </>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/rings" element={<RINGS />} />
        <Route path="/bracelets" element={<BRACELETS />} />
        <Route path="/earrings" element={<EARRINGS />} />
        <Route path="/necklaces" element={<NECKLACES />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       {isCartOpen && <CartSidebar />}
      <Footer />
    </>
  );
}

export default App;
