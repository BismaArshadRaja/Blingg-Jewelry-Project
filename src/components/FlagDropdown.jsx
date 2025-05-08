import React, { useState } from "react";

const FlagDropdown = () => {
  const [flag, setFlag] = useState([
    {
      name: "English",
      img: "https://d91ztyz4qy326.cloudfront.net/storeking/1/english.png",
    },
    {
      name: "Bangla",
      img: "https://d91ztyz4qy326.cloudfront.net/storeking/2/bangla.png",
    },
    {
      name: "Arabic",
      img: "https://d91ztyz4qy326.cloudfront.net/storeking/3/arabic.png",
    },
  ]);

  return (
    <div className="absolute top-8 w-24 border bg-white border-gray-400 rounded-md p-1">
      {flag.map((item) => (
        <div className="flex justify-between">
          <i class={`${item.img} ml-1`}></i>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FlagDropdown;