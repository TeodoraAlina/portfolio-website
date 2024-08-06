import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/solid';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-accent bg-gray-800 dark:bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-sm transition duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="mr-1">{i18n.language.toUpperCase()}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-gray-800 dark:bg-gray-200 border border-secondary rounded-md shadow-lg z-20">
          <button
            onClick={() => handleLanguageChange('en')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-accent hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus:outline-none transition duration-300 ease-in-out"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-accent hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus:outline-none transition duration-300 ease-in-out"
          >
            Deutsch
          </button>
          <button
            onClick={() => handleLanguageChange('ro')}
            className="w-full text-left px-3 py-1 text-secondary hover:bg-accent hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus:outline-none transition duration-300 ease-in-out"
          >
            Română
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;