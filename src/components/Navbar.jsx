import React, { useState } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side (Desktop: Nav Links, Mobile: Hamburger) */}
        <div className="flex items-center">
          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#qualification" className="hover:text-gray-600">Qualification</a></li>
            <li><a href="#certificates" className="hover:text-gray-600">Certificates</a></li>
            <li><a href="#internships" className="hover:text-gray-600">Internships</a></li>
            <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
            <li><a href="/projects" className="text-gray-900 hover:text-gray-600">Projects</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-gray-900 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Right side (Moon Icon) */}
        <button
          className="text-gray-700 text-xl hover:text-gray-900 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          <FaMoon />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4">
          <button
            className="text-2xl mb-4 text-gray-700 hover:text-gray-900 transition"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-6 text-gray-800 font-medium">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#qualification" onClick={toggleMenu}>Qualification</a></li>
            <li><a href="#certificates" onClick={toggleMenu}>Certificates</a></li>
            <li><a href="#internships" onClick={toggleMenu}>Internships</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
