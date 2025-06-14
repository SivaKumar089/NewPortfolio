import React from "react";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profilePic from "/profile.jpeg";
import { socialLinks } from "../Data/Data.jsx";

const Home = () => {
  return (
    <section id="home" data-aos="fade-down" className="w-full min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="container shadow-xl py-5 mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
       
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-purple-600">Siva Kumar</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-gray-600 mb-6 h-12">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Django Python Develper",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

         
          <div className="flex gap-4 justify-center md:justify-start mb-6">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 hover:bg-purple-600 p-3 rounded-full text-xl relative group transition duration-300"
              >
                {item.icon}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
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
