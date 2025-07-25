import React from "react";
import { skillsData } from "../Data/Data.jsx";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 py-16 bg-gradient-to-br from-purple-50 to-purple-100"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12 text-purple-700"
      >
        🚀 My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              custom={index}
              variants={fadeIn}
            >
              {/* Icon + Name + Progress */}
              <div className=" flex items-center justify-center gap-10 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-inner bg-purple-100">
                  <Icon className={`text-xl ${skill.color}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {skill.name}
                </h3>

                {/* Circle Progress */}
                <motion.div
                  className="relative w-16 h-16"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 60 }}
                >
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-purple-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="100, 100"
                      strokeDashoffset={100 - skill.level}
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 100 - skill.level }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-purple-700">
                    {skill.level}%
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
