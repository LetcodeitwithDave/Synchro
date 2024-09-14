import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

import { UploadLogic } from "../utils/UploadLogic";

function Upload() {
  const navigate = useNavigate();
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
    UploadLogic(uploadDetails, selectedFile, navigate);
  };

  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-1 flex justify-center   min-h-screen">
        <form
          onSubmit={handleUpload}
          className=" flex-col mt-12 max-w-2xl  flex-1 flex mx-10"
        >
          <div>
            <h1 className=" font-rubikSemiBold text-2xl text-center items-center  text-gray-900 mb-12">
              Upload document
            </h1>
          </div>

          <label htmlFor="title" className=" font-rubikRegalar text-md  mt-6">
            Upload File:
          </label>

          <input
            name="file"
            type="file"
            onChange={handleFileUpload}
            className="form-input py-4"
          />

          <label htmlFor="title" className=" font-rubikRegalar text-md mt-6">
            Title:
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            value={uploadDetails.title}
            onChange={handleInputChange}
            className="form-input"
          />

          <label htmlFor="title" className=" font-rubikRegalar text-md  mt-6">
            Description:
          </label>

          <textarea
            name="description"
            type="text"
            placeholder="Enter description"
            value={uploadDetails.description}
            onChange={handleInputChange}
            className="form-input"
          />

          <label htmlFor="title" className=" font-rubikRegalar text-md  mt-6">
            Tag:
          </label>

          <input
            name="tags"
            type="text"
            placeholder="Enter tags"
            value={uploadDetails.tags}
            onChange={handleInputChange}
            className="form-input"
          />

          <label htmlFor="title" className=" font-rubikRegalar text-md  mt-6">
            Category:
          </label>

          <input
            name="category"
            type="text"
            placeholder="Enter category"
            value={uploadDetails.category}
            onChange={handleInputChange}
            className="form-input"
          />

          <button
            type="submit"
            className="bg-secondaryColor text-white p-2 mt-4 max-w-lg rounded-md"
          >
            Upload document
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
