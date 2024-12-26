import React, { useEffect, useState } from "react";
// import NavContent from "../components/NavContent";
import { EllipsisVertical } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileImage,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Documents = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const [documents, setDocuments] = useState([]);
  const FetchFiles = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/documents/documents?category=documents",
        { method: "GET" }
      );

      if (response.ok) {
        const files = await response.json();
        console.log("Document data => ", files);

        const extensionIconMap = {
          ".docx": { icon: faFileWord },
          ".pdf": { icon: faFilePdf },
          ".doc": { icon: faFileWord },
          ".txt": { icon: faFileAlt },
          ".csv": { icon: faFileExcel },
          ".fig": { icon: faFileImage },
          ".sketch": { icon: faFileImage },
          ".xd": { icon: faFileImage },
        };

        const mappedData = files.map((file) => {
          const extensionData = extensionIconMap[file.extension] || {
            icon: faFileAlt,
          };
          return { ...file, ...extensionData };
        });

        console.log("Mapped Documents =>", mappedData);

        setDocuments(mappedData);

        console.log("files -> ", documents);
        // console.log("response data ", data);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    FetchFiles();
  }, []);

  return (
    <div className=" flex">
      <div className=" flex-col flex-1 flex ">
        <div className=" flex flex-col ">
          <div className=" font-rubikSemiBold text-gray-900 text-4xl">
            Documents
          </div>
          <div className=" font-rubikRegalar text-md text-gray-700 mt-4 ">
            Total: 12.5Gb
          </div>
        </div>

        <div className=" grid grid-cols-4  mt-16 gap-10 w-full">
          {documents.map((document, index) => (
            <button
              className=" bg-white flex flex-row justify-between h-44 w-60 rounded-2xl p-6 shadow-md  "
              key={index}
            >
              <div>
                <div className=" flex flex-col  gap-y-4">
                  <div className=" rounded-full items-center justify-center bg-red-100 flex size-16 ">
                    <FontAwesomeIcon
                      icon={document.icon}
                      className=" size-8  text-red-700 border rounded-full mx-auto absolute text-center fill-current object-cover"
                    />
                  </div>

                  <div className=" flex flex-col gap-2  items-start">
                    <h1 className=" font-rubikSemiBold text-gray-700 text-md ">
                      {truncateText(document.name, 9)}
                      {document.extension}
                    </h1>

                    <h1 className=" font-rubikRegalar text-gray-700  text-sm">
                      {document.uploaded_at}
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-2 ">
                <EllipsisVertical className="  flex text-gray-600 fill-current items-center  w-8 h-8" />

                <h1 className=" font-rubikRegalar text-gray-700  text-sm">
                  2 mb
                </h1>
              </div>
            </button>
          ))}
        </div>

        {/* <div className=" mt-8 flex">
          <NavContent />
        </div> */}
      </div>
    </div>
  );
};

export default Documents;
