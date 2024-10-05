import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import catrik from '../Assets/Projects/catrik1.png'

function Notasi() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Container fluid className="about-section">
      <Container>
      <div className="max-w-sm mx-auto bg-[#164058] shadow-lg rounded-2xl overflow-hidden mt-1 mb-8">
        <div className="p-2">
          <h2 className="project-heading mb-2 text-white">
            Notasi <strong className="purple">Lagu</strong>
          </h2>
        </div>
      </div>

        <>
        <button
        className="bg-[#164058] rounded-full text-white active:bg-[#164058] font-bold uppercase text-sm w-100 h-10 flex items-center justify-center shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
        >
         Notasi Lagu 1
        </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-screen">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-scroll max-h-[90vh]">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold text-black">Notasi Lagu</h3>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto overflow-y-scroll">
                <img
                  src={catrik} // Pastikan gambar lokal dipanggil dengan benar di React.
                  alt="Notasi Lagu"
                  className="h-auto w-full object-contain"
                />
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
      ) : null}
    </>

      </Container>
    </Container>
  );
}

export default Notasi;
