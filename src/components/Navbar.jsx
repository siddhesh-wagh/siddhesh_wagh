import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Siddhesh</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-purple-600 transition-all">About</a></li>
          <li><a href="#qualification" className="hover:text-purple-600 transition-all">Qualification</a></li>
          <li><a href="#certificates" className="hover:text-purple-600 transition-all">Certificates</a></li>
          <li><a href="#internships" className="hover:text-purple-600 transition-all">Internships</a></li>
          <li><a href="#contact" className="hover:text-purple-600 transition-all">Contact</a></li>
          <li>
            <a href="/projects" className="text-white bg-purple-600 px-3 py-1 rounded hover:bg-purple-700">
              Projects
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-purple-700 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#qualification" onClick={() => setMenuOpen(false)}>Qualification</a></li>
            <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
            <li><a href="#internships" onClick={() => setMenuOpen(false)}>Internships</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a href="/projects" className="text-white bg-purple-600 px-3 py-1 rounded hover:bg-purple-700" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
