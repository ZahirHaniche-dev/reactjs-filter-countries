import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useParams } from 'react';
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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(isDarkMode);
    
  };
  
  return (
    <Router>
      <div className={`font-nunito-sans min-h-screen ${isDarkMode ? 'dark' : 'bg-slate-200'}`}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="md:px-24 px-8 space-y-4">
          <Routes>
            <Route path="/" element={<CountriesList isDarkMode={isDarkMode} onSelectCountry={handleSelectCountry}/>} />
            <Route path="/country/:name" element={<CountryDetail isDarkMode={isDarkMode} selectedCountry={selectedCountry} />} />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  )
}

export default App;
