import React from "react";

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <div className="grid grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain"
            />
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {[product.image, product.image, product.image].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="thumb"
                  className="w-16 h-16 object-cover border cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <div className="mt-2">
              <span className="text-pink-600 text-lg font-bold">{product.price}</span>
              <span className="line-through text-gray-500 text-sm ml-2">{product.oldPrice}</span>
            </div>

            <p className="mt-3 text-sm text-gray-700">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 border border-gray-300 rounded p-1 text-center"
              />
              <button
                onClick={() => onAddToCart(product)}
                className="ml-4 px-6 py-2 bg-black text-white hover:bg-gray-800"
              >
                ADD TO CART
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
