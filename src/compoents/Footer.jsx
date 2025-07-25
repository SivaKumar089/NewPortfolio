import React from "react";
import { navItems, socialLinks } from "../Data/Data";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-purple-400 mb-3">
            Siva Kumar
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Full Stack Developer passionate about building sleek, scalable web
            apps using modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {navItems.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white font-medium transition duration-300 hover:pl-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Follow Me
          </h2>
          <div className="flex justify-center md:justify-start gap-5">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-2xl transition-transform transform hover:scale-110 text-gray-400"
              >
                {/* Render icon as component */}
                <item.icon
                  className={`transition-colors duration-300 group-hover:${item.color}`}
                />

                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 whitespace-nowrap">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-500 mt-12 border-t pt-6 border-gray-700">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-purple-400">Siva Kumar</span>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
