import React from "react";
import SearchInput from "./SearchInput";
import { UploadButton } from "./uploadButton";
const Navbar = () => {
  return (
    <div className=" flex w-full flex-row items-center justify-between ">
      <SearchInput />
      <UploadButton />
    </div>
  );
};

export default Navbar;
