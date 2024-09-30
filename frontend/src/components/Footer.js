import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Col>
        <Row>
          {/* Kolom 1: Kontak dan Media Sosial */}
          <Col md="6">
            {/* Baris untuk Kontak */}
            <Row>
              <Col md="12" className="footer-copywright" style={{ paddingTop: "10px", paddingLeft: "30px" }}>
                <h3 style={{ fontSize: "35px", color: "white" }}>Kontak</h3>
              </Col>
            </Row>

            {/* Baris untuk No.Telepon, Facebook, Instagram */}
            <Row>
              <Col md="4" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "10px", paddingTop: "20px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "25px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaPhone style={{ marginRight: "10px", color: "white" }} /> No.Telepon
                </h3>
              </Col>
              <Col md="4" className="footer-copywright" style={{ paddingBottom: "10px", paddingTop: "20px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "25px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaFacebook style={{ marginRight: "10px", color: "white" }} /> Facebook
                </h3>
              </Col>
              <Col md="4" className="footer-copywright" style={{ paddingBottom: "10px", paddingTop: "20px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "25px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaInstagram style={{ marginRight: "10px", color: "white" }} /> Instagram
                </h3>
              </Col>
            </Row>

            {/* Baris untuk Email dan Twitter */}
            <Row>
              <Col md="4" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "30px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "25px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaEnvelope style={{ marginRight: "10px", color: "white" }} /> Email
                </h3>
              </Col>
              <Col md="4" className="footer-copywright" style={{ paddingBottom: "30px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "25px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaTwitter style={{ marginRight: "10px", color: "white" }} /> Twitter
                </h3>
              </Col>
            </Row>
          </Col>
          {/* Kolom 2: Maps */}
          <Col md="6">
            <Row>
              <Col md="12" className="footer-map" style={{ paddingBottom: "10px", paddingTop: "30px", display: "flex", justifyContent: "center" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1921251576852!2d106.82718341588782!3d-6.175392995525344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e17859ab07%3A0x3a10508c86f543d1!2sMonas!5e0!3m2!1sen!2sid!4v1601234567890!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.95180583671!2d106.93000840670774!3d-6.924872399123975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68483288b9fd1f%3A0xc7425b69d2b22634!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1693896300134!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.95180583671!2d106.93000840670774!3d-6.924872399123975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68483288b9fd1f%3A0xc7425b69d2b22634!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1693896926543!5m2!1sen!2sid"
                  width="80%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0">
                </iframe>
              </Col>
            </Row>
            <Row>
              <Col md="12" style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "25px", color: "white", marginTop: "5px" }}>Maps</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Footer;
