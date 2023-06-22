import React from "react";
import spoty from "./spoty.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>

      <img src={spoty} alt="" />
      <a>Login whith spoty</a>
    </div>
  );
}

export default Login;
