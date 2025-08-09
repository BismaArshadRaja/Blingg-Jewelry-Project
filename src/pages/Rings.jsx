import { useState } from "react";
import ringsVideo from "../assets/rings.mp4"; 
import{ ringsData} from "../utils/ringsData.js"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { NavLink } from "react-router-dom";

function Rings() {
  const dispatch = useDispatch();
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [hoveredId, setHoveredId] = useState(null); // For hover effect

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({ ...selectedProduct, quantity }));
      closeModal();
    }
  };

  return (
    <>
      {/* Video Banner */}
      <div className="w-full h-full flex items-center justify-center mb-5">
        <div className="relative w-full h-[560px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={ringsVideo}
            autoPlay
            muted
            playsInline
            loop
          ></video>

          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="absolute z-10 ml-16 mt-16 mb-28 text-white">
            <h1 className="text-[50px] font-serif uppercase">
              Be always <br /> on trend
            </h1>
            <p className="mt-5 text-sm text-slate-200">
              Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Ut elit tellus, <br /> luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.
            </p>
          </div>

          <div className="absolute z-10 ml-16 mt-96">
            <NavLink to="/Home">
              <button className="uppercase text-xs hover:bg-white hover:text-black border border-white text-white w-28 h-10">
                SHOP NOW
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-4 px-20 gap-4 overflow-auto mb-10">
        {ringsData.map((item) => (
          <div key={item.id} className="relative">
            {/* Wishlist Icon */}
            <i className="fa-regular fa-heart absolute mt-20 ml-[230px] cursor-pointer hover:text-pink-500 hover:bg-white"></i>

            {/* Product Image */}
            <img
              className="w-full h-[350px] mt-16 object-cover cursor-pointer"
              src={hoveredId === item.id ? item.hoverImage : item.image}
              alt={item.title}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProduct(item)}
            />

            {/* Add to Cart Icon */}
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart(item));
              }}
            >
              <i className="fa-solid fa-bag-shopping bottom-2 right-4 absolute mb-[70px] text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
            </button>

            {/* Product Info */}
            <h2 className="text-sm font-semibold text-gray-800 mt-2">
              {item.title}
            </h2>
            <p className="text-xs font-semibold text-gray-800 mt-1">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Product Image */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[300px] object-cover mb-4"
            />

            {/* Product Title */}
            <h2 className="text-xl font-semibold mb-2">
              {selectedProduct.title}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-pink-500">
                {selectedProduct.price}
              </span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-2 mb-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="border w-16 p-1 text-center"
              />
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600">
              {selectedProduct.description || "No description available."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Rings;
