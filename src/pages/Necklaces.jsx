import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { necklaces } from "../utils/neckData";

const Necklaces = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-2">
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

        <div className="grid grid-cols-4 px-20 gap-4 overflow-auto mb-10">
          {necklaces.map((item) => (
            <div key={item.id} className="relative">
              <i className="fa-regular fa-heart absolute mt-20 ml-64 cursor-pointer flex hover:text-pink-500 hover:bg-white"></i>

              <img
                className="w-full h-[350px] mt-16 object-cover cursor-pointer"
                src={item.image}
                alt={item.title}
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(item));
                }}
              >
                <i className="fa-solid fa-bag-shopping absolute bottom-2 right-4 mb-[70px] text-white bg-black bg-opacity-30 rounded-full p-2 hover:bg-pink-500 hover:bg-opacity-80 cursor-pointer"></i>
              </button>

              <h2 className="text-sm font-semibold text-gray-800 mt-2">{item.title}</h2>
              <p className="text-xs font-semibold text-gray-800 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Necklaces;
