// src/components/Internships.jsx
import React from "react";
import { FaBuilding, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const internships = [
  {
    role: "Frontend Developer Intern",
    company: "TechNova Solutions",
    period: "Jun 2024 – Aug 2024",
    description: "Worked on React-based web applications, optimizing performance and improving UI/UX.",
    icon: <FaLaptopCode size={26} />,
  },
  {
    role: "Mobile App Developer Intern",
    company: "Appify Labs",
    period: "Jan 2024 – Mar 2024",
    description: "Built and maintained cross-platform apps using React Native with API integration.",
    icon: <FaMobileAlt size={26} />,
  },
  {
    role: "Web Development Intern",
    company: "Pixel Works",
    period: "Sep 2023 – Nov 2023",
    description: "Assisted in developing e-commerce features and worked on responsive design enhancements.",
    icon: <FaBuilding size={26} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Internships
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg mb-4 text-white">
                {intern.icon}
              </div>
              {/* Role */}
              <h3 className="text-lg font-bold text-gray-800">{intern.role}</h3>
              {/* Company */}
              <p className="text-purple-600 font-medium">{intern.company}</p>
              {/* Period */}
              <p className="text-gray-500 text-sm mb-2">{intern.period}</p>
              {/* Description */}
              <p className="text-gray-600 text-sm">{intern.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
