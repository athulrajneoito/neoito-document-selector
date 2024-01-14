import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const Search = () => {
  return (
    <div className="border border-gray-300 bg-white min-h-10 px-4 rounded-lg text-sm focus:outline-none flex gap-4 items-center w-full">
      <MagnifyingGlassIcon className="w-5 h-5" />

      <input
        className="outline-none w-full bg-transparent"
        type="search"
        name="search"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Search;
