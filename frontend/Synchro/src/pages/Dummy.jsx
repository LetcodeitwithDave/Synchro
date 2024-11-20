import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    console.log(file.value);
    console.log("file -> ", file);
    setSelectedFile(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);

      setPreviewUrl(fileUrl);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Handle the file upload logic here (use FormData to send the file to the backend)
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log("formdata ->", formData);

    try {
      const response = await fetch(
        "http://localhost:8000/api/dashboard/document_summary",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("File uploaded successfully!");
        setSelectedFile(null);
        setPreviewUrl(null);
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-5">Upload a File</h2>

      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label
            htmlFor="fileInput"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Choose a file
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>

        {previewUrl && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">File Preview:</p>
            <iframe
              src={previewUrl}
              className="w-full h-60 border border-gray-300 rounded-lg"
              title="File preview"
            ></iframe>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500"
        >
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
