import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

import { UploadLogic } from "../utils/UploadLogic";

function Upload() {
  const [uploadDetails, setUploadDetails] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  console.log("selected file  ", selectedFile);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]); // access first file in the FileList

    console.log("uploaded file ", selectedFile);
  };

  const handleInputChange = (e) => {
    setUploadDetails({
      ...uploadDetails,
      [e.target.name]: e.target.value,
    });
    console.log("upload Details -> ", uploadDetails);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    UploadLogic(uploadDetails, selectedFile);
  };

  return (
    <div className=" flex">
      <Sidebar />
      <form
        onSubmit={handleUpload}
        className=" flex-col mt-12  flex-1 flex mx-10"
      >
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          value={uploadDetails.title}
          onChange={handleInputChange}
          className="border mb-4"
        />

        <input
          name="description"
          type="text"
          placeholder="Enter description"
          value={uploadDetails.description}
          onChange={handleInputChange}
          className="border mb-4"
        />

        <input
          name="tags"
          type="text"
          placeholder="Enter tags"
          value={uploadDetails.tags}
          onChange={handleInputChange}
          className="border mb-4"
        />

        <input
          name="category"
          type="text"
          placeholder="Enter category"
          value={uploadDetails.category}
          onChange={handleInputChange}
          className="border mb-4"
        />

        <input
          name="file"
          type="file"
          onChange={handleFileUpload}
          className="border mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Upload document
        </button>
      </form>
    </div>
  );
}

export default Upload;
