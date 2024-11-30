import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UploadLogic = async (selectedFile, navigate) => {
  console.log("Selected file in uploadLogic: ", selectedFile);

  const uploadData = new FormData();

  // Append file data to the FormData object

  uploadData.append("file", selectedFile);

  try {
    const response = await fetch("http://localhost:8000/api/documents/upload", {
      method: "POST",
      body: uploadData, // Send FormData directly
    });

    if (response.ok) {
      toast.success("File Upload Successfully");
      navigate("/home");
    } else {
      const errorData = await response.json();
      toast.error(`${errorData}`);
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
