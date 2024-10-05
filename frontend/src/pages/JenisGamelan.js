import React from "react";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Container, Row, Col } from "react-bootstrap";

function JenisGamelan() {
  const [isCardVisible1, setIsCardVisible1] = useState(false);
  const [isCardVisible2, setIsCardVisible2] = useState(false);
  const [isCardVisible3, setIsCardVisible3] = useState(false);
  const [isCardVisible4, setIsCardVisible4] = useState(false);
  const [isCardVisible5, setIsCardVisible5] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible1(!isCardVisible1);
  };

  const toggleCardVisibility2 = () => {
    setIsCardVisible2(!isCardVisible2);
  };

  const toggleCardVisibility3 = () => {
    setIsCardVisible3(!isCardVisible3);
  };

  const toggleCardVisibility4 = () => {
    setIsCardVisible4(!isCardVisible4);
  };

  const toggleCardVisibility5 = () => {
    setIsCardVisible5(!isCardVisible5);
  };


  return (
    <Container fluid className="about-section">
      <Container> 
      <div className="max-w-sm mx-auto bg-[#164058] shadow-lg rounded-2xl overflow-hidden mt-1 mb-8">
        <div className="p-2">
          <h2 className="project-heading mb-2 text-white">
            Jenis-Jenis <strong className="purple">Gamelan</strong>
          </h2>
        </div>
      </div>
      <div className="w-full">
      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility}
        className="w-full mb-2 p-2 bg-[#164058] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ${isCardVisible1 ? 'text-yellow-500' : 'text-white'}`}
        >
          Gamelan Jawa Barat
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible1 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            {/* <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Saron
            </h5> */}
            <p className="mb-4 text-white text-base text-neutral-600 dark:text-neutral-200">
            Gamelan Degung berasal dari Sunda, Jawa Barat, dan biasanya digunakan dalam upacara adat, pernikahan, serta pertunjukan seni. 
            Ansambel ini lebih kecil dibandingkan gamelan Jawa atau Bali, dan memiliki suara yang lebih lembut. 
            Instrumen utama dalam Gamelan Degung termasuk saron, bonang, kendang, jengglong, dan gong, 
            dengan fokus pada harmoni yang halus dan melodi yang mengalun.
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility2}
        className="w-full mb-2 p-2 bg-[#164058] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ${isCardVisible2 ? 'text-yellow-500' : 'text-white'}`}
        >
          Gamelan Jawa Tengah
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible2 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mb-4 text-white text-base text-neutral-600 dark:text-neutral-200">
            Gamelan Gedhe atau "Gamelan Besar" adalah ansambel gamelan tradisional yang paling lengkap dan kaya di Jawa Tengah. 
            Gamelan ini biasanya digunakan untuk pertunjukan wayang, tari, dan upacara keraton. Terdiri dari berbagai instrumen 
            seperti gong, kenong, saron, bonang, gambang, gender, dan rebab, Gamelan Gedhe menghasilkan suara yang kompleks dan megah.
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility3}
        className="w-full mb-2 p-2 bg-[#164058] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ${isCardVisible3 ? 'text-yellow-500' : 'text-white'}`}
        >
          Gamelan Jawa Timur
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible3 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mb-4 text-white text-base text-neutral-600 dark:text-neutral-200">
            Gamelan Senggani berasal dari Jawa Timur dan digunakan dalam konteks budaya lokal untuk mengiringi tarian atau upacara adat. 
            Musiknya cenderung memiliki ritme yang dinamis dan tempo yang lebih cepat, dengan instrumen khas seperti saron, bonang, 
            kenong, dan kendang yang menciptakan suasana yang energik dan penuh semangat.
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility4}
        className="w-full mb-2 p-2 bg-[#164058] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ${isCardVisible4 ? 'text-yellow-500' : 'text-white'}`}
        >
          Gamelan Jakarta
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible4 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mb-4 text-white text-base text-neutral-600 dark:text-neutral-200">
            Gamelan Cokekan adalah gamelan yang digunakan di wilayah Betawi, Jakarta, terutama dalam hiburan rakyat atau pertunjukan 
            kesenian Betawi. Ansambel ini lebih sederhana dibandingkan dengan gamelan Jawa atau Bali, dan sering digunakan untuk 
            mengiringi seni pertunjukan lokal seperti lenong atau gambang kromong. Instrumennya biasanya lebih ringan dan mudah dibawa.
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility5}
        className="w-full mb-2 p-2 bg-[#164058] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ${isCardVisible5 ? 'text-yellow-500' : 'text-white'}`}
        >
          Gamelan Bali
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible5 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
            <p className="mb-4 text-white text-base text-neutral-600 dark:text-neutral-200">
              Gamelan Bebali juga merupakan ansambel gamelan Bali yang memiliki fungsi upacara, namun berbeda dari Gamelan Wali, 
              Gamelan Bebali digunakan dalam upacara yang melibatkan pertunjukan seni, seperti tari-tarian sakral atau drama tari topeng. 
              Musik yang dihasilkan lebih kompleks dan kadang-kadang dimainkan untuk mengiringi pertunjukan yang memiliki nilai budaya dan 
              sejarah, seperti upacara odalan yang lebih besar.
            </p>
          </div>
        </div>
      )}
    </div>

      </Container>


    </Container>
    
  );
}

export default JenisGamelan;
