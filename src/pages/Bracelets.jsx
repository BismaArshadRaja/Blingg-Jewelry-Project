import React, { useState } from 'react';
import { braceData } from "../utils/BraceData.js";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';

function Bracelets() {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // reset quantity when opening modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Banner Images */}
      <div className='flex justify-between items-center'>
        <img
          className='w-[50%] h-[600px]'
          src="https://media.tiffany.com/is/image/tiffanydm/2025_ROWMOTHERSDAY_BG_2X2_ONFIG_4?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp"
          alt="right"
        />
        <img
          className='w-[50%] h-[600px]'
          src="https://media.tiffany.com/is/image/tiffanydm/2024_Lock_Narrow_BG_2x2_TILE?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp"
          alt="left"
        />
      </div>

      {/* Product Grid */}
      <div className="mt-10">
        <h1 className='flex font-bold justify-center items-center text-3xl text-center'>Bracelets</h1>
        <hr className="w-32 mt-2 border-t-2 border-pink-500 mx-auto" />
        <div className='grid grid-cols-4 px-20 gap-4 overflow-auto mb-10'>
          {braceData.map((item) => (
            <div key={item.id} className="relative">
              {/* Wishlist Icon */}
              <i className="fa-regular fa-heart absolute mt-[70px] ml-[230px] cursor-pointer flex hover:text-pink-500 hover:bg-white"></i>

              {/* Product Image - Opens Modal */}
              <img
                onClick={() => openModal(item)}
                className='w-full h-[350px] mt-16 object-cover cursor-pointer'
                src={item.image}
                alt={item.title}
              />

              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart({ ...item, quantity: 1 }));
                }}
              >
                <i className="fa-solid fa-bag-shopping bottom-2 right-4 absolute mb-[70px] text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
              </button>

              {/* Title & Price */}
              <h2 className='text-sm font-semibold text-gray-800 mt-2'>{item.title}</h2>
              <p className='text-xs font-semibold text-gray-800 mt-1'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Product Image */}
            <img
              className="w-full h-[290px] object-cover rounded-md"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />

            {/* Title */}
            <h2 className="text-lg font-semibold mt-4">{selectedProduct.title}</h2>

            {/* Price */}
            <p className="text-pink-500 font-bold text-lg mt-1">{selectedProduct.price}</p>

            {/* Quantity + Add to Cart in One Row */}
            <div className="flex items-center mt-3 space-x-2">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                className="w-16 text-center border border-gray-300 rounded"
                min="1"
              />
              <button
                onClick={() => {
                  dispatch(addToCart({ ...selectedProduct, quantity }));
                  closeModal();
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                ADD TO CART
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4">
              {selectedProduct.description || "A classic bracelet made from premium materials."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Bracelets;
