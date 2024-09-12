import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";

function Upload() {
  const [uploadDetails, setUploadDetails] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  console.log("this is the selected file  ", selectedFile);

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

  const handleUpload = async (event) => {
    event.preventDefault();

    // Ensure all state is up-to-date before uploading
    console.log("Upload details: ", uploadDetails);
    console.log("Selected file: ", selectedFile);

    const uploadData = new FormData(); // Create a new FormData object

    // Append text and file data to the FormData object
    uploadData.append("title", uploadDetails.title);
    uploadData.append("description", uploadDetails.description);
    uploadData.append("tags", uploadDetails.tags);
    uploadData.append("category", uploadDetails.category);
    uploadData.append("file", selectedFile);
    console.log("uploadded data ", uploadData);

    try {
      const response = await fetch(
        "http://localhost:8000/api/dashboard/document_summary",
        {
          method: "POST",
          body: uploadData, // Send FormData directly
          // Content-Type header should not be manually set as the browser will handle it
        }
      );

      if (response.ok) {
        toast.success("File Upload Successfully");
      } else {
        const errorData = await response.json();
        console.error("Upload failed: ", errorData);
        toast.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      toast.error("Error uploading file");
    }
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
