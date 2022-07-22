import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Project/Projects";
import Skills from "../Skills/Skills";
import Login from "../Login/Login";

export default function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
