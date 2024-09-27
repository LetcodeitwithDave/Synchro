import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UploadLogic = async (uploadDetails, selectedFile, navigate) => {
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

      navigate("/home");
      console.log("page navigation -> ", navigate);
    } else {
      const errorData = await response.json();
      console.error("Upload failed: ", errorData);

      for (const [key, value] of Object.entries(errorData)) {
        toast.error(`${key}: ${value.join(", ")}`);
      }
    }
  } catch (error) {
    console.error("Error uploading file: ", error);
    toast.error("Error uploading file");
  }
};
