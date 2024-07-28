import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition duration-500 ease-in-out rounded-full bg-gray-800 dark:bg-gray-200"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;