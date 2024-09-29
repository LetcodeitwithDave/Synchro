import React from "react";

function ViewButton() {
  return (
    <div>
      <button className=" flex items-center gap-1 rounded-full bg-secondaryColor font-rubikRegalar text-sm px-4 py-1 text-white">
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
          className="lucide lucide-eye  h-4 w-4"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        View
      </button>
    </div>
  );
}

export default ViewButton;
