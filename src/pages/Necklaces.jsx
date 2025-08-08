import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { necklaces } from "../utils/neckData";

const Necklaces = () => {
  const dispatch = useDispatch();

  // For modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="mx-2">
      {/* Hero Image */}
      <div>
        <img
          className="h-[580px] w-full rounded-md"
          src="https://media.tiffany.com/is/image/tiffanydm/TiffanyDiamond-ContentPg-Hero-Desktop?$tile$&wid=2992&fmt=webp"
          alt="necklace"
        />
      </div>

      <h1 className="flex font-bold justify-center items-center text-3xl text-center mt-12">
        The Blingg Diamond
      </h1>
      <hr className="w-64 mt-2 border-t-2 border-pink-500 mx-auto" />

      {/* Product Grid */}
      <div className="grid grid-cols-4 px-20 gap-4 overflow-auto mb-10">
        {necklaces.map((item) => {
          const [imgSrc, setImgSrc] = useState(item.image);

          return (
            <div key={item.id} className="relative">
              {/* Wishlist Icon */}
              <i className="fa-regular fa-heart absolute mt-20 ml-[230px] cursor-pointer flex hover:text-pink-500 hover:bg-white"></i>

              {/* Product Image (Click for Modal) */}
              <img
                className="w-full h-[350px] mt-16 object-cover cursor-pointer"
                src={imgSrc}
                alt={item.title}
                onMouseEnter={() => setImgSrc(item.hoverImage)}
                onMouseLeave={() => setImgSrc(item.image)}
                onClick={() => setSelectedProduct(item)}
              />

              {/* Add to Cart Icon */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(item));
                }}
              >
                <i className="fa-solid fa-bag-shopping absolute bottom-2 right-4 mb-[70px] text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
              </button>

              {/* Product Name & Price */}
              <h2 className="text-sm font-semibold text-gray-800 mt-2">{item.title}</h2>
              <p className="text-xs font-semibold text-gray-800 mt-1">{item.price}</p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[500px] p-5 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.title}</h2>
            <p className="mt-2 text-gray-600">{selectedProduct.description}</p>
            <p className="mt-2 font-semibold">{selectedProduct.price}</p>
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              onClick={() => {
                dispatch(addToCart(selectedProduct));
                closeModal();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Necklaces;
