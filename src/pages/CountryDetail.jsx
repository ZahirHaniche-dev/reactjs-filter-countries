import CountryCard from "./CountryCardDetails";


export default function selectedCountryDetail({selectedCountry}) {

  console.log("Received selectedCountry in CountryDetail:", selectedCountry);

  return (
    <div className="flex flex-col p-6 ">
      <CountryCard selectedCountryCard={selectedCountry} />
    </div>
  );
}
