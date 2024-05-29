import React from "react";
// import eyeSlash from "../assets/eyeslash.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import SignUpMain from "./SignUpMain";

function NewSignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <SignUpMain />
      <div className="signup_main">
        <div>
          <p className="name_txt">Full Name</p>
          <input type="text" name="fname" placeholder="Becca Ade" />
        </div>
        <div>
          <p className="email_txt">Email Address</p>
          <input type="email" name="email" placeholder="example@example.com" />
        </div>
        <div>
          <p className="pass_txt">Password</p>
          <input type="password" name="password" placeholder="*****" />
          {/* <img src={eyeSlash} alt="Eye Slash" className="eyeslash_img" /> */}
        </div>
        <div>
          <p className="pass_txt">Confirm Password</p>
          <input type="password" name="password" placeholder="*****" />
          {/* <img src={eyeSlash} alt="Eye Slash" /> */}
        </div>
        <div className="checkbox_description_sign">
          <input type="checkbox" name="checkbox" value="checkbox" />
          <p>
            By Creating an Account, i accept Hiring Hub terms of <br /> Use and
            Privacy Policy
          </p>
        </div>
        <div>
          <button className="log_btn" onClick={handleClick}>
            Sign Up
          </button>
        </div>

        <div>
          <p className="sign_txt">
            Have an Account?
            <button className="sign_btn">Sign in here</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewSignUp;
