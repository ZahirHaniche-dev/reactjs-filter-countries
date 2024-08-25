import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function DarkModeButton({ toggleDarkMode, isDarkMode }) {
  return (
    <>
      <button 
        onClick={toggleDarkMode} 
        className="flex items-center text-base font-bold p-2 rounded transition-colors duration-300 
        hover:bg-gray-200 dark:hover:bg-gray-700"
        >
        {isDarkMode ? (
            <SunIcon className="w-5 h-5 mr-2 text-yellow-500" />
        ) : (
            <MoonIcon className="w-5 h-5 mr-2 text-gray-800" />
        )}
        <span className="hidden sm:inline">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
        </button>
    </>
  );
}
