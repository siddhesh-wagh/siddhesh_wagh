import React from "react";
import { FaCertificate } from "react-icons/fa";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="pt-24">
      <Hero />

      {/* About Section */}
      <section id="about" className="p-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm Siddhesh — a passionate developer focused on building creative,
          useful, and visually appealing applications.
        </p>
      </section>

      {/* Qualification Section */}
      <section id="qualification" className="p-10 bg-white text-center mt-10">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">
          Qualification
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
          <div>
            <h3 className="text-xl font-bold">B.E. in Computer Engineering</h3>
            <p>Pune University – 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              Diploma in Computer Engineering
            </h3>
            <p>MSBTE – 2019</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">SSC</h3>
            <p>Maharashtra State Board – 2016</p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Full Stack Web Development
            </h3>
            <p className="mt-2 text-sm text-gray-600">XYZ Institute · 2024</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Android App Development
            </h3>
            <p className="mt-2 text-sm text-gray-600">ABC Academy · 2023</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl">
            <FaCertificate className="text-purple-600 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Java Programming
            </h3>
            <p className="mt-2 text-sm text-gray-600">Coursera · 2022</p>
          </div>
        </div>
      </section>

      {/* You can add Internships, Contact, and other sections below */}
    </div>
  );
};

export default Home;
