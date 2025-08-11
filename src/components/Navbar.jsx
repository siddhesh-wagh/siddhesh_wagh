import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-700 tracking-wide">
          Siddhesh
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#qualification"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Qualification
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              href="#internships"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Internships
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
