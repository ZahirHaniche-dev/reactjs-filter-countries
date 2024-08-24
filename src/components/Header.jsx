import { useNavigate } from 'react-router-dom';
import DarkModeButton from './DarkModeButton'
import React, { useState } from 'react';

export default function Header({toggleDarkMode, isDarkMode}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };


 
  return (
    <header className={`items-center p-4 md:p-8 bg-white w-full  shadow-md border-gray-200  ${isDarkMode ? 'dark shadow-md text-slate-50 border-gray-700' : ''}`} >
      <div className="px-4 md:px-24 flex justify-between">
        <h1 onClick={handleClick} className="text-lg md:text-xl font-bold cursor-pointer">
          Where in the world?
        </h1>
        <DarkModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </header>
  )
}
