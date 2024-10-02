import React from "react";
import { Link } from "react-router-dom";

function DownloadButton({ items, fileId, fileName }) {
  const downloadDocument = async () => {
    // const API_URL =

    try {
      const response = await fetch(
        `http://localhost:8000/api/download_document/${fileId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("failed to download file");
      }

      const data = await response.blob(); //convert response to blob

      const downloadUrl = window.URL.createObjectURL(data); //DOM url
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;

      link.click();
      link.remove();
      //make DOM url invalid
      window.URL.revokeObjectURL(downloadUrl);

      console.log(link);
      console.log(" blob document (converted response to blob) -> ", data);
      console.log("download url -> ", downloadUrl);
    } catch (error) {
      console.error("Download failed ", error.message);
    }
  };
  return (
    <div>
      <button
        onClick={downloadDocument}
        className=" flex  gap-1 items-center rounded-full bg-red-600 font-rubikRegalar text-sm px-4 py-1 text-white"
      >
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
