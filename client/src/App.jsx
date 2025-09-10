import React from "react";
import Checkout from "./pages/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";
import Cancel from "./pages/Cancel/Cancel";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
