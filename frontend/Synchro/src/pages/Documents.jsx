import React from "react";
import Sidebar from "../components/Sidebar";
import { UploadButton } from "../components/uploadButton";
import NavContent from "../components/NavContent";
function Documents() {
  return (
    <div className=" flex">
      <Sidebar />

      <div className=" flex-col mt-12   flex-1 flex mx-10">
        <div className=" flex flex-row justify-between">
          <div className=" font-rubikRegalar text-2xl">ALL FILES</div>

          <UploadButton />
        </div>
        <div className=" mt-8 flex">
          <NavContent />
        </div>
      </div>
    </div>
  );
}

export default Documents;
