import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Waditra from "./pages/Waditra";
import Jenis from "./pages/JenisGamelan";
import Notasi from "./pages/Notasi";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/sejarah" element={<Sejarah/>} />
          <Route path="/jenis" element={<Jenis/>} />
          <Route path="/waditra" element={<Waditra/>} />
          <Route path="/notasi" element={<Notasi/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
