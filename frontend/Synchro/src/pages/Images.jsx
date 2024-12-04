import React, { useEffect, useState } from "react";
// import NavContent from "../components/NavContent";

const Images = () => {
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
            <div className=" bg-white h-44 w-60 rounded-xl shadow-md  ">
              {image.name}{" "}
            </div>
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
