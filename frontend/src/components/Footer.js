import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaMapPin } from "react-icons/fa";

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

            {/* Baris untuk Telepon dan Facebook (sebelah kanan Telepon) */}
            <Row>
              <Col md="6" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "10px", paddingTop: "20px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaPhone style={{ marginRight: "10px", color: "white" }} /> 088218271850 (Irna Khaleda)
                </h3>
              </Col>
              <Col md="6" className="footer-copywright" style={{ paddingBottom: "10px", paddingTop: "20px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaInstagram style={{ marginRight: "10px", color: "white" }} /> @tride_edu
                </h3>
              </Col>
            </Row>

            {/* Baris untuk Email (di bawah Telepon) dan Instagram (di sebelah kanan Facebook) */}
            <Row>
              <Col md="6" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "10px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaPhone style={{ marginRight: "10px", color: "white" }} /> 085846560925 (Marwan)
                </h3>
              </Col>
              <Col md="6" className="footer-copywright" style={{ paddingBottom: "10px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
              <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaEnvelope style={{ marginRight: "10px", color: "white" }} /> tried.edu@gmail.com
                </h3>
              </Col>
            </Row>

            {/* Baris untuk Twitter (di bawah Facebook) */}
            {/* <Row>
              <Col md="6" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "10px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaTwitter style={{ marginRight: "10px", color: "white" }} /> @gamelanEduWeb
                </h3>
              </Col>
            </Row> */}

            {/* Baris untuk Alamat dengan seluruh lebar */}
            <Row>
              <Col md="12" className="footer-copywright" style={{ paddingLeft: "30px", paddingBottom: "10px", paddingTop: "5px", display: "flex", alignItems: "center" }}>
                <h3 style={{ color: "#F6B51B", fontSize: "18px", display: "flex", alignItems: "center", margin: 0 }}>
                  <FaMapPin style={{ marginRight: "10px", color: "white" }} /> Jl.Raya Rambay No.7 Rambay Kulon Rt 36 Rw.12 Desa Sukamantri Kec.Cisaat Kota Sukabumi, Jawa Barat 
                </h3>
              </Col>
            </Row>
          </Col>

          {/* Kolom 2: Maps */}
          <Col md="6">
            <Row>
              <Col md="12" className="footer-map" style={{ paddingBottom: "30px", paddingTop: "30px", display: "flex", justifyContent: "center" }}>
              <iframe class="gmap_iframe" height="120%" width="65%" frameborder="0" scrolling="no"  src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Jl. Raya Rambay No.7, Sukamanah, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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
