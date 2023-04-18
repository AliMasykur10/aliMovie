import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desc from "./pages/desc/desc.js";
import Home from "./pages/home/home.js";
import Search from "./pages/search/search.js";
import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desc/:id" element={<Desc />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
