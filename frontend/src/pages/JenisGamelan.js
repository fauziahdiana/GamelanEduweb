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
  const [isCardVisible6, setIsCardVisible6] = useState(false);
  const [isCardVisible7, setIsCardVisible7] = useState(false);
  const [isCardVisible8, setIsCardVisible8] = useState(false);

  const toggleCardVisibility1 = () => {
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
      <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Jenis-Jenis Gamelan</h2>
          </div>
      </div>
      
      <div className="w-full">
      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility1}
        className="w-full mb-2 p-3 bg-[#164058] hover:bg-[#C28E16] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ml-4 ${isCardVisible1 ? 'text-yellow-500' : 'text-white'}`}
          style={{fontSize: "20px"}}
        >
          Gamelan Jawa Barat
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible1 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full">
            <p className="mt-4 mb-4 text-white text-justify text-neutral-600 dark:text-neutral-200" style={{fontSize: "20px"}}>
              Dalam kebudayaan Sunda, Degung berasal dari istilah “ngadeg” dan “agung” yang dalam bahasa Indonesia bisa
              diartikan dengan kata berdiri dan megah. Dalam bahasa Indonesia, kedua kata itu bersama-sama membentuk kata
              pangagung, yang berarti "bangsawan" atau "Menak." Orang Sunda percaya bahwa Degung adalah musik kerajaan
              atau Kadaleman karena memiliki arti yang sama dengan seni yang dimaksudkan mencerminkan keagungan dan martabat 
              bangsawan. Pernyataan lain menyatakan bahwa Degung berasal dari istilah "Deg Ngadeg Kanu Agung" yang berarti harus 
              selalu menghadapi dan menyembah Tuhan Yang Mahakuasa. Ada asumsi lain sementara orang-orang bahwa kata degung 
              berasal dari kata "ratu-agung" atau "tumenggung", seperti yang dikatakan bahwa Gamelan Degung sangat populer di 
              kalangan pejabat pada waktu itu, misalnya Bandung Regent R.A.A. WIRANATAKUSUMA adalah salah satu yang sangat 
              menyukai pejabat-pejabat (Herawan, 2009).
            <br></br>
            <br></br>Sumber: Pupu Maspuroh dkk, Jurnal Artefak Vol.10 No.2 September 2023
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility2}
        className="w-full mb-2 p-3 bg-[#164058] hover:bg-[#C28E16] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ml-4 ${isCardVisible2 ? 'text-yellow-500' : 'text-white'}`}
          style={{fontSize: "20px"}}
        >
          Gamelan Jawa Tengah
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible2 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full">
            <p className="mt-4 mb-4 text-white text-justify text-neutral-600 dark:text-neutral-200" style={{fontSize: "20px"}}>
              Nama gamelan berasal dari kata “gamel” yang dalam bahasa Jawa berarti memukul atau menabuh, sedangkan akhiran 
              “an” merujuk pada kata benda (Asnawa,2007). Oleh karena itu, gamelan merupakan suatu aktivitas menabuh yang 
              dilakukan oleh orang zaman dahulu yang kemudian menjadi nama alat musik ansambel. Gamelan Jawa memiliki penyajian 
              dengan pelarasan salendro dan pelog. Sedangkan, Jawa Tengah merupakan perujukan pada nama daerah berasal. 
            <br></br>Jadi secara harfiah, gamelan Jawa Tengah berarti: sepenuhnya alat musik tradisional yang dimainkan dengan cara dipukul atau ditabuh di provinsi Jawa Tengah
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility3}
        className="w-full mb-2 p-3 bg-[#164058] hover:bg-[#C28E16] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ml-4 ${isCardVisible3 ? 'text-yellow-500' : 'text-white'}`}
          style={{fontSize: "20px"}}
        >
          Gamelan Jawa Timur
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible3 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full">
            <p className="mt-4 mb-4 text-white text-justify text-neutral-600 dark:text-neutral-200" style={{fontSize: "20px"}}>
              Gamelan Jawa Timur adalah ensembel musik tradisional yang berasal dari wilayah Jawa Timur, Indonesia. Musik 
              gamelan di Jawa Timur sering kali menyertakan campuran repertoar dan gaya permainan lokal dengan gaya Surakarta. 
              Namun, ada beberapa perbedaan khas, seperti penggunaan kempul yang lebih sering dibandingkan kenong, serta 
              struktur gong yang mirip dengan gending Jawa Tengah tetapi dengan variasi lokal.
            <br></br>
              Karena keanekaragaman dan berkembangnya kebudayaan sehingga gamelan terdapat di beberapa wilayah seperti 
              Jawa, Bali, dan Bugis. Gamelan khususnya di Jawa berhubungan erat dengan perkembangan religius yang dianutnya 
              (Iswara, 2017:3). Menurut Wiratama (2021:6) mempelajari keanekaragaman suku dan budaya di Indonesia berarti 
              memahami bahwa Indonesia terbentuk dari sikap sosial yang baik dari pendiri bangsa.
            <br></br>
            <br></br> Sumber: Kristianto kurnia putra, Heru Budianto, Agus Budianto, Semendikjar 5, 2022.
            </p>
          </div>
        </div>
      )}

      {/* Dropdown Button */}
     

      {/* Dropdown Button */}
      <button
        onClick={toggleCardVisibility5}
        className="w-full mb-2 p-3 bg-[#164058] hover:bg-[#C28E16] text-white rounded-lg flex items-center justify-between focus:outline-none"
      >
        <span
          className={`text-left ml-4 ${isCardVisible5 ? 'text-yellow-500' : 'text-white'}`}
          style={{fontSize: "20px"}}
        >
          Gamelan Bali
        </span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>

      {/* Card */}
      {isCardVisible5 && (
        <div className="flex flex-col md:flex-row bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2 rounded-xl">
          <div className="flex flex-col justify-center p-6 text-left text-black w-full">
            <p className="mt-4 mb-4 text-white text-justify text-neutral-600 dark:text-neutral-200" style={{fontSize: "20px"}}>
              Gamelan Bali sudah ada sejak abad ke-15, dengan awal mula gamelan gambang yang menjadi bagian dari gamelan wayah. 
              Gamelan Bali bukan hanya sekedar musik tradisional, namun juga memiliki nilai-nilai spiritual dan estetika yang 
              melekat. Konsep estetika Hindu yang meliputi kesucian (shiwam), kebenaran (satyam), dan keseimbangan (sundaram) 
              sangat melekat dalam gamelan Bali. Unsur filsafat, etika, dan estetika ini tercermin dalam proses pembuatannya, 
              pengaturan bunyi, dan simbol-simbol dewa yang terkait dengan tiap instrumen bilah pisau.
              <br></br>
              Gamelan Bali adalah jenis musik tradisional Indonesia yang terkenal dengan ritme cepat dan bunyi yang 
              meledak-ledak. Berbeda dengan gamelan Jawa, gamelan Bali memiliki ciri khas instrumen seperti ceng-ceng 
              (sejenis simbal kecil) yang memberikan karakter dinamis. Terdapat berbagai jenis gamelan, termasuk gamelan 
              perunggu dan bambu, serta dibagi menjadi tiga kelompok berdasarkan zaman: wayah (tua), madya , dan anyar (baru).
              Gamelan Bali merupakan salah satu intrument musik Indonesia dengan kearifan lokal dan kental. Menurut Rukzzolangan 
              gamelan diartikan sebagai kelompok instrumen musik yang dimainkan  secara sepatu dalam sebuah kelompok 
              (Ariani dan Sukmayanti, 2013)
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
