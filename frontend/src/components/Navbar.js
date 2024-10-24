import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={"navbar navbar-custom"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ marginBottom: "5px", marginRight: "30px", fontSize: "20px" }}>
                Beranda
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <NavDropdown 
                style={{ color: "#E8AD21", marginBottom: "2px", marginRight: "50px", fontSize: "20px" }} 
                title="Tentang" 
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item 
                  as={Link} 
                  to="/sejarah" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Sejarah
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  as={Link} 
                  to="/jenis" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Jenis Gamelan
                </NavDropdown.Item>
                
                <NavDropdown.Item 
                  as={Link} 
                  to="/waditra" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Waditra
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/notasi"
                onClick={() => updateExpanded(false)}
                style={{ marginBottom: "2px", marginRight: "30px", fontSize: "20px" }}
              >
                Notasi
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <NavDropdown 
                style={{ marginBottom: "2px", marginRight: "50px", fontSize: "20px" }} 
                title="Tutorial" 
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item 
                  as={Link} 
                  to="/tutorial" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Teknik Tabuhan Dasar
                </NavDropdown.Item>

                <NavDropdown.Item 
                  as={Link} 
                  to="/tutorial-lagu" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Teknik Tabuhan Lagu Salancaran
                </NavDropdown.Item>

                <NavDropdown.Item 
                  as={Link} 
                  to="/tutorial-ageung" 
                  onClick={() => updateExpanded(false)} 
                  style={{ color: "#000", padding: "10px 20px" }} 
                  onMouseEnter={(e) => e.target.style.color = "#E8AD21"} 
                  onMouseLeave={(e) => e.target.style.color = "#000"}
                >
                  Teknik Tabuhan Lagu Ageung
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/kontak"
                onClick={() => updateExpanded(false)}
                style={{ marginBottom: "2px", marginRight: "30px", fontSize: "20px" }}
              >
                Kontak
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
