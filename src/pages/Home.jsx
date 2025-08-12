import React from "react";
import { FaCertificate } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About"; // ✅ New import
import Projects from "../components/projects";
import Qualification from "../components/Qualifications";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* About Section */}
      <About /> {/* ✅ New component */}
      {/* Qualification Section */}
      <Qualification />
      {/* Certificates Section */}
      <section id="certificates" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Full Stack Web Development
            </h3>
            <p className="mt-2 text-sm text-gray-600">XYZ Institute · 2024</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Android App Development
            </h3>
            <p className="mt-2 text-sm text-gray-600">ABC Academy · 2023</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Java Programming
            </h3>
            <p className="mt-2 text-sm text-gray-600">Coursera · 2022</p>
          </div>
        </div>
      </section>
      <Projects />
    </div>
  );
};

export default Home;
