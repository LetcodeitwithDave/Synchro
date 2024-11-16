import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
function SearchInput() {
  const [input, setInput] = useState("");
  const [searchedFiles, setSearchedFiles] = useState([]);

  const SearchLogic = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/document/search?title=${input}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchedFiles(data);
        console.log(input);
        console.log(" searchd file => ", data);
        console.log(" search response => ", response);
      }
    } catch (error) {}
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      SearchLogic();
    }
  };

  return (
    <div className="relative rounded-full max-w-xl   shadow-lg  my-6 ">
      <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        className="w-72 border  rounded-full h-12 pl-10 pr-4 font-rubikRegalar "
        placeholder="Search..."
        value={input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
