import React from "react";
import "./auth.css";
import Button from "./../../Component/button/Button";
import toast from "react-hot-toast";
import { registerUser } from "../../ApiCalls/Auth/Auth";

export default function SignupPage({
  setAuthState,
  cred,
  setCred,
  setOtpModalActive,
}) {
  const setValue = (e) => {
    setCred((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signup = (e) => {
    e.preventDefault();

    // Prepare signup data
    const signupData = {
      first_name: cred.fullName.split(" ")[0],
      last_name: cred.fullName.split(" ")[1],
      email: cred.email,
      phone_number: cred.phone,
      business_name: cred.businessName,
      password: cred.pass,
      confirm_password: cred.confirmPass,
    };

    if (cred.pass === cred.confirmPass) {
      registerUser(signupData, setOtpModalActive);
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <form className="auth-form signup" onSubmit={signup}>
      <h2 className="h-200">SIGNUP</h2>

      <label htmlFor="name">
        <p>Full Name</p>
        <input
          type="text"
          id="name"
          name="fullName"
          onChange={setValue}
          required
        />
      </label>

      <label htmlFor="businessName">
        <p>Business Name</p>
        <input
          type="text"
          id="businessName"
          name="businessName"
          onChange={setValue}
          required
        />
      </label>

      <label htmlFor="email">
        <p>Email Address</p>
        <input
          type="email"
          id="email"
          name="email"
          value={cred.email}
          onChange={setValue}
          required
        />
      </label>

      <label htmlFor="phone">
        <p>Phone Number</p>
        <input
          type="text"
          inputMode="numeric"
          id="phone"
          name="phone"
          onChange={setValue}
          required
        />
      </label>

      <label htmlFor="password">
        <p>Password</p>
        <input
          type="password"
          id="password"
          name="pass"
          placeholder="At least 8 characters"
          onChange={setValue}
          min={8}
          required
        />
      </label>

      <label htmlFor="confirmPass">
        <p>Confirm Password</p>
        <input
          type="password"
          id="confirmPass"
          name="confirmPass"
          placeholder="At least 8 characters"
          onChange={setValue}
          min={8}
          required
        />
      </label>

      <label htmlFor="terms" className="terms">
        <input type="checkbox" id="terms" required />
        <p>
          I have read and agreed to the Terms & Conditions of Primeclick
          Autoleads. Signing up with Primeclick Autoleads gets you signed up on
          all Sutoleads services
        </p>
      </label>
      <Button variant="solid" text="Create Account" type="submit" />
      <p>
        Already have an account?{" "}
        <span onClick={() => setAuthState("login")} className="toggleAuth">
          Login
        </span>
      </p>
    </form>
  );
}
