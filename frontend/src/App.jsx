import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/login.jsx";
import { Dashboard } from "./pages/Dashboard/dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota de login */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Rota do dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
