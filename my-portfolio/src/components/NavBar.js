import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary bg-opacity-90 md:sticky top-0 z-10 shadow-lg">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto">
          <a 
            href="#about" 
            className="title-font font-medium text-accent mb-4 md:mb-0 ml-3 text-2xl" 
            aria-label="About Alina Teodora Brinzac">
            Alina Teodora Brinzac
          </a>
          <button 
            className="inline-flex items-center md:hidden text-accent focus:outline-none ml-auto" 
            onClick={toggleMenu} 
            aria-label="Toggle menu">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`md:flex flex-grow items-center text-gray-800 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:mr-auto md:ml-4 md:pl-6 md:border-l-2 md:border-accent md:space-x-5 space-y-2 md:space-y-0">
            <a href="#projects" className="hover:text-accent transition duration-300 ease-in-out hover-scale">
              Past Work
            </a>
            <a href="#skills" className="hover:text-accent transition duration-300 ease-in-out hover-scale">
              Skills
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center border-0 py-1 px-3 text-accent focus:outline-none hover:bg-accent rounded hover:text-gray-600 transition duration-300 ease-in-out mt-2 md:mt-0 md:ml-auto">
            Get in Touch
            <ArrowRightIcon className="w-4 h-4 ml-1 animate-arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}