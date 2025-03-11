import React, { useState } from "react";
import { SearchNormal1 } from "iconsax-react"; // Importing the search icon

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-400 rounded-lg px-3 bg-white shadow-sm h-[40px] w-100">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by route or name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 h-full"
      />

      {/* Search Icon on the Right */}
      <SearchNormal1 size={20} color="red" className="ml-2" />
    </div>
  );
};

export default SearchBar;
