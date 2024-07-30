import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from '../forms/ContactForm';


export default function Contact() {
  return (
    <section id="contact" className='relative font-roboto'>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-darkerPrimary rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src={process.env.REACT_APP_GOOGLE_MAPS_SRC}
          />
          <div className="bg-darkerPrimary bg-opacity-90 relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 w-full px-6 mb-4 lg:mb-0">
              <h2 className="title-font font-semibold text-darkerSecondary tracking-widest text-xs text-center">
                ADDRESS
              </h2>
              <p className="mt-1 text-secondary">
                Innsbruck, Austria
              </p>
            </div>
            <div className="lg:w-1/2 w-full px-6 text-center">
              <h2 className="title-font font-semibold text-darkerSecondary tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-secondary leading-relaxed break-words" href='mailto:alina.teower@gmail.com'>
                alina.teower@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-darkerSecondary shadow-lg rounded-lg p-8">
          <h2 className="text-primary text-3xl mb-4 font-semibold title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-6 text-secondary">
            If you're interested in working with me, let's talk!
            I'm excited to explore new opportunities.
          </p>
          <ContactForm />
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 pb-6">
        <p className="leading-relaxed text-darkerSecondary mb-6">You can also find me on these platforms:</p>
        <div className="flex">
          <a href="https://www.linkedin.com/in/alina-teodora-brinzac/" className="text-darkerPrimary mx-2 pr-6">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/TeodoraAlina" className="text-darkerPrimary mx-2">
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}