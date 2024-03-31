import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/login.jsx";
import { Dashboard } from "./pages/Dashboard/dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
