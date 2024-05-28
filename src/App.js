import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Email from "./components/Email";
import Main from "./components/Main";
import NewPage from "./components/NewPage";

function App() {
  const [showComponents, setShowComponents] = useState(true);

  const handleLogin = () => {
    setShowComponents(false); //чтобы при переходе на страницу не отоброжались Main и Email
  };

  return (
    <div>
      <Router>
        {showComponents && (
          <>
            <Main />
            <Email onLogin={handleLogin} />
          </>
        )}
        <Routes>
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
