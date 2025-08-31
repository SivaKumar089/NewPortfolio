import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-purple-50 to-purple-100 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-700"
        >
          About Me
        </motion.h2>

        
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 text-lg md:text-xl leading-loose text-justify bg-white p-6 rounded-xl shadow-lg"
        >
          I’m <span className="font-semibold text-purple-600">Siva Kumar</span>,
          a passionate and versatile{" "}
          <span className="text-purple-700 font-bold">
            Full Stack Developer
          </span>{" "}
          committed to crafting end-to-end web solutions. I specialize in
          building responsive, intuitive interfaces with{" "}
          <span className="font-semibold text-purple-600">React.js</span> and{" "}
          <span className="font-semibold text-purple-600">Tailwind CSS</span>,
          while also delivering robust backend services using{" "}
          <span className="font-semibold text-purple-600">Django</span> and REST
          APIs. My mission is to seamlessly combine clean UI design with
          powerful backend logic. I'm continuously learning and growing to
          master the complete product cycle—from database design to
          deployment—ensuring every line of code adds value.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
