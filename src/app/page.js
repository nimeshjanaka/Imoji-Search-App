"use client";

import { useState } from "react";
import SearchComponent from "../components/SearchComponent";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 bg-gradient-to-r from-indigo-600 via-red-300 ... h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 flex justify-center text-">
          Emoji Search
        </h1>
        <SearchComponent onSearch={handleSearch} />

        <div className="mt-4">
          {searchResults.map((emoji) => (
            <div key={emoji.name} className="flex items-center mb-2 space-x-2">
              <div>
                {String.fromCodePoint(
                  parseInt(emoji.unicode[0].substring(2), 16)
                )}
              </div>
              <div>{emoji.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
