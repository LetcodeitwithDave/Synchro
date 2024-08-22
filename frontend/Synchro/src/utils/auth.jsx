import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("User signed up successfully", data);
      navigate("/");
    } else {
      const errorData = await response.json();
      console.log(`Signup failed: ${errorData.error}`);
    }
  } catch (error) {
    console.log("Error:", error.response);
  }
};
const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  console.log("details", userDetails);

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export { handleSignUp, AuthProvider, AuthContext };
