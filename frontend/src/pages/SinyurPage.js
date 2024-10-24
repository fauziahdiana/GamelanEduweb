import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import puspajala from "../Assets/Projects/puspajala.png";
import sinyur from "../Assets/Projects/sinyur.png";
import jenglong from "../Assets/Projects/sinyur_jenglong.png";
import bonang from "../Assets/Projects/bonang_sinyur.png";

function SinyurPage() {
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
      title: "Tabuhan Panerus Sinyur (Puspajala)",
      url: "https://www.youtube.com/embed/cjgb43S3PEE?si=l6UGRaBv0RLqWcC2",
      thumbnail: puspajala,
    },
    {
      title: "Tabuhan Saron Sinyur",
      url: "https://www.youtube.com/embed/u3y-s6QORqo?si=NcqdH-lyZ7n0jjco",
      thumbnail: sinyur,
    },
    {
      title: "Tabuhan Jenglong Sinyur (Puspajala)",
      url: "https://www.youtube.com/embed/J8nNtsj9cLk?si=3ImOmYg6WQzQM0Il",
      thumbnail: jenglong,
    },
    {
      title: "Tabuhan Bonang Sinyur (Puspajala)",
      url: "https://www.youtube.com/embed/COh1437Ppq0?si=f09qvZwIPUXSLgVg",
      thumbnail: bonang,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Teknik Tabuhan Lagu - Sinyur (Puspajala)</h2>
          </div>
        </div>
        
        {/* Row of videos arranged in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1: Video 1 on top of Video 3 */}
          <div className="flex flex-col gap-4">
            {/* Video 1 */}
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

            {/* Video 3 */}
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
          </div>

          {/* Column 2: Video 2 on top of Video 4 */}
          <div className="flex flex-col gap-4">
            {/* Video 2 */}
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

            {/* Video 4 */}
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

        {/* Modal to play video */}
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
          <Modal.Body>
            {selectedVideo && selectedVideo.includes("youtube.com") ? (
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  src={selectedVideo}
                  title={selectedTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            ) : (
              <video controls style={{ width: "100%" }} className="mb-4">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
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

export default SinyurPage;
