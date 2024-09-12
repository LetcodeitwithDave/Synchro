import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import { Signin, Signup, FileUploadAndList, Dashboard, Upload } from "./pages";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <ToastContainer /> Place it here so it’s available globally */}
        <Routes>
          <Route element={<Signup />} path="/register" />
          <Route element={<Signin />} path="/login" />
          <Route element={<FileUploadAndList />} path="/" />
          <Route element={<Dashboard />} path="/home" />
          <Route element={<Upload />} path="/upload" />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
