import React from 'react';
import { services } from '../utils/services';
import storeup from "../assets/storeup.jpg";

const About = () => {
    return (
        <>
            <div className="flex rounded-lg p-1 bg-pink-50">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        className="h-[550px] w-full object-cover"
                        src="https://media.tiffany.com/is/image/tiffanydm/SchlumBIOPg-ContentPg-Hero-Desktop?$tile$&wid=2992&fmt=webp"
                        alt="jewelry"
                    />
                </div>

                {/* Text Section */}
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <p className="text-[45px] font-serif justify-center items-center text-center font-semibold mb-4 ">About Us</p>
                    <h1 className="text-[20px] text-gray-700 leading-relaxed">
                        At our jewelry brand, we blend timeless elegance with trusted craftsmanship to create pieces that shine for every occasion. Each item is made from high-quality materials, carefully crafted by skilled artisans, and authenticity-certified to ensure lasting beauty. We offer affordable luxury, combining exquisite design with accessible pricing. With fast, secure shipping and customer-first support, your satisfaction is our top priority. Whether you're shopping for yourself or looking for the perfect gift, our jewelry adds a touch of sparkle to every moment.
                    </h1>
                </div>
            </div>
            <div className="mt-16">
                <h1 className="flex justify-center text-center items-center text-[40px] font-serif">Designers of Note</h1>
                <hr className="w-72 mb-5 border-t-2 border-pink-500 mx-auto" />
                <p className="flex justify-center text-center items-center text-lg font-serif">Meet the legendary designers behind some of Blingg’s greatest creations.</p>
            </div>

            {/* Designers section */}
            <div className="flex mt-10 ">
                {/* cart1 */}
                <div className=" w-1/3 px-10 ">
                    <img className="w-[400px] h-[350px]" src="https://media.tiffany.com/is/image/tiffanydm/WOT-LP-Recirc1-Desktop?$tile$&wid=988&hei=988&fmt=webp" alt="Elsa" />
                    <h1 className="align-middle text-center mt-2">
                        “To translate ideas is magic. It takes so long to <br />
                        make a curve, to make sure the curve <br /> is done well.”
                    </h1>
                    <p className="font-bold align-middle text-center">-Elsa Peretti</p>
                </div>
                {/* cart2 */}
                <div className=" w-1/3 px-10">
                    <img className="w-[400px] h-[350px]" src="https://media.tiffany.com/is/image/tiffanydm/WOT-LP-Recirc2-Desktop?$tile$&wid=988&hei=988&fmt=webp" alt="Jean" />
                    <h1 className="align-middle text-center mt-2">“I try to make everything look as if it were <br /> growing, uneven, at random, <br /> organic, in motion.”</h1>
                    <p className="font-bold align-middle text-center">-Jean Schlumberger</p>
                </div>
                {/* cart3 */}
                <div className=" w-1/3 px-10">
                    <img className="w-[400px] h-[350px]" src="https://media.tiffany.com/is/image/tiffanydm/WOT-LP-Recirc3-Desktop?$tile$&wid=988&hei=988&fmt=webp" alt="Paloma" />
                    <h1 className="align-middle text-center mt-2">“I was absolutely fascinated by the extraordinary vibrant gemstones nature can produce. My heart pushed me to go with the brightest of all.”</h1>
                    <p className="font-bold align-middle text-center">-Paloma Picasso</p>
                </div>
            </div>
            {/* our store */}
            <div>
              <h1 className='text-[35px] font-serif justify-center items-center text-center font-semibold mt-8'>Our Store</h1>
              <hr className="w-40 mb-5 border-t-2 border-pink-500 mx-auto" />
            </div>
           <div className="flex rounded-lg p-1 bg-pink-50 mt-16">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        className="h-[600px] w-full "
                        src={storeup}
                        alt="jewelry"
                    />
                </div>

                {/* Text Section */}
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <p className="text-[35px] font-serif justify-center items-center text-center font-semibold mb-4 ">Our Latest Store</p>
                    <hr className="w-72 mb-2 border-t-2 border-pink-500 mx-auto" />
                    <p className='text-lg font-serif justify-center items-center text-center'>Experience the extraordinary at new Blingg. <br /> Stores around the world.</p>
                </div>
            </div>
            {/* services */}
            <div className='mt-20'>
                <div className='flex text-center px-20 space-x-20 mt-20 justify-between w-full mb-20 bg-white'>
                    {services.map((item) => (
                        <div key={item.id}>
                            <img className='w-[80px] h-[80px] justify-between items-center ' src={item.image} alt={item.title} />
                            <h2 className='text-lg font-semibold text-start text-gray-600 capitalize font-serif'>{item.title}</h2>
                            <p className='text-sm text-gray-500 text-start '>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;