import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Test from "./pages/Test";

import { AuthProvider } from "./utils/auth";
import { Signin, Signup } from "./pages";
import Dummy from "./pages/Dummy";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Signup />} path="/register" />
          <Route element={<Signin />} path="/login" />
          <Route element={<Test />} path="/test" />
          <Route element={<Dummy />} path="/" />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
