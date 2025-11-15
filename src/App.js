import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from './Components/Footer.jsx';

import Login from "./Components/Login";
import Register from "./Components/Registration";
import AllUsers from "./Components/AllUsers";
import TopScore from "./Components/TopScores";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Score from "./Components/Score";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header will be common across all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/topscore" element={<TopScore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/score" element={<Score />} />
      </Routes>

      {/* Footer will be common across all pages */}
      <Footer />
    </BrowserRouter>
  );
}
