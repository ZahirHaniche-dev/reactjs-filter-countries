import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CountryCard({selectedCountryCard}) {
  
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  console.log(selectedCountryCard);
  

  return (
    <>
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 mb-12">
                <button onClick={handleClick}
                className="flex items-center border-gray-300 rounded-lg shadow-sm bg-white px-4 py-2 mb-4 w-min">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                <span className="p-2 text-sm">Back</span>
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col space-y-4">
                <div className="mb-6">
                    <img src={selectedCountryCard.flags.svg} alt={`${selectedCountryCard.name} flag`} className="w-full h-auto object-cover" />
                </div>
                </div>
                <div className="flex flex-col space-y-4 justify-center pl-0 md:pl-32">
                <h2 className="text-2xl font-bold mb-4 align-middle">{selectedCountryCard.name}</h2>
                <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <p><strong>Native Name:</strong> {selectedCountryCard.name}</p>
                    <p><strong>Population:</strong> {selectedCountryCard.population}</p>
                    <p><strong>Region:</strong> {selectedCountryCard.region}</p>
                    <p><strong>Sub Region:</strong> {selectedCountryCard.subregion}</p>
                    <p><strong>Capital:</strong> {selectedCountryCard.capital}</p>
                    </div>
                    <div className="space-y-2">
                    <p><strong>Top Level Domain:</strong> {selectedCountryCard.topLevelDomain}</p>
                    <p><strong>Currencies:</strong> {selectedCountryCard.currencies[0].code}</p>
                    <p><strong>Languages:</strong> {selectedCountryCard.languages.name}</p>
                    </div>
                </div>
                <p className="space-x-2 flex flex-wrap">
                    <strong className="w-full md:w-auto">Border Countries:</strong>
                    {selectedCountryCard.borders && selectedCountryCard.borders.length > 0 ? (
                        selectedCountryCard.borders.map((border, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 rounded mb-2">
                            {border}
                        </span>
                        ))
                    ) : (
                        <span>No border countries</span>
                    )}
                </p>

            </div>
            </div>
        </div>
    </>
  )
}
