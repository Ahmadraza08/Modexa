import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const location = useLocation();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-3 px-4 sm:px-16 font-medium bg-white relative z-50">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Desktop Navbar */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {["/", "/about", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive ? "text-black font-semibold" : "hover:text-gray-900"
              }`
            }
          >
            {path.replace("/", "").toUpperCase() || "HOME"}
            <hr
              className={`w-2/4 border-none h-[2px] bg-black ${
                location.pathname === path ? "block" : "hidden"
              }`}
            />
          </NavLink>
        ))}
      </ul>

      {/* Desktop Profile */}
      {/* <div className="hidden sm:flex items-center gap-4">
        {token ? (
          <div className="relative group">
            <img className="w-6 cursor-pointer" src={assets.profile_icon} alt="Profile" />
            <div className="group-hover:block hidden absolute right-0 mt-2 w-36 bg-gray-100 text-gray-900 rounded shadow-lg">
              <p className="py-2 px-4 cursor-pointer hover:bg-gray-200" onClick={logout}>
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-1 rounded bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
          >
            Login
          </button>
        )}
      </div> */}
      <div className="mt-auto p-6 hidden sm:flex items-center gap-4">
            {token ? (
              <button
                onClick={logout}
                className="w-full px-4 py-2 rounded bg-black text-white transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="w-full px-4 py-2 rounded bg-black text-white transition"
              >
                Login
              </button>
            )}
          </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-xl overflow-hidden transition-all duration-300 z-50 ${
          visible ? "w-3/4" : "w-0"
        }`}
      >
        <div className="flex flex-col text-black h-full">
          {/* Close */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-amber-100 transition"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          {/* Mobile Links */}
          {["/", "/about", "/contact"].map((path, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              to={path}
              className="py-4 pl-6 border-b hover:bg-amber-100 transition"
            >
              {path.replace("/", "").toUpperCase() || "HOME"}
            </NavLink>
          ))}

          {/* Mobile Login/Logout */}
          <div className="mt-auto p-6">
            {token ? (
              <button
                onClick={logout}
                className="w-full px-4 py-2 rounded bg-amber-200 text-amber-900 hover:bg-amber-300 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="w-full px-4 py-2 rounded bg-amber-200 text-amber-900 hover:bg-amber-300 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
