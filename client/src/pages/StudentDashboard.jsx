
import React from "react";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user?.name || "Student"}!</h2>
      <p>Your email: {user?.email}</p>
      {/* Add more student-specific UI here */}
    </div>
  );
};

export default StudentDashboard;
