import React, { useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import video1 from "../Assets/Video/Pangkat Tabuhan Catrik Bonang.mp4";
import video2 from "../Assets/Video/Tabuhan Bonang Catrik.mp4";
import video3 from "../Assets/Video/Tabuhan Kulu-Kulu Bonang.mp4";
import video4 from "../Assets/Video/Tabuhan Panerus Kulukulu.mp4";
import video5 from "../Assets/Video/Tabuhan Saron Catrik.mp4" 
import thumb1 from "../Assets/Projects/thumb1.png"; 
import thumb2 from "../Assets/Projects/thumb2.png";
import thumb3 from "../Assets/Projects/thumb3.png";
import thumb4 from "../Assets/Projects/thumb4.png";
import thumb5 from "../Assets/Projects/thumb5.png";

function Tutorial() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleShow = (videoUrl, title, description) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo("");
    setSelectedTitle("");
    setSelectedDescription("");
  };

  const videos = [
    {
      title: "Pangkat Tabuhan Catrik Bonang",
      description:
        "Video ini menjelaskan teknik dasar dalam memainkan instrumen Saron pada gamelan, termasuk cara memukul dan memposisikan alat.",
      url: video1,
      thumbnail: thumb1,
    },
    {
      title: "Tabuhan Bonang Catrik",
      description:
        "Pelajari teknik memainkan Bonang pada gamelan, mencakup pukulan dasar dan kombinasi tabuhan untuk lagu tradisional.",
      url: video2,
      thumbnail: thumb2,
    },
    {
      title: "Tabuhan Kulu-Kulu Bonang",
      description:
        "Tutorial tentang cara memainkan Jenglong dengan benar, fokus pada irama dasar dan pemahaman pola pukulan.",
      url: video3,
      thumbnail: thumb3,
    },
    {
      title: "Tabuhan Panerus Kulukulu",
      description:
        "Teknik memainkan alat musik tiup tradisional Sunda dengan penekanan pada embusan nada.",
      url: video4,
      thumbnail: thumb4,
    },
    { 
      title: "Tabuhan Saron Catrik",
      description:
        "Teknik memainkan alat musik tiup tradisional Sunda dengan penekanan pada embusan nada.",
      url: video5,
      thumbnail: thumb5,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
            <div className="p-2 text-center">
              <h2 className="project-heading mb-2 text-white">Teknik Tabuhan Lagu</h2>
            </div>
        </div>
        {/* Row of videos arranged in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1: Video 1 on top of Video 3 */}
          <div className="flex flex-col gap-4">
            {/* Video 1 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() =>
                handleShow(videos[0].url, videos[0].title, videos[0].description)
              }
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
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() =>
                handleShow(videos[2].url, videos[2].title, videos[2].description)
              }
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

            {/* Video 5 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() =>
                handleShow(videos[4].url, videos[4].title, videos[4].description)
              }
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

          {/* Column 2: Video 2 on top of Video 4 */}
          <div className="flex flex-col gap-4">
            {/* Video 2 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() =>
                handleShow(videos[1].url, videos[1].title, videos[1].description)
              }
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
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() =>
                handleShow(videos[3].url, videos[3].title, videos[3].description)
              }
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
        </div>

        {/* Modal to play video */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header 
            style={{ 
              backgroundColor: "#1a4d6b", // Set the background to blue
              display: "flex", 
              justifyContent: "center", // Center the content inside header
              position: "relative" // Allow positioning the close button
            }}
          >
            <Modal.Title style={{ textAlign: "center", color: "#F6B51B", flex: 1 }}>
              {selectedTitle}
            </Modal.Title>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
              style={{ 
                position: "absolute",
                right: "15px",
                top: "27px",
                filter: "invert(1)", // This inverts the color to white
              }}
            />
          </Modal.Header>
          <Modal.Body>
            {selectedVideo && selectedVideo.includes("youtube.com") ? (
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  src={selectedVideo}
                  title={selectedTitle}
                  frameBorder="0"
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
            <div>
              <h5 className="text-lg font-semibold mb-2">Deskripsi Video</h5>
              <p>{selectedDescription}</p>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Tutorial;
