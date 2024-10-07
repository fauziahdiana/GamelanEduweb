import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import video1 from "../Assets/Video/video1.mp4"; // Video lokal
import video2 from "../Assets/Video/video2.mp4";
import video3 from "../Assets/Video/video3.mp4";
import video4 from "../Assets/Video/video4.mp4";
import thumbnailImage from "../Assets/Projects/thumb1.png"; // Gambar thumbnail
import thumb2 from "../Assets/Projects/thumb2.png";
import thumb3 from "../Assets/Projects/thumb3.png";
import thumb4 from "../Assets/Projects/thumb4.png";

function Tutorial() {
  // State untuk modal
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  // Fungsi untuk membuka modal
  const handleShow = (videoUrl, title, description) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo("");
    setSelectedTitle("");
    setSelectedDescription("");
  };

  // Data video untuk ditampilkan
  const videos = [
    {
      title: "Tabuhan Kulu-Kulu Bonang",
      description: "Video ini menjelaskan teknik dasar dalam memainkan instrumen Saron pada gamelan, termasuk cara memukul dan memposisikan alat.",
      url: video1,
      thumbnail: thumbnailImage,
    },
    {
      title: "Tabuhan Goong Embat Sawilen",
      description: "Pelajari teknik memainkan Bonang pada gamelan, mencakup pukulan dasar dan kombinasi tabuhan untuk lagu tradisional.",
      url: video2,
      thumbnail: thumb2,
    },
    {
      title: "Tabuhan Saron Sinyur",
      description: "Tutorial tentang cara memainkan Jenglong dengan benar, fokus pada irama dasar dan pemahaman pola pukulan.",
      url: video3,
      thumbnail: thumb3,
    },
    {
      title: "Pola Tabuh Kulu-Kulu Saron",
      description: "Panduan langkah demi langkah dalam memainkan Goong, mencakup penggunaan alat pukul dan teknik memperkuat suara.",
      url: video4,
      thumbnail: thumb4,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="inline-block mx-auto bg-[#164058] shadow-lg rounded-2xl overflow-hidden mt-1 mb-8">
          <div className="p-2">
            <h2 className="project-heading mb-2 text-white">
              Teknik Tabuhan <strong className="purple">Dasar</strong>
            </h2>
          </div>
        </div>

        {/* Grid untuk menampilkan video thumbnail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-[#164058] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-lg overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(video.url, video.title, video.description)}
            >
              {/* Thumbnail Video */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail ${video.title}`}
                  className="w-48 h-28 object-cover"
                />
                {/* Icon Play di atas gambar */}
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
              {/* Deskripsi Video */}
              <div className="p-4 text-white flex-1">
                <h3 className="text-xl font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal untuk memutar video */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Video */}
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
            {/* Deskripsi Video */}
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
