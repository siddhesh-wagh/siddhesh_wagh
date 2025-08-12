import React from "react";
import { FaCertificate } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About"; // ✅ New import
import Projects from "../components/projects";
import Qualification from "../components/Qualifications";
import Certificates  from "../components/Certificates";
import Internships  from "../components/Internships";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* About Section */}
      <About /> {/* ✅ New component */}
      {/* Qualification Section */}
      <Qualification />
      {/* Certificates Section */}
      <Certificates />
      {/* Internship Section */}
      <Internships />
      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default Home;
