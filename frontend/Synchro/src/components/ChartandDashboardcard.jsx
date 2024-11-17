import React from "react";
import { FolderOpen, Video, Images, Goal } from "lucide-react";

const ChartandDashboardcard = () => {
  const DashboardCard = [
    {
      title: "Documents",
      storage: "12",
      lastUpdate: "10:15am, 10oct",
      icon: FolderOpen,
      iconBg: "bg-secondaryColor",
    },
    {
      title: "Images",
      storage: "4",
      lastUpdate: "9:20am, 11oct",
      icon: Images,
      iconBg: "bg-blue-300",
    },
    {
      title: "Video, Audio",
      storage: "20",
      lastUpdate: "6:15pm, 18oct",
      icon: Video,
      iconBg: "bg-green-300",
    },
    {
      title: "Others",
      storage: "2",
      lastUpdate: "4:30pm, 22oct",
      icon: Goal,
      iconBg: "bg-red-200",
    },
  ];

  return (
    <div className="flex flex-col  w-full">
      <div className="h-72 w-[80%] rounded-xl bg-secondaryColor flex-shrink-0"></div>

      <div className=" flex  flex-wrap  gap-10 text-center mt-14">
        {DashboardCard.map((item, index) => (
          <div
            key={index}
            className="relative p-4 bg-white shadow-lg w-56 h-44 rounded-2xl"
          >
            {/* Curved top left corner */}
            <div className="absolute -top-1 left-1 right-1 w-14 h-14  bg-sidebarBg rounded-tr-xl  rounded-bl-2xl rounded-br-3xl "></div>

            {/* Icon container with dynamic background color */}
            <div
              className={`absolute -top-2 -left-2 ml-2 w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center shadow-md`}
            >
              <item.icon className="text-white w-6 h-6" />
            </div>

            {/* Card content */}
            <div className="mt-6">
              <h2 className="text-lg text-gray-700 font-rubikSemiBold">
                {item.title}
              </h2>

              <hr className=" my-4" />
              {/* <p className="text-xl font-semibold">{item.storage} GB</p> */}
              <p className="text-gray-400 font-rubikRegalar  text-sm">
                Last update
              </p>
              <p className="text-gray-500 font-rubikRegalar text-lg my-2">
                {item.lastUpdate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartandDashboardcard;
