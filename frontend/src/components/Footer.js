import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="2" className="footer-copywright" style={{ paddingTop: "20px", paddingLeft: "10px" }}>
          <h3 style={{ fontSize: "35px" }}>Kontak</h3>
        </Col>
      </Row>
      <Row>
        <Col md="2" className="footer-copywright" style={{ paddingBottom: "30px", paddingTop: "20px", marginLeft: "30px" }}>
          <h3 style={{ fontSize: "20px"}}> <FaPhone/> Telepon </h3>
        </Col>
      </Row>
      <Row> 
        <Col md="10" className="footer-body" style={{ paddingBottom: "80px", paddingTop: "100px"}}>
          <ul className="footer-icons" style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "10px" }}>
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
