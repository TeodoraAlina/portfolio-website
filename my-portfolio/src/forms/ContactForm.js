import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const formId = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formId);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const validateField = (name, value) => {
    let error;
    if (!value) {
      error = `${name} is required`;
    }
    return error;
  };

  const validateForm = (event) => {
    const { name, email, message } = event.target.elements;
    const errors = {};
    if (!name.value) errors.name = 'Name is required';
    if (!email.value) errors.email = 'Email is required';
    if (!message.value) errors.message = 'Message is required';
    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm(event);
    if (Object.keys(formErrors).length === 0) {
      handleSubmit(event).then(() => {
        setFormValues({ name: '', email: '', message: '' });
      });
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: validateField(name.charAt(0).toUpperCase() + name.slice(1), value)
    }));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <div className="relative mb-6">
        <label htmlFor="name" className="leading-7 text-sm text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          aria-label="Name"
          value={formValues.name}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out`}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="leading-7 text-sm text-secondary">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          aria-label="Email"
          value={formValues.email}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out`}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div className="relative mb-6">
        <label htmlFor="message" className="leading-7 text-sm text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          aria-label="Message"
          value={formValues.message}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-800 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out`}
          placeholder="Your Message"
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="text-darkerSecondary bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-teal-700 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out"
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
      {state.succeeded && <p className="text-secondary mt-4">Thank you for your message! I will get back to you soon.</p>}
    </form>
  );
}

export default ContactForm;