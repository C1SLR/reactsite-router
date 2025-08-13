import React from "react";

function Search() {
  return (
    <div className="border flex justify-center">
      <input
        type="search"
        placeholder="Search Here..."
        className="w-full md:ml-5 shadow-2xl px-5 py-3 text-gray-400 rounded-l-md focus:outline-gray-200"
      />
      <button className="shadow-2xl px-10 py-3 text-white bg-cyan-700 rounded-r-lg transition-colors cursor-pointer hover:bg-cyan-800">
        Search
      </button>
    </div>
  );
}

export default Search;
