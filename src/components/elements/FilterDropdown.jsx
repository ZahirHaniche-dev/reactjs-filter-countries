import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-sm w-full py-8 rounded-lg relative flex justify-end">
      <div
        className="w-[50%] p-4 border-gray-300 bg-white rounded-md shadow-sm flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>Filter by Region</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-800" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-800" />
        )}
      </div>
      {isOpen && (
        <div className="absolute w-[50%] mt-16 bg-white border-gray-300 rounded-md shadow-lg">
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Africa</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">America</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Asia</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Europe</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Oceania</div>
        </div>
      )}
    </div>
  );
}
