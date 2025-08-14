import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bgLight from "../assets/bg-light.png";
import profilePic from "../assets/profile.jpg"; // your profile image

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 text-gray-900 bg-white"
      style={{
        backgroundImage: `url(${bgLight})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Profile + Text in Flex */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text + Icons */}
        <div className="text-center sm:text-left">
          {/* Social Icons */}
          <motion.div
            className="flex gap-4 justify-center sm:justify-start text-2xl mb-2"
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
            className="text-5xl sm:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Siddhesh
          </motion.h1>

          {/* Role */}
          <motion.p
            className="mt-2 text-lg sm:text-xl text-gray-700"
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
