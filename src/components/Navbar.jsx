import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Siddhesh</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-purple-600 transition-all">About</a>
          </li>
          <li>
            <a href="#qualification" className="hover:text-purple-600 transition-all">Qualification</a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-purple-600 transition-all">Certificates</a>
          </li>
          <li>
            <a href="#internships" className="hover:text-purple-600 transition-all">Internships</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600 transition-all">Contact</a>
          </li>
          <li>
            <a href="/projects" className="text-white bg-purple-600 px-3 py-1 rounded hover:bg-purple-700">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
