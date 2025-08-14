import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bgLight from "../assets/bg-light.png";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 bg-gray-50"
      style={{
        backgroundImage: `url(${bgLight})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Profile + Text */}
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:-translate-x-60">
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text + Icons */}
        <div className="text-center sm:text-left">
          {/* Social Icons */}
          <motion.div
            className="flex gap-4 justify-center sm:justify-start text-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl sm:text-7xl font-bold leading-tight tracking-tight text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Siddhesh Wagh
          </motion.h1>

          {/* Role */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-600 tracking-wide "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Full Stack Engineer
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
