import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountriesList from './pages/CountryList';
import CountryDetail from './pages/CountryDetail'; 
import NotFound from './pages/NotFound';

function App() {

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    
  };

  return (
    <Router>
      <div className="font-nunito-sans bg-gray-100 min-h-screen">
        <Header />
        <div className="px-24">
          <Routes>
            <Route path="/" element={<CountriesList onSelectCountry={handleSelectCountry}/>} />
            <Route path="/country/:name" element={<CountryDetail selectedCountry={selectedCountry} />} />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
