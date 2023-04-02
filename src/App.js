import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desc from "./pages/desc/desc.js";
import Home from "./pages/home/home.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desc" element={<Desc />} />
      </Routes>
    </Router>
  );
};

export default App;
