import React, { useState } from "react";
import "./../LoginPage/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGooglePlus,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  let [active, setActive] = useState(true);
  // let container = () => {
  //   document.getElementById("container");
  // };
  // let handleLogin = () => {
  //   container.classList.add("active");
  // };
  // let handleRegister = () => {
  //   container.classList.remove("active");
  // };
  let handleLogin = () => {
    setActive(true);
    // console.log("hello");
  };
  let handleRegister = () => {
    setActive(false);
  };
  return (
    <>
      <div className={active ? "container" : "container active"} id="container">
        <div className="form-container sign-up">
          <form action="">
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span>or Use email</span>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter your Email Id" />
            <input type="password" placeholder="Create password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form action="">
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Enter Email Id" />
            <input type="password" placeholder="Enter your password" />
            <a href="#">Forgot Password</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Hi There, Welcome Back !</h1>
              <p>Enter your Credentials to Log In</p>
              <button className="hidden" id="login" onClick={handleLogin}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hi Welcome To Sign Up Page!</h1>
              <p>Let's started by entering your details</p>
              <button className="hidden" id="register" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
