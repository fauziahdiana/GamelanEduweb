import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Waditra from "./pages/Waditra";
import Jenis from "./pages/JenisGamelan";
import Notasi from "./pages/Notasi";
import Tutorial from "./pages/Tutorial";
import TutorialLagu from "./pages/TutorialLagu";
import TutorialAgeung from "./pages/TutorialAgeung";
import CatrikPage from "./pages/CatrikPage";
import SinyurPage from "./pages/SinyurPage";
import KulukuluPage from "./pages/KulukuluPage";
import LaguAgeung from "./pages/LaguAgeung";
import Kontak from "./pages/Kontak";
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
          <Route path="/tutorial-lagu" element={<TutorialLagu/>} />
          <Route path="/tutorial-ageung" element={<TutorialAgeung/>} />
          <Route path="/catrik-page" element={<CatrikPage/>} />
          <Route path="/sinyur-page" element={<SinyurPage/>} />
          <Route path="/kulukulu-page" element={<KulukuluPage/>} />
          <Route path="/lagu-ageung" element={<LaguAgeung/>} />
          <Route path="/kontak" element={<Kontak/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
