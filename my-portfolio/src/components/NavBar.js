import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const closeMenuOnLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => handleClickOutside(event);
    document.addEventListener("mousedown", handleDocumentClick);
    
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClickOutside]);

  return (
    <header className="bg-primary md:sticky top-0 z-10 shadow-lg">
      <div ref={menuRef} className="w-full max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto items-center">
          <a 
            href="#about" 
            className="title-font font-medium text-textPrimary mb-0 text-2xl" 
            aria-label={t('navbar.name')}>
            {t('navbar.name')}
          </a>
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              className="inline-flex items-center text-textPrimary focus:outline-none ml-2" 
              onClick={toggleMenu} 
              aria-label={t('navbar.toggle_menu')}
              aria-expanded={isOpen}>
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <nav className={`md:flex flex-grow items-center text-textPrimary ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:mr-auto md:ml-4 md:pl-6 md:border-l-2 md:border-accent md:space-x-5 space-y-2 md:space-y-0">
            <a href="#projects" className="hover:text-textHover transition duration-300 ease-in-out hover-scale md:mt-0 mt-4" onClick={closeMenuOnLinkClick}>
              {t('navbar.pastWork')}
            </a>
            <a href="#skills" className="hover:text-textHover transition duration-300 ease-in-out hover-scale" onClick={closeMenuOnLinkClick}>
              {t('navbar.skills')}
            </a>
          </div>
          <div className="flex items-center mt-2 md:mt-0 md:ml-auto space-x-2">
            <div className="hidden md:inline-flex">
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="inline-flex items-center border-0 py-1 px-3 text-textPrimary focus:outline-none hover:bg-accent rounded hover:text-textHover transition duration-300 ease-in-out ml-2"
              onClick={closeMenuOnLinkClick}>
              {t('navbar.getInTouch')}
              <ArrowRightIcon className="w-4 h-4 ml-1 animate-arrow" />
            </a>
            <div className="hidden md:inline-flex ml-2">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="flex md:hidden justify-center w-full mt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}