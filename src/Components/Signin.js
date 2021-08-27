import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SigninStyle.css";
import loginImage from "../images/Component 1 – 1.svg";
import axios from "axios";

const Signin = () => {
  const url = "https://localhost:8000/api/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isdisable, setIsDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
if(isdisable){
  if (email && password) {
    const SigninRequest = { email, password };
    console.log(SigninRequest);
    setEmail("");
    setPassword("");
    setConfirmPassword("");

  }
}
    

    axios
      .post(`${url}`, {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };








  return (
    <div className="login-form">
      <div className="form-left">
        <h1>welcome</h1>
        <img src={loginImage} alt="crosses" />
      </div>
      <div className="form-right">
        <h1>Sign up to be a part of our community</h1>
        <h4>Create a new account</h4>
        <hr />

 <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="createpassword"
              id="password"
              placeholder="create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmpassword"
              id="password"
              placeholder="confirm  password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="check-con">
              <input
                className="form-control-checkbox"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="true"
                onClick={(e) => setIsDisable(e.target.value)}
              />{" "}

            </div>
            <label className="checkbox-lbl">
              {" "}
              I have agree with all terms of use & privacy policy.
            </label>
            <br></br>

         
             <button className="login-btn" type="submit" 
             
             disabled={password !== confirmPassword }   >
              sign up
            </button>
             
            

          </div>
        </form>
        <hr className="bottom-hr" />
        <p>or</p>
        <p>
          Have you Already an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
