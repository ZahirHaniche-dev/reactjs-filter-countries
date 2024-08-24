import React from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';

export default function SearchInput({ isDarkMode, searchText, setSearchText }) {
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full p-2 md:max-w-none rounded-lg relative">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className={`w-full py-4 pl-10 border-gray-300 rounded-md 
        ${isDarkMode ? 'dark shadow-md text-slate-50 border-gray-300' : ''}`}
      />
      <MagnifyingGlassIcon className={`w-5 h-5 ml-2 text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2 
        ${isDarkMode ? 'dark shadow-md text-slate-50' : ''}`} />
  </div>

  );
}
