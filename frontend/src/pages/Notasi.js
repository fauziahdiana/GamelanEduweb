import React from "react";
import { Container } from "react-bootstrap";
import catrik from '../Assets/Projects/catrik1.png';

function Notasi() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Notasi</h2>
          </div>
        </div>

        {/* Button to open modal */}
        <button
          className="bg-[#164058] rounded-full text-white active:bg-[#164058] font-bold uppercase text-sm w-100 h-10 flex items-center justify-center shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Notasi Lagu 1
        </button>

        {showModal && (
          <>
            {/* Modal (mengikuti layout dari halaman Tutorial) */}
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
              <div className="relative w-auto mx-auto max-w-3xl">
                {/* Content of Modal */}
                <div className="bg-white border-0 rounded-lg shadow-lg flex flex-col w-full max-h-screen overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-black">Notasi Lagu</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* Body */}
                  <div className="relative p-6 flex-auto">
                    <img
                      src={catrik}
                      alt="Notasi Lagu"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay (darker background) */}
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Notasi;
