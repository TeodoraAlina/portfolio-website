import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';

export default function Navbar() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
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

  const handleLogoError = useCallback(() => {
    setLogoFailed(true);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => handleClickOutside(event);
    document.addEventListener("mousedown", handleDocumentClick);
    
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClickOutside]);

  return (
    <header 
      className={`md:sticky top-0 z-10 shadow-lg bg-navbar font-fira-code`}
    >
      <div ref={menuRef} className="w-full max-w-7xl mx-auto flex flex-wrap p-4 pt-2 pb-3 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto items-center">
          <a
            href="#about"
            className={logoFailed ? "" : "pt-4 md:pt-6"}
            aria-label={t('navbar.name')}>
             {logoFailed ? (
             <span className="text-textPrimary text-xl">
                Alina Teodora Brinzac
             </span>
            ) : (
              <img
                src={theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo.png'}
                alt="Logo"
                className="h-10 md:h-12 object-contain"
                onError={handleLogoError}
              />
            )}
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
          <div className="flex flex-col md:flex-row md:mr-auto md:ml-4 md:border-l-2 md:border-accent md:h-10 md:items-center md:space-x-2 space-y-2 md:space-y-0">
            <a href="#projects" className="text-sm border-0 py-1 px-2 text-textPrimary focus:outline-none hover:bg-accent rounded hover:text-textHover transition duration-300 ease-in-out ml-2" onClick={closeMenuOnLinkClick}>
              {t('navbar.pastWork')}
            </a>
            <a href="#skills" className="text-sm border-0 py-1 px-2 text-textPrimary focus:outline-none hover:bg-accent rounded hover:text-textHover transition duration-300 ease-in-out ml-2" onClick={closeMenuOnLinkClick}>
              {t('navbar.skills')}
            </a>
          </div>
          <div className="flex items-center mt-2 md:mt-0 md:ml-auto space-x-2">
            <div className="hidden md:inline-flex">
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="text-sm inline-flex items-center border-0 py-1 px-3 text-textPrimary focus:outline-none hover:bg-accent rounded hover:text-textHover transition duration-300 ease-in-out ml-2"
              onClick={closeMenuOnLinkClick}>
              {t('navbar.getInTouch')}
              <ArrowRightIcon className="w-4 h-4 ml-1 animate-arrow" />
            </a>
            <div className="text-sm hidden md:inline-flex ml-2">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="text-sm flex md:hidden justify-center w-full mt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}