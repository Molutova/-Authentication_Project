import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    navigate("/newpage"); //это я погуглила, чтобы при клике он сохранял и переходил на страницу, до этого не использовала useNavigate
    onLogin(); //скажу правду, это я посмотрела, потому что не понимала как открывать в новой странице
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
        <p className="pass_txt">Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="log_btn" onClick={handleLogin}>
        Login
      </button>
      <p className="sign_txt">
        Don’t have an Account?{" "}
        <button className="sign_btn">Sign up here</button>
      </p>
    </div>
  );
}

export default Email;
