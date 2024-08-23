import React from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';

export default function SearchInput({ searchText, setSearchText }) {
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="max-w-sm w-full rounded-lg relative">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className="w-full py-4 pl-10 border-gray-300 rounded-md"
      />
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
