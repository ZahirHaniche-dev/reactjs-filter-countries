import FilterDropdown from "./components/elements/FilterDropdown";
import SearchInput from "./components/elements/SearchInput";

export default function CountriesList() {
  return (
    <div className="flex justify-between items-center p-8">
      <SearchInput />
      <FilterDropdown />
    </div>
  )
}
