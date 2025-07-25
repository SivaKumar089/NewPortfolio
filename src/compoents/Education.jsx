import React from "react";
import { educationData } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Education = () => {
  return (
    <section
      id="education"
      data-aos="zoom-out"
      className="py-16 px-4 md:px-10 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          My Education
        </h2>

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
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-xl shadow-md hover:shadow-lg border border-transparent hover:border-purple-500 p-6 h-[200px] flex flex-col justify-between transition duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-purple-600 text-4xl transition-transform group-hover:scale-110">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-500">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Year of Passing:</span>{" "}
                      {edu.year}
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">Percentage:</span>{" "}
                      <span className="text-purple-600 font-semibold">
                        {edu.percentage}{edu.year==="2025"?" CGPA":" %"} 
                      </span>
                    </p>
                  </div>

                  <div className="mt-auto pt-4 text-center">
                    <div className="w-full h-[2px] bg-purple-200 group-hover:bg-purple-400 transition duration-300"></div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Education;
