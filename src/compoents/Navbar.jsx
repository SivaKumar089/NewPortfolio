import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../Data/Data.jsx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
          Siva Kumar
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium text-gray-600">
          {navItems.map((item) => (
            <li key={item} className="group relative cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-300 hover:text-blue-700"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-600 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-blue-600"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-6 pt-6 text-lg font-medium text-gray-800">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
