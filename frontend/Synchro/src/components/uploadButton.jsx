import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { UploadLogic } from "../utils/UploadLogic";
import { toast } from "react-toastify";
import { Upload } from "lucide-react";

export const UploadButton = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(
    (droppedItem) => {
      const file = droppedItem[0];
      if (!file) return;

      setSelectedFile(file);

      console.log("File uploaded via drag-and-drop: ", file);

      // Immediately invoke UploadLogic after file is selected
      UploadLogic(file, navigate);
    },
    [navigate]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Allow only one file upload at a time
  });

  return (
    <div>
      {/* File Upload (Drag and Drop Area) */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button className="flex p-5 items-center shadow-xl text-sm font-rubikRegular gap-2 bg-secondaryColor text-white rounded-full h-9">
          <Upload className="text-white text-sm w-5 h-5" />
          <h1 className="font-rubikRegular text-white text-sm">Upload</h1>
        </button>
      </div>
    </div>
  );
};
