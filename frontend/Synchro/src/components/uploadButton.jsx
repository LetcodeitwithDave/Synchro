import { Link } from "react-router-dom";
import { FileUp, Upload } from "lucide-react";

export const UploadButton = () => {
  return (
    <Link to={"/upload"}>
      <button className=" flex p-5 items-center  shadow-xl text-sm font-rubikRegalar gap-2 bg-secondaryColor text-white rounded-full  h-9">
        {/* svg */}
        <div>
          <Upload className=" text-white text-sm w-5 h-5" />
        </div>

        <h1 className=" font-rubikRegalar text-white text-sm">Upload</h1>
      </button>
    </Link>
  );
};
