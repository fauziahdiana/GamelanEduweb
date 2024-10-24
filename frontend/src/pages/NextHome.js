import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gamelan1 from "../Assets/Projects/gamelan2.png";
import gamelan2 from "../Assets/Projects/gamelan1.png";

function NextHome() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <div className="flex flex-col md:flex-row rounded-lg border border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-5">
      <div className="flex flex-col items-center justify-center w-full md:w-2/3">
        <img
          className="h-70 w-80 mt-5 object-cover rounded-lg"
          src={gamelan1}
          alt="Gamelan1"
        />
        <p className="mt-3 mb-5 mx-8 text-center" style={{color: "#164058", fontSize: "15px"}}>
          Sumber: (Dokumentasi Pribadi)
        </p>
      </div>
      <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-3/3">
        <h5 className="mb-4 text-xl font-medium text-neutral-800" style={{ color: "#F6B51B", fontSize: "35px", marginBottom: "5px" }}>
          Sejarah Gamelan di Indonesia
        </h5>
        <p className="mb-5 text-justify" style={{color: "#164058", fontSize: "20px"}}>
        Gamelan merupakan salah satu alat musik tradisional Indonesia yang berasal dari daerah Jawa. 
        Gamelan sering dikenal dalam karawitan sunda dengan sebutan “Gamelan Degung” (Mustika et al., 2020). 
        Kesenian gamelan degung sudah ada pada awal abad ke-19 (Astuti, Y. S., 2016). 
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row rounded-lg border border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full">
      <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-3/3">
        <h5 className="mt-3 mb-3 text-xl font-medium text-neutral-600" style={{ color: "#F6B51B", fontSize: "35px", marginBottom: "5px" }}>
          Apa itu Waditra?
        </h5>
        <p className="mt-3 mb-4 text-justify" style={{color: "#164058", fontSize: "20px"}}>
        Waditra adalah istilah dalam bahasa Sunda yang mengacu pada alat musik tradisional, 
        termasuk berbagai instrumen yang digunakan dalam kesenian Sunda. Salah satu contohnya adalah Gamelan Degung, 
        sebuah ansambel musik yang terdiri dari berbagai waditra seperti saron, bonang, jenglong, dan goong. 
        Setiap waditra dalam Gamelan Degung memiliki peran penting dalam menciptakan harmoni dan keindahan musik 
        yang mencerminkan budaya dan tradisi Sunda.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-2/3">
        <img
          className="h-55 w-96 mt-4 object-cover rounded-lg"
          src={gamelan2}
          alt="Gamelan2"
        />
        <p className="mt-3 mb-2 mx-8" style={{color: "#164058", fontSize: "15px"}}>
          Sumber: (Dokumentasi Pribadi)
        </p>
      </div>
    </div>
      </Container>
    </Container>
  );
}
export default NextHome;
