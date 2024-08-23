import './index.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import CountriesList from './CountryList';

function App() {

  return (
    <div className="font-nunito-sans bg-gray-100 min-h-screen">
      <Header />
      
      <div className="px-24">
        <CountriesList />
      </div>
      <Footer />
    </div>
  )
}

export default App
