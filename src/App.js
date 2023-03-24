// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./pages/about/about.js";
import Contact from "./pages/contact/contact.js";
import Home from "./pages/home/home.js";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
