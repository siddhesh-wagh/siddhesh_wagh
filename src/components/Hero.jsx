import React from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-6
             bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 text-white"
    >
      {/* Content Wrapper with padding for fixed Navbar */}
      <div className="pt-24">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-yellow-300">Siddhesh</span> 🚀
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Passionate Web Developer crafting{" "}
          <span className="font-semibold text-yellow-300">modern</span> &{" "}
          <span className="font-semibold text-yellow-300">interactive</span>{" "}
          experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full text-lg font-semibold shadow-lg
                       hover:bg-yellow-300 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <FaRocket /> View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-yellow-300 text-yellow-300 rounded-full text-lg font-semibold
                       hover:bg-yellow-300 hover:text-gray-900 hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
