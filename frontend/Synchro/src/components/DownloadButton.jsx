import React from "react";

function DownloadButton() {
  return (
    <div>
      <button className=" flex  gap-1 items-center rounded-full bg-red-600 font-rubikRegalar text-sm px-4 py-1 text-white">
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
          className="lucide lucide-arrow-down-to-line h-4 w-4"
        >
          <path d="M12 17V3" />
          <path d="m6 11 6 6 6-6" />
          <path d="M19 21H5" />
        </svg>
        Download
      </button>
    </div>
  );
}

export default DownloadButton;
