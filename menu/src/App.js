import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeAttackPage from "./components/TimeAttackPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import ForzaPage from "./components/ForzaPage";
import DriftPage from "./components/DriftPage";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
      <p className="article__paragraph note">
        This is a React Router experience task demo page. Would you like to see{" "}
        <a
          className="note_github_link"
          href="https://github.com/laps78/router-menu-task"
        >
          the source
        </a>
        ?
      </p>
    </Router>
  );
}