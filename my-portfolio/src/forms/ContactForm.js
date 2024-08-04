import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const formId = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formId);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [buttonText, setButtonText] = useState('Submit');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { t } = useTranslation();

  const validateField = (name, value) => {
    let error;
    if (!value) {
      error = t(`${name}Required`);
    }
    return error;
  };

  const validateForm = (event) => {
    const { name, email, message } = event.target.elements;
    const errors = {};
    if (!name.value) errors.name = t('contactForm.nameRequired');
    if (!email.value) errors.email = t('contactForm.emailRequired');
    if (!message.value) errors.message = t('contactForm.messageRequired');
    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm(event);
    if (Object.keys(formErrors).length === 0) {
      handleSubmit(event).then(() => {
        setFormValues({ name: '', email: '', message: '' });
        setButtonText(t('contactForm.submitted'));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setButtonText(t('contactForm.submit'));
          setShowSuccessMessage(false);
        }, 3000);
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
          {t('contactForm.nameLabel')}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          aria-label={t('contactForm.nameLabel')}
          value={formValues.name}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out`}
          placeholder={t('contactForm.nameLabel')}
          onChange={handleChange}
        />
        <ValidationError 
          prefix={t('contactForm.nameLabel')} 
          field="name"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="leading-7 text-sm text-secondary">
          {t('contactForm.emailLabel')}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          aria-label={t('contactForm.emailLabel')}
          value={formValues.email}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out`}
          placeholder={t('contactForm.emailLabel')}
          onChange={handleChange}
        />
        <ValidationError 
          prefix={t('contactForm.emailLabel')} 
          field="email"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div className="relative mb-6">
        <label htmlFor="message" className="leading-7 text-sm text-secondary">
          {t('contactForm.messageLabel')}
        </label>
        <textarea
          id="message"
          name="message"
          aria-label={t('contactForm.messageLabel')}
          value={formValues.message}
          className={`contact-input w-full bg-gray-100 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-800 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out`}
          placeholder={t('contactForm.messageLabel')}
          onChange={handleChange}
        />
        <ValidationError 
          prefix={t('contactForm.messageLabel')} 
          field="message"
          errors={state.errors}
          aria-live="assertive"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="flex items-center justify-center text-darkerSecondary bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-teal-700 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out"
      >
        {buttonText === t('contactForm.submitted') ? (
          <>
            <CheckCircleIcon className="h-5 w-5 text-darkerSecondary mr-2" />
            <span>{t('contactForm.submitted')}</span>
          </>
        ) : state.submitting ? (
          t('contactForm.submitting')
        ) : (
          t('contactForm.submit')
        )}
      </button>
      {showSuccessMessage && (
        <div className="flex items-center mt-4 text-secondary">
          <p>{t('contactForm.successMessage')}</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;