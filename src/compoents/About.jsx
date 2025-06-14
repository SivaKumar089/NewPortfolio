import React from "react";

const About = () => {
  return (
    <section
      id="about"
      data-aos="slide-right"
      className="w-full bg-gray-50 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">
          About Me
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
          I’m <span className="font-semibold text-purple-600">Siva Kumar</span>,
          a dedicated and self-driven Full Stack Developer with a strong
          foundation in both frontend and backend technologies. My passion lies
          in building efficient, scalable, and user-friendly web applications. I
          specialize in creating responsive interfaces using{" "}
          <span className="font-medium text-purple-600">React.js</span> and{" "}
          <span className="font-medium text-purple-600">Tailwind CSS</span>,
          while also working on robust backend systems with{" "}
          <span className="font-medium text-purple-600">Django</span> and REST
          APIs. With every project, I aim to bridge the gap between clean design
          and powerful functionality. Currently, I’m expanding my expertise in
          full stack development to become a versatile developer capable of
          handling complete product cycles — from database design to deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
