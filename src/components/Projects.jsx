import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

// Import images
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
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
      </div>
    </section>
  );
};

export default Projects;
