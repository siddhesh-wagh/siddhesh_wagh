import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // <-- your image here

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Siddhesh Wagh"
            className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-purple-600"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-purple-700 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm <span className="font-semibold">Siddhesh Wagh</span>, a passionate
            web developer and Computer Engineering student. I enjoy building
            modern, interactive, and meaningful digital experiences that push
            my skills to new heights.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Recently, I was honored to be in the <span className="font-semibold text-purple-600">
            Top 100</span> of GDG Hackathon 2025 — an achievement that inspires me
            to keep learning and innovating.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf" // Replace with your file
            download
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
