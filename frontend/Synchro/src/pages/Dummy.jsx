import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dummy() {
  const notify = () => toast.success("Wow! This is a toast notification!");
  return (
    <div>
      Dummy page
      <button onClick={notify} className="bg-red-400">
        click me
      </button>
      <ToastContainer />
    </div>
  );
}

export default Dummy;
