
import { useState } from "react";
import axios from "axios";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://emojihub.yurace.pro/api/all?q=${query}`
      );
      const filteredResults = response.data.filter((emoji) =>
        emoji.name.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filteredResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center space-x-2 ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full h-full rounded-lg  "
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600   text-white p-2 rounded-lg w-32"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
