import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/solid';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-accent bg-darkerSecondary border-0 py-1 px-3 focus:outline-none rounded text-sm transition duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="mr-1">{i18n.language.toUpperCase()}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-darkerPrimary border border-secondary rounded-md shadow-lg z-20">
          <button
            onClick={() => handleLanguageChange('en')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-secondaryButtonHover hover:text-textHover focus:outline-none transition duration-300 ease-in-out"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-secondaryButtonHover hover:text-textHover focus:outline-none transition duration-300 ease-in-out"
          >
            Deutsch
          </button>
          <button
            onClick={() => handleLanguageChange('ro')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-secondaryButtonHover hover:text-textHover focus:outline-none transition duration-300 ease-in-out"
          >
            Română
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;