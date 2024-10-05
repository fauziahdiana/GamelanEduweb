import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Tutorial() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Table bordered className="tutorial-table mt-5" responsive>
          <tbody>
            {/* Baris Pertama dengan Judul "Tutorial" */}
            <tr>
              <td colSpan="2" className="text-center p-4 bg-light">
                <h3>Tutorial</h3>
              </td>
            </tr>
            {/* Baris Kedua dengan 2 Video Tutorial */}
            <tr>
              <td className="p-4">
                <div className="video-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Tutorial 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">
                    Tutorial 1: Memainkan Gamelan Saron
                  </p>
                </div>
              </td>
              <td className="p-4">
                <div className="video-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Tutorial 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">
                    Tutorial 2: Teknik Memukul Gamelan
                  </p>
                </div>
              </td>
            </tr>
            {/* Baris Ketiga dengan 2 Video Tutorial */}
            <tr>
              <td className="p-4">
                <div className="video-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Tutorial 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">
                    Tutorial 3: Mengenal Gamelan Degung
                  </p>
                </div>
              </td>
              <td className="p-4">
                <div className="video-box">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Tutorial 4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">
                    Tutorial 4: Cara Merawat Alat Gamelan
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default Tutorial;
