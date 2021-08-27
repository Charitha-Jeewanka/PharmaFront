import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginStyle.css";
import loginImage from "../images/Component 1 – 1.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="login-form">
      <div className="form-left">
        <h1>welcome</h1>
        <img src={loginImage} alt="crosses" />
      </div>
      <div className="form-right">
        <h1>glad to have you back!</h1>
        <h4>Already have an account? Login</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link>Forgot Password</Link>
            <button className="login-btn" type="submit">
              login
            </button>
          </div>
        </form>
        <hr className="bottom-hr" />
        <p>or</p>
        <p>
          new to PharmaNet?{" "}
          <span>
            <Link href="#">sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
