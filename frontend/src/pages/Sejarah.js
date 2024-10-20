import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import source1 from "../Assets/Projects/gamelan_2.jpg";
import gamelan2 from "../Assets/Projects/gamelan_1.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* Adjusted width to be consistent */}
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Sejarah Gamelan</h2>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <img
              className="h-40 w-80 mt-5 object-cover rounded-lg"
              src={source1}
              alt="Source"
            />
            <p className="mt-3 mb-5 mx-8 text-white text-xs text-neutral-500 dark:text-neutral-300">
              (Sumber :{" "}
              <a
                href="https://id.wikipedia.org/wiki/Gamelan_Jawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 underline"
              >
                https://id.wikipedia.org/wiki/Gamelan_Jawa
              </a>
              )
            </p>
          </div>
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mb-4 mx-3 text-justify text-white text-neutral-600 dark:text-neutral-200 leading-[1.5]" style={{fontSize: "20px"}}>
              Gamelan merupakan salah satu alat musik tradisional Indonesia yang
              berasal dari daerah jawa. Gamelan itu sendiri berasal dari bahasa
              Jawa, “gamel” yang berarti memukul atau menabuh, diikuti akhiran
              “an” yang menjadikannya kata benda. Gamelan sering kita kenal
              sebagai salah satu perangkat musik yang tedapat dalam karawitan
              sunda, yang dikenal dengan sebutan “Gamelan Degung”.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mt-3 mb-4 mx-3 text-justify text-white text-neutral-600 dark:text-neutral-200 leading-[1.5]" style={{fontSize: "20px"}}>
              Keanekaragaman kesenian di Jawa Barat, salah satunya adalah
              kesenian Degung yang sudah ada sejak awal abad ke-19. Dalam
              kebudayaan Sunda, Degung berasal dari kata 'ngadeg' dan 'agung,'
              yang berarti berdiri megah. Kata ini mengandung makna 'bangsawan'
              atau 'Menak,' mencerminkan musik kerajaan yang menggambarkan
              keagungan dan martabat. Ada pandangan lain yang menyebut bahwa
              Degung berasal dari istilah 'Deg Ngadeg Kanu Agung,' yang berarti
              selalu menyembah Tuhan Yang Mahakuasa. Asumsi lain menyatakan
              bahwa kata 'degung' mungkin berasal dari 'ratu-agung' atau
              'tumenggung,' mengingat Gamelan Degung sangat populer di kalangan
              pejabat, seperti Bandung Regent R.A.A. Wiranatakusuma
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <img
              className="h-40 w-80 mt-5 object-cover rounded-lg"
              src={gamelan2}
              alt="Saron"
            />
            <p className="mt-4 mb-5 mx-8 text-white text-xs text-neutral-500 dark:text-neutral-300">
              (Sumber :{" "}
              <a
                href="https://www.askara.co/read/2021/09/01/21208/nang-ning-nung-neng-gung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 underline"
              >
                https://www.askara.co/read/2021/09/01/21208/nang-ning-nung-neng-gung
              </a>
              )
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;
