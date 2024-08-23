import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function selectedCountryDetail({selectedCountry}) {

  console.log("Received selectedCountry in selectedCountryDetail:", selectedCountry);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{selectedCountry.name}</h1>
      <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="w-full h-64 object-cover mb-4 rounded-md" />
      <p><strong>Population:</strong> {selectedCountry.population}</p>
      <p><strong>Region:</strong> {selectedCountry.region}</p>
      <p><strong>Capital:</strong> {selectedCountry.capital}</p>
      {/* Ajoute d'autres détails si nécessaire */}
    </div>
  );
}
