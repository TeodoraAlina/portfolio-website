import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-primary font-roboto">
            Hi, I'm Alina Teodora.
            <br className="lg:inline-block" />Lorem ipsum dolor sit amet.
          </h1>
          <p className="mb-8 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-accent bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-accent bg-textPrimary border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className= "grid min-h-[140px] w-medium place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <img
        className="object-cover object-center w-medium rounded-lg shadow-xl h-96 shadow-blue-gray-900/50"
        src='./assets/hero.jpeg'
        alt="hero"
        />
        </div>
      </div>
    </section>
  );
}
