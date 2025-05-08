import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SmallDash from "./Small Dash";

const Header = () => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [desh, setDesh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const profile = [
    {
      name: "Profile",
      icon: "",
      color: "red",
    },
    {
      name: "Setting",
      icon: "",
      color: "blue",
      action: () => navigate("/setting"),
    },
    {
      name: "Logout",
      icon: "",
      color: "orange",
      action: handleLogout,
    },
  ];

  const country = [
    {
      name: "English",
      img: "https://d91ztyz4qy326.cloudfront.net/storeking/1/english.png",
    },
    {
      name: "Bangla",
      img: "",
    },
    {
      name: "Arabic",
      img: "",
    },
  ];

  const Dropdown = ({ data }) => (
    <div className="absolute bg-white shadow-md rounded-md mt-2 right-0 z-50">
      {data.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className={`block px-4 py-2 text-left text-${item.color || "black"}`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <img
          src="https://demo.storeking.xyz/images/required/theme-logo.png"
          className="w-24"
          alt="logo"
        />

        <div className="flex items-center flex-shrink-0">
          <i className="fa-solid fa-magnifying-glass mr-2" />
          <input
            type="text"
            className="bg-slate-100 hover:bg-white border border-slate-100  focus:outline-none focus:border focus:border-green-500 rounded-full w-96 h-9 p-2"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button onClick={() => setShow(!show)} className="flex items-center">
              <img
                src="https://d91ztyz4qy326.cloudfront.net/storeking/1/english.png"
                className="w-6 h-6 mr-1"
                alt="language"
              />
              English <i className="fa-solid fa-angle-down ml-1"></i>
            </button>
            {show && <Dropdown data={country} />}
          </div>

          <div className="flex">
            <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1">
              <i className="fa-regular fa-heart text-base text-white"></i>
            </span>
            Favorite
          </div>

          <div className="flex">
            <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1">
              <i className="fa-regular fa-user text-base text-white"></i>
            </span>

            {token ? (
              <div className="relative inline-block">
                <button onClick={() => setDesh(!desh)}>Profile</button>
                {desh && <Dropdown data={profile} />}
              </div>
            ) : (
              <Link to="/login">Account</Link>
            )}
          </div>
        </div>
      </div>
      <hr className="border border-gray-100 w-full" />
    </>
  );
};

export default Header;
