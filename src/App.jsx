import React from "react";
import { Route, Routes, useLocation } from "react-router";

import Home from "./pages/Home";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
