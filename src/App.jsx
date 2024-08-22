import './index.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import CountriesList from './CountriesList';

function App() {

  return (
    <div className="font-nunito-sans bg-gray-100 min-h-screen">
      <Header />
      <CountriesList />
      <Footer />
    </div>
  )
}

export default App
