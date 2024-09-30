import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextHome from "./NextHome";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: "80px", color: "#F6B51B", fontFamily: "Poppins, sans-serif", fontWeight: "bold" }} className="heading">
                GAMELAN EDUWEB{" "}
              </h1>
              <h1 className="heading-name">
                <strong className="main-name">Selamat Datang di Gamelan EduWeb</strong>
              </h1>
              <h2 style={{marginLeft: "10px", paddingTop: 15, color: "#164058", fontSize: "30px", }}>
                Website ini dirancang sebagai panduan untuk mempelajari gamelan degung, termasuk sejarah,
                teknik bermain, dan notasi lagu. Mari lestarikan dan sebarkan warisan musik Indonesia ini bersama kami!
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
      <NextHome />
    </section>
  );
}

export default Home;
