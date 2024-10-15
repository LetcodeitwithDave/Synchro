import React, { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
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
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]); // Use the first file in the array
    console.log("File uploaded via drag-and-drop: ", acceptedFiles[0]);
    setIsUploaded(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, //func to run after file drop
    accept: {
      "application/pdf": [],
      "application/docx": [".docx"],
      "image/jpeg": [],
      "image/png": [],
    }, // You can set accepted file types

    multiple: false,
  });

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
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex justify-center min-h-screen">
        <form
          onSubmit={handleUpload}
          className="flex-col mt-12 max-w-2xl flex-1 flex mx-10"
        >
          <div>
            <h1 className="font-rubikSemiBold text-2xl text-center items-center text-gray-900 mb-12">
              Upload document
            </h1>
          </div>

          {/* File Upload (Drag and Drop Area) */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed p-8 rounded-lg text-center cursor-pointer ${
              isDragActive ? "border-blue-400" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {selectedFile ? (
              <p>{selectedFile.name}</p>
            ) : (
              <div>
                <p className="text-lg font-rubikRegalar">
                  Drag and Drop the files
                </p>
                <p className="text-gray-500">or</p>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
                >
                  Upload Files
                </button>
              </div>
            )}
          </div>

          {isUploaded && (
            <>
              <label htmlFor="title" className="font-rubikRegalar text-md mt-6">
                Title:
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter title"
                value={uploadDetails.title}
                onChange={handleInputChange}
                className="form-input py-2 px-4 border border-gray-300 rounded-md"
              />

              <label
                htmlFor="description"
                className="font-rubikRegalar text-md mt-6"
              >
                Description:
              </label>
              <textarea
                name="description"
                type="text"
                placeholder="Enter description"
                value={uploadDetails.description}
                onChange={handleInputChange}
                className="form-input py-2 px-4 border border-gray-300 rounded-md"
              />

              <label htmlFor="tags" className="font-rubikRegalar text-md mt-6">
                Tag:
              </label>
              <input
                name="tags"
                type="text"
                placeholder="Enter tags"
                value={uploadDetails.tags}
                onChange={handleInputChange}
                className="form-input py-2 px-4 border border-gray-300 rounded-md"
              />

              <label
                htmlFor="category"
                className="font-rubikRegalar text-md mt-6"
              >
                Category:
              </label>
              <input
                name="category"
                type="text"
                placeholder="Enter category"
                value={uploadDetails.category}
                onChange={handleInputChange}
                className="form-input py-2 px-4 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Upload document
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Upload;
