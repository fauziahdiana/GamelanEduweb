import React from "react";


import { Container, Row, Col } from "react-bootstrap";

function JenisGamelan() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Jenis Gamelan <strong className="purple">I'M</strong>
            </h1>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row> */}
 
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-1 mb-8">
        <div className="p-2">
          <h2 className="project-heading mb-2 text-black">
            Jenis-Jenis <strong className="purple">Gamelan</strong>
          </h2>
        </div>
      </div>
{/* 
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
    <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl">
      <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="" />
      <div className="flex flex-col justify-start p-6 text-black">
          <h5
             className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  Last updated 3 mins ago
              </p>
        </div>
    </div>

      </Container>


    </Container>
    
  );
}

export default JenisGamelan;
