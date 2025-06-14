import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../Data/Data.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <p className="font-bold text-4xl text-blue-400">Siva Kumar</p>

        
        <ul className="hidden md:flex space-x-8 font-semibold text-blue-400 text-xl">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-blue-800 "
              >
                {item}
                <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-purple-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-purple-600 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col px-6 space-y-6 text-gray-800 text-xl font-semibold">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-purple-300 hover:text-purple-600 text-gray-800 transition-all duration-300 border-l-4 border-transparent"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
