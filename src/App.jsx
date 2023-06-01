import React from "react";
import { Route, Routes, useLocation } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  );
}

export default App;