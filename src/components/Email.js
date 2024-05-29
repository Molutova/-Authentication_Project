import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import eyeSlash from "../assets/eyeslash.svg";
import "../App.css";

function Email({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/newpage");
    onLogin();
  };

  return (
    <div className="email_main">
      <div>
        <p className="email_txt">Email Address</p>
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <div className="pass_description">
          <p className="pass_txt">Password</p>
          <button className="sign_btn">Forget Password</button>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <img src={eyeSlash} alt="Eye Slash" /> */}
      </div>
      <div className="checkbox_description">
        <input type="checkbox" name="checkbox" value="checkbox" />
        <p>Keep me signed in</p>
      </div>

      <button className="log_btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Email;
