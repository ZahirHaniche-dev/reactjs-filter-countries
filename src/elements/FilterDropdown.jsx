import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/countries";

export default function FilterDropdown({ onSelectRegion }) {
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
    <div className="max-w-sm w-full rounded-lg relative flex justify-end">
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
        <div className="absolute w-[50%] mt-16 bg-white border-gray-300 rounded-md shadow-lg z-50">
          <div 
            className="p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRegionSelect('All')}
          >
            All
          </div>
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="p-4 hover:bg-gray-100 cursor-pointer"
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
