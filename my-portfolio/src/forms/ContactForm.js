import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const formId = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formId);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="relative mb-6">
        <label htmlFor="name" className="leading-7 text-sm text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Your Name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="leading-7 text-sm text-secondary">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Your Email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
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
          placeholder="Your Message"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="text-darkerSecondary bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-teal-700 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out"
      >
        {state.submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;