import React from "react";
import { Container } from "react-bootstrap";
import { FaFolder } from "react-icons/fa"; // Import folder icon from react-icons

function Tutorial() {
  // Function to handle button clicks to navigate to different pages
  const handleNavigate = (url) => {
    window.location.href = url; // Replace with actual navigation if using react-router
  };

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Teknik Tabuhan Lagu</h2>
          </div>
        </div>

        {/* Row of buttons */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Button 1 */}
          <div
            className="flex items-center bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md cursor-pointer p-4"
            onClick={() => handleNavigate("/catrik-page")}
          >
            <FaFolder className="h-10 w-10 text-white mr-2" />
            <span className="text-white font-semibold">Tabuhan Catrik</span>
          </div>

          {/* Button 2 */}
          <div
            className="flex items-center bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md cursor-pointer p-4"
            onClick={() => handleNavigate("/sinyur-page")}
          >
            <FaFolder className="h-10 w-10 text-white mr-2" />
            <span className="text-white font-semibold">Tabuhan Sinyur (Puspajala)</span>
          </div>

          {/* Button 3 */}
          <div
            className="flex items-center bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md cursor-pointer p-4"
            onClick={() => handleNavigate("/kulukulu-page")}
          >
            <FaFolder className="h-10 w-10 text-white mr-2" />
            <span className="text-white font-semibold">Tabuhan Kulu-Kulu</span>
          </div>

          {/* Button 4
          <div
            className="flex items-center bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md cursor-pointer p-4"
            onClick={() => handleNavigate("/lagu-ageung")}
          >
            <FaFolder className="h-10 w-10 text-white mr-2" />
            <span className="text-white font-semibold">Tabuhan Lagu Ageung - Galatik Mangut</span>
          </div> */}
        </div>
      </Container>
    </Container>
  );
}

export default Tutorial;
