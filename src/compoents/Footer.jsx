import React from "react";
import {  navItems, socialLinks } from "../Data/Data";

navItems
const Footer = () => {

  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo / Brand */}
        <div>
          <h1 className="text-2xl font-bold text-purple-400 mb-2">
            Siva Kumar
          </h1>
          <p className="text-sm text-gray-400">
            Passionate Full Stack Developer building modern web applications.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {navItems.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-500 relative group transition"
              >
                {item.icon}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Siva Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
