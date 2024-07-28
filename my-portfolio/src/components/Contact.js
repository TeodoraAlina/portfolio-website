import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      ).join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className='relative bg-gray-300 font-roboto'>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-primary rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Innsbruck,+Austria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-primary bg-opacity-90 relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 w-full px-6 mb-4 lg:mb-0">
              <h2 className="title-font font-semibold text-secondary tracking-widest text-xs text-center">
                ADDRESS
              </h2>
              <p className="mt-1 text-accent">
                Innsbruck, Austria
              </p>
            </div>
            <div className="lg:w-1/2 w-full px-6 text-center">
              <h2 className="title-font font-semibold text-secondary tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-accent leading-relaxed break-words" href='mailto:alina.teower@gmail.com'>
                alina.teower@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-accent shadow-lg rounded-lg p-8"
        >
          <h2 className="text-primary text-3xl mb-4 font-semibold title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-6 text-secondary">
            If you're interested in working with me, let's talk!
            I'm excited to explore new opportunities.
          </p>
          <div className="relative mb-6">
            <label htmlFor="name" className="leading-7 text-sm text-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="message" className="leading-7 text-sm text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-800 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="text-accent bg-teal-600 border-0 py-3 px-6 focus:outline-none hover:bg-teal-700 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out">
              Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center mt-6 pb-6">
        <p className="leading-relaxed text-secondary mb-6">You can also find me on these platforms:</p>
        <div className="flex">
        <a href="https://www.linkedin.com/in/alina-teodora-brinzac/" className="text-primary mx-2 pr-6">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/TeodoraAlina" className="text-primary mx-2">
          <FaGithub size={40} />
        </a>
        </div>
      </div>
    </section>
  );
}