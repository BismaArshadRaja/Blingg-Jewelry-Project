import React, { useRef, useEffect } from 'react';
import banner from '../assets/banner.mp4'; 

function MidBanner() {
  const videoRef = useRef(null);

 useEffect(() => {
  const video = videoRef.current;

  const loopVideo = () => {
    if (video.currentTime >= 20) {
      video.currentTime = 0; // Reset to start
      video.play();          // Play again
    }
  };

  video.addEventListener('timeupdate', loopVideo);
  return () => video.removeEventListener('timeupdate', loopVideo);
}, []);


  return (
    <div className="w-screen h-screen flex items-center justify-center mb-5">
      <div className="relative w-full h-[520px] overflow-hidden">

        {/* Local video file */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          autoPlay
          muted
          playsInline
        ></video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Text Content */}
        <div className="absolute z-10 ml-16 mt-16 mb-28 text-white">
          <h1 className="text-[50px] font-serif uppercase">
            Be always <br /> on trend
          </h1>
          <p className="mt-5 text-sm align-middle text-slate-200">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Ut elit tellus, <br /> luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.
          </p>
         
        </div>

        {/* Button */}
        <div className="absolute z-10 ml-16 mt-96">
          <button className="uppercase text-xs hover:bg-white hover:text-black border border-white text-white w-28 h-10">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
