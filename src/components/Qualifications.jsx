// src/components/Qualification.jsx
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "B.E. in Computer Engineering",
    institution: "ACPCE College of Engineering, Kharghar",
    year: "2022 - Present",
    details: "Currently pursuing 3rd Year, focusing on web and app development.",
  },
  {
    title: "Diploma in Computer Engineering",
    institution: "MSBTE",
    year: "2019 - 2022",
    details: "Specialized in software development and programming concepts.",
  },
  {
    title: "SSC",
    institution: "Maharashtra State Board",
    year: "2016",
    details: "Completed Secondary School Certificate with distinction.",
  },
];

// Animation variants
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Qualification = () => {
  return (
    <section id="qualification" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
          Qualification
        </h2>
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-600 h-full" />

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
                <div
                  className={`bg-white rounded-lg shadow-lg p-6 w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:ml-0"
                      : "md:ml-auto md:mr-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {qual.title}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {qual.institution}
                  </p>
                  <p className="text-sm text-gray-500">{qual.year}</p>
                  <p className="mt-2 text-gray-600">{qual.details}</p>
                </div>

                {/* Icon in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-purple-600 text-white rounded-full p-3 z-10">
                  <FaGraduationCap size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
