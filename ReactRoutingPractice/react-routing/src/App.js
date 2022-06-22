import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
