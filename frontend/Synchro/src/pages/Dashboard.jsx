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
    <div className=" flex">
      <div>
        <Sidebar />;
      </div>

      <div className="   flex-row mt-12  justify-between flex-1 flex mx-10">
        <div className=" font-rubikRegalar  text-2xl">YOUR RECENT FILES</div>

        <UploadButton />
      </div>
    </div>
  );
}
