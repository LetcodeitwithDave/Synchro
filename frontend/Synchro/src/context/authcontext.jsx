import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authtoken")
      ? JSON.parse(localStorage.getItem("authtoken"))
      : null
  );

  const navigate = useNavigate();

  // login
  const login = async (userDetail) => {
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Login successful!");
        localStorage.setItem("authtoken", JSON.stringify(data));
        setIsAuthenticated(data);
        navigate("/home");
      } else {
        const errorData = await response.json();
        for (const [key, value] of Object.entries(errorData)) {
          toast.error(`${key}: ${value.join(", ")}`);
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
