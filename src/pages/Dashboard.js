import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
    

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserInfo(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      {userInfo ? (
        <div>
          <p>Welcome, {userInfo.name}!</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
      <button onClick={handleLogout}>Log Out</button>

    </div>
  );
};

export default Dashboard;
