import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function SignUp({ onLogin }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
    onLogin();
  };

  return (
    <div>
      <p className="sign_txt">
        Don’t have an Account?
        <button className="sign_btn" onClick={handleClick}>
          Sign up here
        </button>
      </p>
    </div>
  );
}

export default SignUp;
