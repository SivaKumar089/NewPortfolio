import React from "react";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profilePic from "/profile.jpeg";
import { socialLinks } from "../Data/Data.jsx";

const Home = () => {
  return (
    <section
      id="home"
      data-aos="fade-down"
      className="w-full min-h-screen flex items-center justify-center bg-gray-50 "
    >
      <div className="container shadow-xl py-5 mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Hello, I'm <span className="text-purple-600">Siva Kumar</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-gray-600 mb-6 h-12">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Django Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

        <div className="flex items-center gap-4 justify-start m-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-500 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-br from-purple-500 to-indigo-500"
              >
                {/* Render icon as component */}
                <item.icon className="text-2xl z-10" />

                {/* Ring effect */}
                <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-white transition-all duration-300"></div>

                {/* Tooltip */}
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-black/80 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                  {item.title}
                </span>
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center relative w-full">
          <img
            src={profilePic}
            alt="Siva Kumar"
            className="hidden md:block w-70 h-full object-cover rounded-xl shadow-xl"
          />

          <div
            className="md:hidden w-70 h-70 rounded-xl shadow-xl bg-cover bg-center mt-20"
            style={{ backgroundImage: `url(${profilePic})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
