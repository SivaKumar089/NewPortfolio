import React from "react";
import { skillsData } from "../Data/Data.jsx";

const Skills = () => {
  return (
    <section
      id="skills"
      data-aos="slide-right"
      className="px-6 md:px-16 bg-gray-50 mt-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-600">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className={`text-3xl ${skill.color}`} />
                <h3 className="text-xl font-semibold text-gray-700">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-right text-gray-500">
                {skill.level}%
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
