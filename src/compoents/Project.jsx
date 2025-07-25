import React from "react";
import { projects } from "../Data/Data.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          My Projects
        </h2>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-2xl shadow-md border hover:border-blue-500 transition duration-300 p-6 flex flex-col justify-between h-[340px] sm:h-[280px]
 group"
                >
                  <div>
                    <div className="text-4xl mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.live}
                      target={
                        project.title === "Personal Portfolio Website"
                          ? ""
                          : "_blank"
                      }
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm transition flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        className="text-blue-600 border border-blue-500 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm transition flex items-center gap-2"
                      >
                        <FaGithub />
                        Explore Code
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
