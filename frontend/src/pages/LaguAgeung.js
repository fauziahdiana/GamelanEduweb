import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import mangut from "../Assets/Projects/galatik_mangut.png";
import saron from "../Assets/Projects/galatik_saron.png";
import bonang from "../Assets/Projects/galatik_bonang.png";
import pangkat from "../Assets/Projects/pangkat_bonang.png";
import jenglong from "../Assets/Projects/galatik_jenglong.png";
import lagu from "../Assets/Projects/galatik_mangut.png";

function LaguAgeung() {
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
      title: "Galatik Mangut Peking",
      url: "https://www.youtube.com/embed/YDDMQnZOOz8?si=Bz-y9SsNUpaDFwXZ",
      thumbnail: mangut,
    },
    {
      title: "Galatik Saron Mangut Panerus",
      url: "https://www.youtube.com/embed/fN5h91kbLi0?si=GFiZunNGICGKIdsL",
      thumbnail: saron,
    },
    {
      title: "Tabuhan Galatik Mangut Bonang",
      url: "https://www.youtube.com/embed/1XMQPdhbspc?si=9Kwdb7CiqJxKKw0B",
      thumbnail: bonang,
    },
    {
      title: "Pangkat Galatik Mangut Bonang",
      url: "https://www.youtube.com/embed/NYGB7aW3ACE?si=CUA1Z_RNYHs3MGju",
      thumbnail: pangkat,
    },
    {
      title: "Galatik Mangut Jenglong",
      url: "https://www.youtube.com/embed/yOp56Y1seDY?si=LPt713FgCVB8ysTq",
      thumbnail: jenglong,
    },
    {
      title: "Galatik Mangut Jenglong",
      url: "https://www.youtube.com/embed/COh1437Ppq0?si=f09qvZwIPUXSLgVg",
      thumbnail: lagu,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Tabuhan Lagu Ageung - Galatik Mangut</h2>
          </div>
        </div>
        
        {/* Row of videos arranged in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1: Video 1 on top of Video 3 */}
          <div className="flex flex-col gap-4">
            {/* Video 1 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
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
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
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

            {/* Video 5 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
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

          {/* Column 2: Video 2 on top of Video 4 */}
          <div className="flex flex-col gap-4">
            {/* Video 2 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
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
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
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

            {/* Video 6 */}
            <div
              className="bg-[#1a4d6b] hover:bg-blue-700 transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex items-center cursor-pointer"
              onClick={() => handleShow(videos[5].url, videos[5].title)}
            >
              <div className="relative">
                <img
                  src={videos[5].thumbnail}
                  alt={`Thumbnail ${videos[5].title}`}
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
                <h3 className="text-xl font-semibold">{videos[5].title}</h3>
              </div>
            </div>
          </div>
          {/* Close button placed in a new row after the last grid item */}
          <div className="col-span-2 flex justify-end p-4">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
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

export default LaguAgeung;
