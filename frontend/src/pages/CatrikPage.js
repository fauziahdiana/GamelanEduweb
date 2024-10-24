import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import catrik from "../Assets/Projects/panerus_catrik.png";
import saron from "../Assets/Projects/saron_catrik.png";
import jenglong from "../Assets/Projects/jenglong_catrik.png";
import pangkat from "../Assets/Projects/bonang_pangkat.png";
import tabuhan from "../Assets/Projects/tabuhan_bonang.png";

function CatrikPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleShow = (videoUrl, title) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo("");
    setSelectedTitle("");
  };

  const videos = [
    {
      title: "Tabuhan Panerus Catrik",
      url: "https://www.youtube.com/embed/n7Ue5sv6i6A?si=fHZFOg59SKNrLW--",
      thumbnail: catrik,
    },
    {
      title: "Tabuhan Saron Catrik",
      url: "https://www.youtube.com/embed/eov8GxPfIVM?si=VpfYEhYcMhxfsyL6",
      thumbnail: saron,
    },
    {
      title: "Tabuhan Jenglong Catrik",
      url: "https://www.youtube.com/embed/ENr-Op71lbE?si=yumuGqp-njZY6MLV",
      thumbnail: jenglong,
    },
    {
      title: "Pangkat Tabuhan Catrik (Bonang)",
      url: "https://www.youtube.com/embed/Vt_RqVlu_NI?si=TqYH2rZcgaPlRSzE",
      thumbnail: pangkat,
    },
    {
      title: "Tabuhan Bonang Catrik",
      url: "https://www.youtube.com/embed/B4oT8joBuKs?si=WmeIobaVIGiRjb4f",
      thumbnail: tabuhan,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Teknik Tabuhan Lagu - Catrik</h2>
          </div>
        </div>
        
        {/* Row of videos arranged in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="flex flex-col gap-4">
            <div
              className="bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[0].url, videos[0].title)}
            >
              <div className="relative">
                <img
                  src={videos[0].thumbnail}
                  alt={`Thumbnail ${videos[0].title}`}
                  className="w-48 h-28 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-gray-800 bg-opacity-75 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{videos[0].title}</h3>
              </div>
            </div>

            <div
              className="bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[2].url, videos[2].title)}
            >
              <div className="relative">
                <img
                  src={videos[2].thumbnail}
                  alt={`Thumbnail ${videos[2].title}`}
                  className="w-48 h-28 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-gray-800 bg-opacity-75 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{videos[2].title}</h3>
              </div>
            </div>

            <div
              className="bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[4].url, videos[4].title)}
            >
              <div className="relative">
                <img
                  src={videos[4].thumbnail}
                  alt={`Thumbnail ${videos[4].title}`}
                  className="w-48 h-28 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-gray-800 bg-opacity-75 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{videos[4].title}</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[1].url, videos[1].title)}
            >
              <div className="relative">
                <img
                  src={videos[1].thumbnail}
                  alt={`Thumbnail ${videos[1].title}`}
                  className="w-48 h-28 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-gray-800 bg-opacity-75 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{videos[1].title}</h3>
              </div>
            </div>

            <div
              className="bg-[#1a4d6b] hover:bg-[#C28E16] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[3].url, videos[3].title)}
            >
              <div className="relative">
                <img
                  src={videos[3].thumbnail}
                  alt={`Thumbnail ${videos[3].title}`}
                  className="w-48 h-28 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-gray-800 bg-opacity-75 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{videos[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Close button placed in a new row after the last grid item */}
          <div className="col-span-2 flex justify-end p-4">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-[#C28E16]"
              onClick={() => window.history.back()} // Navigate to the previous page
            >
              Kembali
            </button>
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header
            style={{
              backgroundColor: "#1a4d6b", // Set the background to blue
              display: "flex",
              justifyContent: "center", // Center the content inside header
              position: "relative", // Allow positioning the close button
            }}
          >
            <Modal.Title
              style={{ textAlign: "center", color: "#F6B51B", flex: 1 }}
            >
              {selectedTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item w-full h-96"
              src={selectedVideo}
              title={selectedTitle}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <div className="flex items-center bg-[#164058] justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-white background-transparent font-bold uppercase px-6 py-2 text-m outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-[#C28E16] hover:text-white"
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

export default CatrikPage;
