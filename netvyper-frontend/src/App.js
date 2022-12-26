import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/auth/Login";
import RegisterComponent from "./components/auth/Register";
import DashboardComponent from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginComponent></LoginComponent>}/>
        <Route exact path="/register" element={<RegisterComponent></RegisterComponent>}/>
        <Route exact path="/dashboard" element={<DashboardComponent></DashboardComponent>}/>
        <Route exact path="/" element={<DashboardComponent></DashboardComponent>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
