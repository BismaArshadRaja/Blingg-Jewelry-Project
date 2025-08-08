import React, { useState } from 'react';
import { earData } from '../utils/EarData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';

function Earrings() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({ ...selectedProduct, quantity }));
      handleCloseModal();
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className='flex justify-between items-center p-4'>
        <img className='w-[50%] h-[600px]' src="https://media.tiffany.com/is/image/tiffanydm/2025_HW_2x2_TILE1?$tile$&wid=1488&hei=1488" alt="right" />
        <img className='w-[50%] h-[600px]' src="https://media.tiffany.com/is/image/tiffanydm/2024_ICONS_BC_2x2_ONFIG2?$tile$&wid=1488&hei=1488" alt="left" />
      </div>

      {/* Products */}
      <div className="mt-10">
        <h1 className='flex font-bold justify-center items-center text-3xl text-center'>Bracelets</h1>
        <hr className="w-32 mt-2 border-t-2 border-pink-500 mx-auto" />

        <div className='grid grid-cols-4 px-20 gap-4 mb-10'>
          {earData.map((item) => (
            <div key={item.id} className='relative'>
              <i className="fa-regular fa-heart absolute mt-20 ml-[230px] cursor-pointer hover:text-pink-500 hover:bg-white"></i>

              {/* Open Modal on Image Click */}
              <img
                className='w-full h-[350px] mt-16 object-cover cursor-pointer'
                src={item.image}
                alt={item.title}
                onClick={() => handleOpenModal(item)}
              />

              {/* Add to Cart Icon */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart({ ...item, quantity: 1 }));
                }}
              >
                <i className="fa-solid fa-bag-shopping bottom-2 right-4 absolute mb-[70px] text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
              </button>

              <h2 className='text-sm font-semibold text-gray-800 mt-2'>{item.title}</h2>
              <p className='text-xs font-semibold text-gray-800 mt-1'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[500px] max-h-[90vh] overflow-y-auto p-5 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg"
              onClick={handleCloseModal}
            >
              ✖
            </button>

            {/* Large Product Image */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[300px] object-cover rounded"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.title}</h2>

            {/* Price */}
            <p className="text-pink-500 text-xl font-semibold mt-2">{selectedProduct.price}</p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3 mt-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border rounded px-3 py-1 w-20"
              />
              <button
                onClick={handleAddToCart}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Add to Cart
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-sm">
              {selectedProduct.description || "No description available for this product."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Earrings;
