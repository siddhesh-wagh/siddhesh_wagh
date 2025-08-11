import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-50 to-white px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-purple-600">Siddhesh</span> 🚀
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Passionate Web Developer crafting <span className="font-semibold text-purple-600">modern</span> &{" "}
        <span className="font-semibold text-purple-600">interactive</span> experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg flex items-center space-x-2 hover:bg-purple-700 transition-all"
        >
          <span>View Projects</span>
          <FaArrowRight />
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg shadow-lg hover:bg-purple-50 transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
