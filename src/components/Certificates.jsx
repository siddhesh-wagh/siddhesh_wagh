// src/components/Certificates.jsx
import React from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Full Stack Web Development",
    provider: "XYZ Institute",
    year: "2024",
  },
  {
    title: "Android App Development",
    provider: "ABC Academy",
    year: "2023",
  },
  {
    title: "Java Programming",
    provider: "Coursera",
    year: "2022",
  },
];

// Animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.15 },
  }),
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col items-center transition duration-300 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg mb-4 text-white">
                <FaCertificate size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
              <p className="text-purple-600 font-medium">{cert.provider}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
