import './index.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import CountriesList from './CountryList';
import FilterDropdown from "./components/elements/FilterDropdown";
import SearchInput from "./components/elements/SearchInput";

function App() {

  return (
    <div className="font-nunito-sans bg-gray-100 min-h-screen">
      <Header />
      <div className="relative flex justify-between p-8">
        <SearchInput /> 
        <FilterDropdown />
      </div>
      <CountriesList />
      <Footer />
    </div>
  )
}

export default App
