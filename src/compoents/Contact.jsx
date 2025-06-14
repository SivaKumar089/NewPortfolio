import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-gray-100 py-16 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-4">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Let's connect! Reach out to discuss opportunities or just say hi.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition">
              <FaPhone className="text-2xl" />
              <span className="text-lg">+91 93424 74302</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition">
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">kumarsiva200426@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition">
              <FaMapMarkerAlt className="text-2xl" />
              <span className="text-lg">Rajaplaayam, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow-lg space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
