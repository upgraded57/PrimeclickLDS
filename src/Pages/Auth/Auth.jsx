import { useState } from "react";
import "./auth.css";

// images
import logo from "../../assets/images/logo.png";

// components
import Input from "./../../assets/components/Input/Input";
import Button from "./../../assets/components/button/Button";

// icons
import { FcGoogle } from "react-icons/fc";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Auth() {
  const [authState, setAuthState] = useState("login");
  return (
    <div className="auth">
      <div className="auth-left">
        {authState === "signup" && (
          <>
            <h1 className="h-300">Sign Up</h1>
            <div className="auth-form">
              <form>
                <Input
                  type="text"
                  label="Business Name"
                  name="name"
                  placeholder="John Doe"
                />
                <Input
                  type="email"
                  label="Business Email"
                  name="email"
                  placeholder="johndoe@mail.com"
                />
                <Input
                  type="text"
                  label="Phone Number"
                  name="phone"
                  placeholder="+234(0)91 234 1231 725"
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="**** **** ****"
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  name="confirm-pass"
                  placeholder="**** **** ****"
                />
                <Button variant="solid" type="submit" text="Create Account" />
                <p className="text-body text-center">OR</p>

                <Button
                  variant="outline"
                  text="Sign up with Google"
                  icon={<FcGoogle />}
                />
                <Button
                  variant="outline"
                  text="Sign up with Instagram"
                  icon={<AiOutlineInstagram />}
                />
              </form>
              <div className="flex aic jcc" style={{ gap: "10px" }}>
                <p className="text-body">Already have an account?</p>
                <p
                  className="text-link pointer"
                  onClick={() => setAuthState("login")}
                >
                  Login
                </p>
              </div>
            </div>
          </>
        )}

        {authState === "login" && (
          <>
            <h1 className="h-300">Login</h1>
            <div className="auth-form">
              <form>
                <Input
                  type="email"
                  label="Business Email"
                  name="email"
                  placeholder="johndoe@mail.com"
                />
                <div>
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="**** **** ****"
                  />
                  <small className="forgot-pass">Forgotten Password</small>
                </div>
                <Button variant="solid" type="submit" text="Login" />
                <p className="text-body text-center">OR</p>

                <Button
                  variant="outline"
                  text="Log in with Google"
                  icon={<FcGoogle />}
                />
                <Button
                  variant="outline"
                  text="Log in with Instagram"
                  icon={<AiOutlineInstagram />}
                />
              </form>
              <div className="flex aic jcc" style={{ gap: "10px" }}>
                <p className="text-body">Don't have an account?</p>
                <p
                  className="text-link pointer"
                  onClick={() => setAuthState("signup")}
                >
                  Signup
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="auth-right">
        <div className="auth-right__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="auth-right__content">
          <h1 className="h-300">
            {authState === "signup"
              ? "Welcome to our platform"
              : "Good to have you back"}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt
            culpa ullam placeat, asperiores doloremque vel nemo reiciendis amet
            ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
