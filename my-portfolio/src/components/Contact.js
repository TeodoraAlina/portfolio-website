import React from 'react';

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
    <section id="contact" className='map-section'>
      <div className="container">
        <div className="map">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="map-iframe"
            src="https://www.google.com/maps/embed/v1/place?q=Innsbruck,+Austria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="map-info">
            <div className="address">
              <h2 className="address-title">
                ADDRESS
              </h2>
              <p className="address-text">
                Innsbruck, Austria
              </p>
            </div>
            <div className="email">
              <h2 className="email-title">
                EMAIL
              </h2>
              <a className="email-link" href='mailto:alina.teower@gmail.com'>
                alina.teower@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="form"
        >
          <h2 className="title">
            Get in Touch
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis.
          </p>
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="submit-button">
              Submit
          </button>
        </form>
      </div>
    </section>
  );
}