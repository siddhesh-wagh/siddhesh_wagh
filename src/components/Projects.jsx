import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

import projectOne from "../assets/project/project-one.png";
import projectTwo from "../assets/project/project-two.png";
import projectThree from "../assets/project/project-three.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React & Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: projectOne,
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce application with cart & payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    image: projectTwo,
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecast app using OpenWeather API.",
    tech: ["React", "API", "Tailwind"],
    image: projectThree,
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/yourusername/weather-app",
  },
];

const Projects = ({ showAll = false }) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-14">Projects</h2>

        {/* Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 transition duration-300 hover:shadow-2xl flex flex-col
                ${index % 2 === 1 ? "md:translate-y-6" : ""}
                ${index % 3 === 2 ? "md:-translate-y-6" : ""}
              `}
            >
              {/* Image with zoom effect */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-gray-600 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg flex items-center gap-2 hover:bg-purple-50"
                  >
                    <FaCode /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="mt-14">
            <Link
              to="/projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              View More Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
