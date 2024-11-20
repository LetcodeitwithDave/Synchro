import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import DownloadButton from "../components/DownloadButton";
import ViewButton from "../components/ViewButton";
import Sidebar from "../components/Sidebar";
import { UploadButton } from "../components/uploadButton";
import { Trash, EllipsisVertical } from "lucide-react";
import { RecentFileUpload, ChartandDashboardcard } from "../components";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const recentUpload = [
    { fileName: "Cvdesigner.docx", time: " 4:47am, 10 Nov" },
    { fileName: "Cvdesigner.docx", time: " 4:47am, 10 Nov" },
    { fileName: "Cvdesigner.docx", time: " 4:47am, 10 Nov" },
    { fileName: "Cvdesigner.docx", time: " 4:47am, 10 Nov" },
    { fileName: "Cvdesigner.docx", time: " 4:47am, 10 Nov" },
  ];

  // const FetchFiles = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8000/api/dashboard/dashboard_summary/",
  //       { method: "GET" }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       setFiles(data);

  //       // console.log("files -> ", files);
  //       // console.log("response data ", data);
  //     }
  //   } catch (error) {
  //     console.log("something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   FetchFiles();
  // }, []);

  return (
    <div>
      <div className=" flex">
        <div className="   flex-col  flex-1 flex  ">
          {/* <div className=" flex  flex-row items-center justify-between ">
            <SearchInput />
            <UploadButton />
          </div> */}
          <div className="     ">
            <div className="  flex">
              <ChartandDashboardcard />

              <RecentFileUpload recentUpload={recentUpload} />
            </div>
          </div>

          {/* <div className=" mt-10">
            {files.map((items) => (
              <div className="h-20 border border-gray-200  rounded-md mt-4">
                <div className=" flex justify-between p-4 mx-4 mt-2">
                  <div className="flex gap-16  items-center">
                    <div className=" flex  gap-10 text-gray-500  px-8 border-r">
                      <button>
                        <Trash />
                      </button>

                      <button>
                        <EllipsisVertical />
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
