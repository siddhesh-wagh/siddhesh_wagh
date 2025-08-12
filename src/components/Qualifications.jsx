// src/components/Qualification.jsx
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "B.E. in Computer Engineering",
    institution: "ACPCE College of Engineering, Kharghar",
    year: "2023 - Present",
    details: "Currently pursuing 4rd Year, focusing on web and app development.",
  },
  {
    title: "Diploma in Computer Engineering",
    institution: "MSBTE",
    year: "2020 - 2023",
    details: "Specialized in software development and programming concepts.",
  },
  {
    title: "SSC",
    institution: "Maharashtra State Board",
    year: "2020",
    details: "Completed Secondary School Certificate with distinction.",
  },
];

// Animation variants
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80, scale: 0.95 },
  hiddenRight: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Qualification = () => {
  return (
    <section id="qualification" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Qualification
        </motion.h2>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full shadow-lg" />

          <div className="space-y-20">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`bg-white rounded-2xl shadow-xl p-6 w-full md:w-5/12 border border-purple-100 hover:shadow-2xl transition duration-300 ${
                    index % 2 === 0
                      ? "md:mr-auto md:ml-0"
                      : "md:ml-auto md:mr-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800">
                    {qual.title}
                  </h3>
                  <p className="text-purple-600 font-semibold text-lg">
                    {qual.institution}
                  </p>
                  <p className="text-sm text-gray-500 italic">{qual.year}</p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {qual.details}
                  </p>
                </motion.div>

                {/* Icon in center */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full p-4 shadow-lg z-10 border-4 border-white"
                >
                  <FaGraduationCap size={24} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
