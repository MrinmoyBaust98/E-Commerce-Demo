import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // form reload issue sove function
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // handle previs location after login
  const redirect_url = location?.state?.from || "/shop";

  // special function for Cheek user login Or Not
  const HandleLogInCheek = () => {
    signInUsingGoogle().then((result) => {
      navigate(redirect_url);
    });
  };

  return (
    <div className="login-form">
      <div className="from-inner">
        <form onSubmit={handleSubmit}>
          <h4>Sign In</h4>
          <label htmlFor="email">Email:</label> <br />
          <input className="input-style" type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input
            className="input-style"
            type="password"
            id="password"
            name="password"
          />
          <br />
          <input className="login-btn" type="submit" value="Login" />
          <p>
            <small>
              By continuing, you agree to Ema-Jhon{" "}
              <span style={{ color: "blue" }}>Conditions of Use</span> and{" "}
              <span style={{ color: "blue" }}>Privacy Notice.</span>
            </small>
          </p>
        </form>
        <p style={{ textAlign: "center" }}>
          --------<small>New to Amazon?</small>--------
        </p>
        <NavLink to="/register">
          <button className="register-btn"> Create Your Account</button>
        </NavLink>
      </div>
      <div className="outside-from">
        <p style={{ textAlign: "center" }}>
          ------------OR Sign In With------------
        </p>
        <button onClick={HandleLogInCheek} className="gogle-btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
