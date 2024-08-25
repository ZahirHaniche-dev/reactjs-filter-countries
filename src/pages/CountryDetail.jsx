import CountryCard from "./CountryCardDetails";


export default function selectedCountryDetail({isDarkMode, selectedCountry}) {

  console.log("Received selectedCountry in CountryDetail:", selectedCountry);

  return (
    <div className="flex flex-col p-0 md:p-6">
      <CountryCard isDarkMode={isDarkMode} selectedCountryCard={selectedCountry} />
    </div>
  );
}
