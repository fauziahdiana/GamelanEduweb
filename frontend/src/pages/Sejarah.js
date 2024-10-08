import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gamelan1 from "../Assets/Projects/gamelan_1.png";
import gamelan2 from "../Assets/Projects/gamelan_2.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
      <div className="max-w-sm mx-auto bg-[#164058] shadow-lg rounded-2xl overflow-hidden mt-1 mb-8">
        <div className="p-2">
          <h2 className="project-heading mb-2 text-white">
            Sejarah <strong className="purple">Gamelan</strong>
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2">
      <div className="flex flex-col items-center justify-center w-full md:w-1/3">
        <img
          className="h-48 w-48 mt-2 object-cover rounded-lg"
          src={gamelan1}
          alt="Saron"
        />
        <p className="mt-2 text-white text-xs text-neutral-500 dark:text-neutral-300">
        (Sumber : https://id.wikipedia.org/wiki/Gamelan_Jawa)
        </p>
      </div>
      <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
        {/* <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Saron
        </h5> */}
        <p className="mb-4 text-base text-white text-neutral-600 dark:text-neutral-200">
        Gamelan merupakan salah satu alat musik tradisional Indonesia yang berasal dari daerah jawa. 
        Gamelan itu sendiri berasal dari bahasa Jawa, “gamel” yang berarti memukul atau menabuh, 
        diikuti akhiran “an” yang menjadikannya kata benda. Gamelan sering kita kenal sebagai salah satu perangkat 
        musik yang tedapat dalam karawitan sunda, yang dikenal dengan sebutan “Gamelan Degung”.
        </p>
        <p className="text-xs text-white text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
      <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
        {/* <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Bonang
        </h5> */}
        <p className="mb-4 text-base text-white text-neutral-600 dark:text-neutral-200">
        Keanekaragaman kesenian di Jawa Barat, salah satunya adalah kesenian Degung yang sudah ada sejak awal abad ke-19. 
        Dalam kebudayaan Sunda, Degung berasal dari kata 'ngadeg' dan 'agung,' yang berarti berdiri megah. 
        Kata ini mengandung makna 'bangsawan' atau 'Menak,' mencerminkan musik kerajaan yang menggambarkan keagungan dan martabat. 
        Ada pandangan lain yang menyebut bahwa Degung berasal dari istilah 'Deg Ngadeg Kanu Agung,' yang berarti selalu menyembah 
        Tuhan Yang Mahakuasa. Asumsi lain menyatakan bahwa kata 'degung' mungkin berasal dari 'ratu-agung' atau 'tumenggung,' 
        mengingat Gamelan Degung sangat populer di kalangan pejabat, seperti Bandung Regent R.A.A. Wiranatakusuma
        </p>
        {/* <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/3">
        <img
          className="h-48 w-48 mt-2 object-cover rounded-lg"
          src={gamelan2}
          alt="Saron"
        />
         <p className="mt-2 text-white text-xs text-center text-neutral-500 dark:text-neutral-300 md:text-sm lg:text-base">
         (Sumber : <a href="https://www.askara.co/read/2021/09/01/21208/nang-ning-nung-neng-gung" className="text-blue-500 hover:underline">askara.co</a>)
        </p>
      </div>
    </div>

      </Container>
    </Container>
  );
}

export default About;
