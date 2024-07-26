import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-primary md:sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a 
          href="#about" 
          className="title-font font-medium text-accent mb-4 md:mb-0 ml-3 text-2xl" 
          aria-label="About Alina Teodora Brinzac">
          Alina Teodora Brinzac
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-accent flex flex-wrap items-center text-gray-800 justify-center space-x-5">
          <a href="#projects" className="hover:text-accent transition duration-300 ease-in-out">
            Past Work
          </a>
          <a href="#skills" className="hover:text-accent transition duration-300 ease-in-out">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-3 text-accent focus:outline-none hover:bg-accent rounded hover:text-gray-600 mt-4 md:mt-0 transition duration-300 ease-in-out">
          Get in Touch
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}