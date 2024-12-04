import React, { useEffect, useState } from "react";
// import NavContent from "../components/NavContent";
import { EllipsisVertical } from "lucide-react";

const Images = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const [images, setImages] = useState([]);
  const FetchFiles = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/documents/image?category=images",
        { method: "GET" }
      );

      if (response.ok) {
        const data = await response.json();
        setImages(data);

        // console.log("files -> ", files);
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
            Images
          </div>
          <div className=" font-rubikRegalar text-md text-gray-700 mt-4 ">
            Total: 12.5Gb
          </div>
        </div>

        <div className=" grid grid-cols-4  mt-16 gap-10 w-full">
          {images.map((image, index) => (
            <button
              className=" bg-white flex flex-row justify-between h-44 w-60 rounded-2xl p-6 shadow-md  "
              key={index}
            >
              <div>
                <div className=" flex flex-col  gap-y-4">
                  <img
                    src={image.file}
                    alt={image.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  {/* {image.name} */}

                  <div className=" flex flex-col gap-2 ">
                    <h1 className=" font-rubikSemiBold text-gray-700 text-md ">
                      {truncateText(image.name, 9)}
                      {image.extension}
                      {/* {item.file_name} */}
                    </h1>

                    <h1 className=" font-rubikRegalar text-gray-700  text-sm">
                      {image.uploaded_at}
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

export default Images;
