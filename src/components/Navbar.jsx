import React, { useState } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Moon Icon on the left */}
        <button
          className="text-gray-700 text-xl hover:text-gray-900 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          <FaMoon />
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><a href="#about" className="hover:text-gray-600 transition-colors duration-200">About</a></li>
          <li><a href="#qualification" className="hover:text-gray-600 transition-colors duration-200">Qualification</a></li>
          <li><a href="#certificates" className="hover:text-gray-600 transition-colors duration-200">Certificates</a></li>
          <li><a href="#internships" className="hover:text-gray-600 transition-colors duration-200">Internships</a></li>
          <li><a href="#contact" className="hover:text-gray-600 transition-colors duration-200">Contact</a></li>
          <li><a href="/projects" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Projects</a></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner px-8 py-4">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
            <li><a href="#about" className="hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>About</a></li>
            <li><a href="#qualification" className="hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>Qualification</a></li>
            <li><a href="#certificates" className="hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>Certificates</a></li>
            <li><a href="#internships" className="hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>Internships</a></li>
            <li><a href="#contact" className="hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>Contact</a></li>
            <li><a href="/projects" className="text-gray-900 hover:text-gray-600 transition-colors duration-200" onClick={toggleMenu}>Projects</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
