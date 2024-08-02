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
        className="inline-flex items-center text-accent bg-darkerSecondary border-0 py-1 px-3 focus:outline-none hover:bg-accentHover rounded text-sm"
      >
        <span className="mr-1">{i18n.language.toUpperCase()}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-darkerPrimary border border-secondary rounded-md shadow-lg z-20">
          <button
            onClick={() => handleLanguageChange('en')}
            className="w-full text-left px-3 py-1 text-secondary hover:text-textHover focus:outline-none"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className="w-full text-left px-3 py-1 text-secondary hover:text-textHover focus:outline-none"
          >
            Deutsch
          </button>
          <button
            onClick={() => handleLanguageChange('ro')}
            className="w-full text-left px-3 py-1 text-secondary hover:text-textHover focus:outline-none"
          >
            Română
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;