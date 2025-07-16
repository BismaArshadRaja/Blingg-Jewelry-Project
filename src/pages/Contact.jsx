import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-white mb-10 mt-2 rounded-2xl">
        <div className="flex border rounded-3xl border-gray-200 shadow-xl w-[1000px] overflow-hidden">
          {/* Left Image */}
          <div className="w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://media.tiffany.com/is/image/tiffanydm/2024_SEP_PerettiRefresh_HP_50-50_Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
              alt="Contact Visual"
            />
          </div>

          {/* Right Text */}
          <div className="w-1/2 p-8 bg-white">
            <h1 className="text-[40px] font-serif text-pink-800 text-center mb-1">Contact Us</h1>
            <hr className="w-52 mb-2 border-t-2 border-pink-800 mx-auto" />
            <h2 className="text-3xl text-pink-700 mb-4 font-serif">A Lifetime of Client Care</h2>
            <div className="text-lg">
              <p className="m-3 hover:text-gray-800 cursor-pointer">
                <i className="fa-solid fa-phone mr-2"></i> Call +92 342 9876543
              </p>
              <p className="m-3 hover:text-gray-800 cursor-pointer">
                <i className="fa-regular fa-envelope mr-3"></i> blingg.co@gmail.com
              </p>
            </div>
            <div className="m-3">
              <h1 className="text-3xl font-serif text-pink-700">Client Care Hours of Operations</h1>
              <ul>
                <li className="mt-2">Monday–Friday: 8:00AM–10PM</li>
                <li className="mt-2">Saturday: 9:00AM–9:00PM</li>
                <li className="mt-2">Sunday: 10:00AM–9:00PM</li>
                <li className="mt-2">
                  HOLIDAY HOURS:
                  <br />
                  May 26: 10:00AM–5:00PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
          
    </>
  );
};

export default Contact;
