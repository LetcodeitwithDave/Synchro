import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import { Signin, Signup } from "./pages";
import Dummy from "./pages/Dummy";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer /> {/* Place it here so it’s available globally */}
        <Routes>
          <Route element={<Signup />} path="/register" />
          <Route element={<Signin />} path="/login" />
          <Route element={<Dummy />} path="/" />
          <Route element={<Dashboard />} path="/home" />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
