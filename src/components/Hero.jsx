import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bgLight from "../assets/bg-light.png"; // wave background
import profilePic from "../assets/profile.jpg"; // your profile image

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 text-gray-900 bg-white"
      style={{
        backgroundImage: `url(${bgLight})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Social Icons */}
      <motion.div
        className="flex gap-4 mt-4 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
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
        className="mt-4 text-5xl sm:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Siddhesh
      </motion.h1>

      {/* Role */}
      <motion.p
        className="mt-2 text-lg sm:text-xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Full Stack Engineer
      </motion.p>
    </section>
  );
};

export default Hero;
