import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MainBlock from "./pages/Main/MainBlock";
import BodyWork from "./pages/BodyWork";
import About from "./pages/About";
import Auto from "./pages/Auto";
import Contacts from "./pages/Contacts";
import axios from "axios";
import { get } from "./api";
import Mark from "./pages/Mark";

const App = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get(get + "/cars/list/").then((response) => {
      setCars(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(get + "/cars/cars/").then((response) => {
      setBrands(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainBlock cars={cars} brands={brands} />} />
        <Route path="/body-work" element={<BodyWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/marks" element={<Auto />} />
        <Route path="/mark/:name" element={<Mark />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
