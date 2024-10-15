import { useEffect, useState } from "react";
import { Search } from "../components";
import DownloadButton from "../components/DownloadButton";
import ViewButton from "../components/ViewButton";
import Sidebar from "../components/Sidebar";
import { UploadButton } from "../components/uploadButton";

import Delete from "../assets/icons/Delete.svg";
export default function Dashboard() {
  const [files, setFiles] = useState([]);

  const FetchFiles = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/dashboard/dashboard_summary/",
        { method: "GET" }
      );

      if (response.ok) {
        const data = await response.json();
        setFiles(data);

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
    <div>
      <div className=" flex">
        <div>
          <Sidebar />;
        </div>
        <div className="   flex-col mt-12   flex-1 flex mx-10">
          <div className=" mb-10">
            <Search />
          </div>
          <div className=" flex flex-row  justify-between">
            <div className=" font-rubikRegalar text-gray-900  text-2xl">
              YOUR RECENT FILES
            </div>

            <UploadButton />
          </div>
          {/* <div className="  mt-20  ">
            {files.map((items) => (
              <a href={items.file}>
                <div className=" border border-red-400 w-full">
                  {items.file}
                </div>
              </a>
            ))}
          </div> */}

          <div className=" mt-10">
            {files.map((items) => (
              <div className="h-20 border border-gray-200  rounded-md mt-4">
                <div className=" flex justify-between p-4 mx-4 mt-2">
                  <div className="flex gap-16  items-center">
                    <div className=" flex  gap-10 text-gray-500  px-8 border-r">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>

                      {/* manu icon */}
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis-vertical"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>
                    <div className=" flex flex-col">
                      <div className=" font-rubikRegalar text-md text-gray-900">
                        {items.title}
                      </div>
                      <div className=" text-gray-500 font-rubikRegalar text-xs">
                        5.0 MB
                      </div>
                    </div>
                  </div>

                  <div className="  flex gap-2">
                    <ViewButton items={items.file} />
                    <DownloadButton fileId={items.id} fileName={items.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
