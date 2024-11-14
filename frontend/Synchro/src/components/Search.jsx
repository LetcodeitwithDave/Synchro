import React, { useEffect, useState } from "react";

function Search() {
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
    <div className="relative rounded-full max-w-lg  shadow-lg  my-8 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        type="text"
        className="w-full border  rounded-full h-12 pl-10 pr-4"
        placeholder="Search..."
        value={input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
