import React from "react";
import { Container } from "react-bootstrap";
import irna from "../Assets/Projects/members/tenaw.jpg";
import aiman from "../Assets/Projects/members/aiman.jpg";
import fathia from "../Assets/Projects/members/fathia.jpg";
import otas from "../Assets/Projects/members/otas.jpg";
import syeli from "../Assets/Projects/members/syeli.jpg";
import anisa from "../Assets/Projects/members/anisa.jpg";
import rizkia from "../Assets/Projects/members/rizkia.jpg";
import shakira from "../Assets/Projects/members/shakira.jpg";
import reiza from "../Assets/Projects/members/reiza.jpg";

function TeamBio() {
  const members = [
    {
      name: "Irna Khaleda Nurmeta, M.Pd",
      position: "Kreator",
      photo: irna,
    },
    {
      name: "Dr. Aiman Faiz, M.Pd",
      position: "Literatur Gamelan",
      photo: aiman,
    },
    {
      name: "Fathia Frazna Az-Zahra, S.ST., M.T",
      position: "Perancang Desain",
      photo: fathia,
    },
    {
      name: "Otas Agustina, S.Pd.Gr",
      position: "Perancang Tabuhan Gamelan",
      photo: otas,
    },
    {
      name: "Syeli Qadari Septiani, S.Pd",
      position: "Social Media",
      photo: syeli,
    },
    {
      name: "Siti Anisa Suganda Futri",
      position: "Dokumen Kontrol",
      photo: anisa,
    },
    {
      name: "Rizkia Wahyu Ananda",
      position: "Videographer & Editor Video",
      photo: rizkia,
    },
    {
      name: "Shakira Anadella",
      position: "UI/UX Designer",
      photo: shakira,
    },
    {
      name: "Reiza Maulidia Senjaya",
      position: "UI/UX Designer",
      photo: reiza,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Tim Pengembang Gamelan EduWeb</h2>
          </div>
        </div>

        {/* Grid of Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a4d6b] transition-colors duration-300 rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4"
            >
              <img
                src={member.photo}
                alt={`Photo of ${member.name}`}
                className="w-48 h-48 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-lg text-yellow-500">{member.position}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default TeamBio;
