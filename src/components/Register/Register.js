import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-form">
      <div className="from-inner">
        <form onSubmit={handleSubmit}>
          <h4>Create Account</h4>
          <label htmlFor="name">Your name:</label> <br />
          <input className="input-style" type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Your Email:</label> <br />
          <input className="input-style" type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Your Password:</label> <br />
          <input
            className="input-style"
            type="password"
            id="password"
            name="password"
          />
          <br />
          <input className="login-btn" type="submit" value="Register" />
          <p>
            <small>
              By continuing, you agree to Ema-Jhon{" "}
              <span style={{ color: "blue" }}>Conditions of Use</span> and{" "}
              <span style={{ color: "blue" }}>Privacy Notice.</span>
            </small>
          </p>
        </form>
        <p style={{ textAlign: "center" }}>
          --------<small>Already Registered?</small>--------
        </p>
        <NavLink to="/login">
          <button className="login-btn"> Login</button>
        </NavLink>
      </div>
      <div className="outside-from">
        <p style={{ textAlign: "center" }}>
          ------------OR Sign In With------------
        </p>
        <button className="gogle-btn"> Google</button>
      </div>
    </div>
  );
};

export default Register;
