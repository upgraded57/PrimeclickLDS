import React, { useState } from "react";
import "./auth.css";
import Button from "../../Component/button/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../ApiCalls/Auth/Auth";

export default function LoginPage({ setAuthState, cred, setCred }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const setValue = (e) => {
    setCred((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = (e) => {
    e.preventDefault();

    // Prepare login data
    const loginData = {
      email: cred.email,
      password: cred.pass,
    };

    loginUser(loginData, setUser, navigate);
  };

  return (
    <form className="auth-form" onSubmit={login}>
      <h2 className="h200">LOGIN</h2>

      <label htmlFor="email">
        <p>Email Address</p>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={setValue}
        />
      </label>

      <label htmlFor="password">
        <p>Password</p>
        <input
          type="password"
          id="password"
          name="pass"
          required
          onChange={setValue}
        />
      </label>

      <p
        className="forgot-password toggleAuth"
        onClick={() => navigate("/forgot-password")}
      >
        Forgot Password?
      </p>
      <Button variant="solid" text="Log In" type="submit" />
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setAuthState("signUp")} className="toggleAuth">
          Sign Up here
        </span>
      </p>
    </form>
  );
}
