import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log("Login Success:", response);
      localStorage.setItem("token", response.access_token);
      window.location.href = "/dashboard";
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Connected Space</h1>
      <button onClick={() => login()}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
