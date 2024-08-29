import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import { AuthProvider } from "./utils/authcontext";
import { Signin, Signup } from "./pages";
import Dummy from "./pages/Dummy";
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
          <Route element={<Test />} path="/test" />
          <Route element={<Dummy />} path="/" />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
