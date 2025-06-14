import React from "react";

import { projects } from "../Data/Data.jsx";
const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Technologies:</strong> {project.tech}
              </p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
