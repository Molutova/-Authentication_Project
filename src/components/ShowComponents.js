import React, { useState } from "react";
import Email from "./Email";
import Main from "./Main";
import SignUp from "./SignUp";

function ShowComponents() {
  const [showComponents, setShowComponents] = useState(true);

  const handleLogin = () => {
    setShowComponents(false); //чтобы при переходе на страницу не отоброжались Main и Email
  };
  return (
    <div>
      {showComponents && (
        <>
          <Main />
          <Email onLogin={handleLogin} />
          <SignUp onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default ShowComponents;
