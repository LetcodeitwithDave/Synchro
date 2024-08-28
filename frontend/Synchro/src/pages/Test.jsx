import React, { useEffect } from "react";

function Test() {
  const studentData = async (e) => {
    const API_URL =
      "https://hackathon-dev-3z7h.onrender.com/api/student/student_list";
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("user data  -> ", data);
    }
  };

  useEffect(() => {
    studentData();
  }, []);
  return <div>test page</div>;
}

export default Test;
