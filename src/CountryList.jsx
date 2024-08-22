import FilterDropdown from "./components/elements/FilterDropdown";
import SearchInput from "./components/elements/SearchInput";
import spinner from "./assets/spinner.svg";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./features/countries";
import { useEffect } from 'react';

export default function CountryList() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    let contentData;
    if (loading) contentData = <img src={spinner} alt="spinner loader" />;
    if (error) contentData = <p className="text-red-600">An error has occurred</p>;
    if (data) {
      contentData = (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.map(country => (
            <div key={country.name} className="border border-gray-300 rounded-lg shadow-sm bg-white cursor-pointer
            ransform transition-transform duration-200 hover:-translate-y-1">
              <img src={country.flag} alt={`${country.name} flag`} className="w-full h-32 object-cover rounded-t-md" />
              <h2 className="text-lg font-semibold mb-2 px-4 pt-4 pb-2">{country.name}</h2>
              <p className="px-4"><strong>Population:</strong> {country.population}</p>
              <p className="px-4"><strong>Region:</strong> {country.region}</p>
              <p className="px-4 pb-4"><strong>Capital:</strong> {country.capital}</p>
            </div>
          ))}
        </div>
      
      );
  }
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex justify-between">
        {contentData}
      </div>
      
    </div>
  )
}
