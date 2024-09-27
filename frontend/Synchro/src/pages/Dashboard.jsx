import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { UploadButton } from "../components/uploadButton";
export default function Dashboard() {
  const [files, setFiles] = useState([]);

  const FetchFiles = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/dashboard/document_summary",
        { method: "GET" }
      );

      if (response.ok) {
        const data = await response.json();
        setFiles(data);
        console.log("files -> ", files);
        console.log("response data ", data);
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
          <div className=" flex flex-row  justify-between">
            <div className=" font-rubikRegalar  text-2xl">
              YOUR RECENT FILES
            </div>

            <UploadButton />
          </div>

          <div className="  mt-20 ">
            {files.map((items) => (
              <a href={items.file}>
                <div className=" border w-full">{items.file}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
