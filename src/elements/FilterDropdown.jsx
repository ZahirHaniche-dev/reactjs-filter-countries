import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/countries";

export default function FilterDropdown({ isDarkMode, onSelectRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionSelect = (region) => {
    onSelectRegion(region);
    setIsOpen(false);  // Fermer le dropdown après sélection
  };

  // Vérification que data est bien défini avant d'essayer d'extraire les régions
  const regions = data ? [...new Set(data.map(country => country.region))] : [];

  return (
    <div className="w-full p-2 md:max-w-none rounded-lg relative flex justify-end"
    style={{ marginTop: 0 }}>
      <div
        className={`w-full md:w-[50%] p-4 border-gray-300 bg-white shadow-2xl rounded-md flex items-center justify-between cursor-pointer
        ${isDarkMode ? 'dark shadow-md text-slate-50 ' : ''} `}
        onClick={toggleDropdown}
      >
        <span>Filter by Region</span>
        {isOpen ? (
          <ChevronUpIcon className={` w-5 h-5 text-gray-800
          ${isDarkMode ? 'text-slate-50' : ''} `} />
        ) : (
          <ChevronDownIcon className={` w-5 h-5 text-gray-800
            ${isDarkMode ? 'text-slate-50' : ''} `}  />
        )}
      </div>
      {isOpen && (
        <div className={`absolute w-full md:w-[50%] mt-16 bg-white border-gray-300 rounded-md shadow-2xl z-50
        ${isDarkMode ? 'dark shadow-md text-slate-50 ' : ''} `} >
          <div 
            className={`p-4 hover:bg-gray-100 cursor-pointer 
            ${isDarkMode ? 'hover:bg-gray-800' : ''} `}
            onClick={() => handleRegionSelect('All')}
          >
            All
          </div>
          {regions.map((region, index) => (
            <div 
              key={index} 
              className={`p-4 hover:bg-gray-100 cursor-pointer
            ${isDarkMode ? 'hover:bg-gray-800' : ''} `}
              onClick={() => handleRegionSelect(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  
  );
}
