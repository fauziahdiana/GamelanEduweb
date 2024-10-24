import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import dasar1 from "../Assets/Projects/POLA TABUHAN DASAR GAMELAN DEGUNG_1.jpg";
import dasar2 from "../Assets/Projects/POLA TABUHAN DASAR GAMELAN DEGUNG_2.jpg"; // New image for Pola Tabuhan Dasar
import catrik from "../Assets/Projects/Catrik.jpg";
import kulukulu from "../Assets/Projects/Kulu-Kulu.jpg";
import sinyur from "../Assets/Projects/Sinyur.jpg";
import mangut1 from "../Assets/Projects/mangut.jpg";
import mangut2 from "../Assets/Projects/mangut2.jpg";

function Notasi() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      title: "Notasi 1 - Pola Tabuhan Dasar Gamelan Degung",
      urls: [dasar1, dasar2], // Two images for this item
    },
    {
      title: "Notasi 2 - Tabuhan Catrik",
      urls: [catrik], // Only one image for this item
    },
    {
      title: "Notasi 3 - Tabuhan Kulu-Kulu",
      urls: [kulukulu],
    },
    {
      title: "Notasi 4 - Tabuhan Puspa Jala (Sinyur)",
      urls: [sinyur],
    },
    {
      title: "Notasi 5 - Tabuhan Lagu Ageung",
      urls: [mangut1, mangut2],
    },
  ];

  const handleShow = (index) => {
    setSelectedIndex(index);
    setSelectedImageIndex(0); // Reset to the first image
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedIndex(0);
    setSelectedImageIndex(0);
  };

  const handleNext = () => {
    if (selectedImageIndex < images[selectedIndex].urls.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Notasi</h2>
          </div>
        </div>
        {/* Grid layout for images (1 column, 5 rows) */}
        <div className="grid grid-cols-1 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-transparent hover:bg-transparent transition-colors duration-300 rounded-xl shadow-none flex items-center cursor-pointer px-6 py-2"
              onClick={() => handleShow(index)}
            >
           <div className="p-3 text-white flex-1 text-left bg-[#1a4d6b] rounded-full">
                <h3 className="text-xl mx-3 mt-2 mb-2 font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to show enlarged image */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header 
            style={{ 
              backgroundColor: "#1a4d6b",
              display: "flex", 
              justifyContent: "center", 
              position: "relative" 
            }}
          >
            <Modal.Title style={{ textAlign: "center", color: "#F6B51B", flex: 1 }}>
              {images[selectedIndex].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center relative">
            <img
              src={images[selectedIndex].urls[selectedImageIndex]} // Show the current image
              alt={images[selectedIndex].title}
              style={{ width: "100%" }}
            />

            {/* Conditional Previous button */}
            {selectedImageIndex > 0 && (
              <button
                className="text-black bg-transparent font-bold uppercase px-6 py-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl"
                onClick={handlePrevious}
                style={{ zIndex: 1 }}
              >
                &#10094;
              </button>
            )}

            {/* Conditional Next button */}
            {selectedImageIndex < images[selectedIndex].urls.length - 1 && (
              <button
                className="text-black bg-transparent font-bold uppercase px-6 py-4 absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl"
                onClick={handleNext}
                style={{ zIndex: 1 }}
              >
                &#10095;
              </button>
            )}
          </Modal.Body>
          <div className="flex items-center bg-[#164058] justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-white background-transparent font-bold uppercase px-6 py-2 text-m outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
              type="button"
              onClick={handleClose}
            >
              Kembali
            </button>
          </div>
        </Modal>
      </Container>
    </Container>
  );
}

export default Notasi;
