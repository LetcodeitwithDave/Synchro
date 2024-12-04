import React from "react";
import { EllipsisVertical } from "lucide-react";
const RecentFileUpload = ({ recentUpload }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // // Example usage:
  // const originalText = "IMG_20240221_080242_3o6spe8";
  // const truncatedText = truncateText(originalText, 9);
  // console.log(truncatedText); // Output: "This is a long pie..."

  return (
    <div className=" w-[60%]  rounded-xl h-screen bg-white  p-8">
      <h1 className=" font-rubikSemiBold text-gray-900 text-2xl ">
        Recent files uploaded
      </h1>
      {recentUpload.map((item, index) => (
        <div
          className=" flex flex-row items-center justify-between gap-10  "
          key={index}
        >
          <div className=" flex  flex-row gap-2 items-center  mt-10 ">
            {item.extension === "pdf" ? (
              <object
                data={item.file}
                type="application/pdf"
                className="h-14 w-14 rounded-full"
              ></object>
            ) : (
              <img
                src={item.file}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover"
              />
            )}

            {/* <iframe src={item.file} className=" h-14  w-14  rounded-full " /> */}

            <div className=" flex flex-col">
              <h1 className=" font-rubikSemiBold text-gray-700 text-md ">
                {truncateText(item.name, 9)}
                {item.extension}
                {/* {item.file_name} */}
              </h1>
              <p className=" font-rubikRegalar text-gray-500 text-sm">
                {item.uploaded_at}
                {/* 4:47am, 10 Nov */}
              </p>
            </div>
          </div>
          <EllipsisVertical className="  flex text-gray-600 fill-current items-center  mt-10  w-8 h-8" />
        </div>
      ))}
    </div>
  );
};

export default RecentFileUpload;
