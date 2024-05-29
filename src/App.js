import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPage from "./components/NewPage";
import NewSignUp from "./components/NewSignUp";
import ShowComponents from "./components/ShowComponents";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ShowComponents />} />
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/signup" element={<NewSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
