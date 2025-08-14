import React, { useState, useEffect } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setNavbarVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50 transform transition-all duration-700 ease-out ${
        navbarVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side: Moon Icon (Desktop) / Hamburger (Mobile) */}
        <div className="flex items-center space-x-4">
          {/* Moon on left for desktop */}
          <button
            className="hidden md:block text-gray-700 text-xl hover:text-gray-900 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <FaMoon />
          </button>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-gray-900 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#qualification" className="hover:text-gray-600">Qualification</a></li>
          <li><a href="#certificates" className="hover:text-gray-600">Certificates</a></li>
          <li><a href="#internships" className="hover:text-gray-600">Internships</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
          <li><a href="/projects" className="hover:text-gray-600">Projects</a></li>
        </ul>

        {/* Moon on right for mobile */}
        <button
          className="md:hidden text-gray-700 text-xl hover:text-gray-900 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          <FaMoon />
        </button>
      </div>

      {/* Overlay (click to close menu) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[9998]"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu - slides from left to right */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative px-6 py-4">
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
