import React from "react";
import { EllipsisVertical } from "lucide-react";
const RecentFileUpload = ({ recentUpload }) => {
  return (
    <div className=" w-1/2 rounded-xl h-screen bg-white  p-8">
      <h1 className=" font-rubikSemiBold text-gray-900 text-2xl ">
        Recent files uploaded
      </h1>
      {recentUpload.map((item) => (
        <div className=" flex gap-2 items-center  mt-10 ">
          <div className=" h-14  w-14  rounded-full bg-gray-300" />

          <div className=" flex items-center gap-40  justify-between ">
            <div className=" flex flex-col">
              <h1 className=" font-rubikSemiBold text-gray-700 text-md ">
                {item.fileName}
              </h1>
              <p className=" font-rubikRegalar text-gray-500 text-sm">
                {item.time}
              </p>
            </div>
            <EllipsisVertical />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentFileUpload;
