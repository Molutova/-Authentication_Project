import React from "react";
import { useNavigate } from "react-router-dom";
function NewPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>You are successfully Logged in</h1>
      <button className="log_btn" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}

export default NewPage;
