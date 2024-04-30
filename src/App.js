import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MainBlock from "./pages/Main/MainBlock";
import BodyWork from "./pages/BodyWork";
import Main from "./components/Main";
import About from "./pages/About";
import Auto from "./pages/Auto";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainBlock />} />
        <Route path="/body-work" element={<BodyWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/marks" element={<Auto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
