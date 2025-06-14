import React from "react";
import { educationData } from "../Data/Data";

const Education = () => {
  return (
    <section
      id="education"
      data-aos="zoom-out"
      className="py-16 px-4 md:px-10 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          Education
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-purple-300 transition duration-300 border hover:border-purple-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-purple-600 text-4xl transition-transform group-hover:scale-110">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Year of Passing: {edu.year}
                </p>
                <p className="mt-4 text-lg font-semibold text-purple-600">
                  Percentage: <span className="text-lg">{edu.percentage}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
