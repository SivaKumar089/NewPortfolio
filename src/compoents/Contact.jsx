import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      e.preventDefault();
      setErrors(formErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-purple-50 to-white py-16 px-4 md:px-10"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-purple-700 mb-4"
          data-aos="zoom-in"
        >
          Contact Me
        </h2>
        <p
          className="text-center text-gray-600 mb-10"
          data-aos="fade-in"
          data-aos-delay="150"
        >
          Let's connect! Reach out to discuss opportunities or just say hi.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
        
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition text-lg">
              <IoCallSharp className="text-2xl" />
              <a
                href="tel:+919342474302"
                className="hover:underline"
              >
                +91 93424 74302
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition text-lg">
              <FaEnvelope className="text-2xl" />
              <a
                href="mailto:kumarsiva200426@gmail.com"
                className="hover:underline"
              >
                kumarsiva200426@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition text-lg">
              <FaMapMarkerAlt className="text-2xl" />
              <a
                href="https://www.google.com/maps/place/Rajapalayam,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:underline"
              >
                Rajapalayam, Tamil Nadu, India
              </a>
            </div>
          </div>

          <form
            action="https://formsubmit.co/kumarsiva200426@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.01] space-y-5"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-300" : "focus:ring-purple-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-300" : "focus:ring-purple-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-300"
                    : "focus:ring-purple-400"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Send Message
            </button>

            {submitted && Object.keys(errors).length === 0 && (
              <p className="text-green-600 font-medium text-center">
                Your message has been submitted!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
