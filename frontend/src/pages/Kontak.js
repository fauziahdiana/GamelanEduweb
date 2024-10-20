import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapPin, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

function Kontak() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Kontak</h2>
          </div>
        </div>

        {/* Menambahkan align-items: stretch untuk memastikan ketinggian sejajar */}
        <Row className="rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2 mx-2" style={{ alignItems: 'stretch' }}>
          {/* Kolom Kiri - Informasi Kontak */}
          <Col md={6} className="p-6 d-flex flex-column justify-content-between">
            <div className="flex flex-col text-left text-white">
              <p className="mt-4 mb-3 text-base text-lg flex items-center">
                <FaMapPin style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Alamat:</span>
                <span className="ms-2">Jl. R.Syamsudin,S.H. No. 50, Cikole, Kec.Cikole, Kota Sukabumi, Jawa Barat 43113</span>
              </p>
              <p className="mb-3 text-base text-lg flex items-center">
                <FaPhone style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Nomor Telepon:</span>
                <span className="ms-2">+62 882-1827-1850</span>
              </p>
              <p className="mb-3 text-base text-lg flex items-center">
                <FaEnvelope style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Email:</span>
                <span className="ms-2">gamelanEduWeb@gmail.com</span>
              </p>
              <p className="mb-3 text-base text-lg flex items-center">
                <FaInstagram style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Instagram:</span>
                <span className="ms-2">@tride_edu</span>
              </p>
              <p className="mb-3 text-base text-lg flex items-center">
                <FaFacebook style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Facebook:</span>
                <span className="ms-2">gamelanEduWeb.com/</span>
              </p>
              <p className="mb-3 text-base text-lg flex items-center">
                <FaTwitter style={{ marginRight: "20px", marginLeft: "15px", color: "white" }} />
                <span className="fs-5" style={{ color: "#F6B51B" }}>Twitter:</span>
                <span className="ms-2">@gamelanEduWeb</span>
              </p>
            </div>
          </Col>

          {/* Kolom Kanan - Gambar Peta */}
          <Col md={6} className="p-6 d-flex justify-content-center align-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.95180583671!2d106.93000840670774!3d-6.924872399123975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68483288b9fd1f%3A0xc7425b69d2b22634!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1693896300134!5m2!1sen!2sid"
              width="80%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Kontak;
