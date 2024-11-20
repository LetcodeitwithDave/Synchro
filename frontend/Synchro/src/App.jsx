import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import {
  Signin,
  Signup,
  FileUploadAndList,
  Dashboard,
  Upload,
  Documents,
} from "./pages";
import { Sidebar, SearchInput, UploadButton, Navbar } from "./components";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import icon
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="  flex">
          <Sidebar />

          <div className=" flex flex-col w-full">
            <Navbar />
            <div className="w-full rounded-3xl py-8 min-h-screen px-14  bg-sidebarBg  ">
              <Routes>
                <Route element={<Signup />} path="/register" />
                <Route element={<Signin />} path="/login" />
                <Route element={<FileUploadAndList />} path="/" />
                <Route element={<Dashboard />} path="/home" />
                <Route element={<Upload />} path="/upload" />
                <Route element={<Documents />} path="/documents" />
              </Routes>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> Place it here so it’s available globally */}
      </AuthProvider>
    </Router>
  );
}

export default App;
library.add(fab, fas, far);
