// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Hey, I'm <span className="text-yellow-400">Siddhesh</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light">
          Passionate Web Developer crafting modern & interactive experiences.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
