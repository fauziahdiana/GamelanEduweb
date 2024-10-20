import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Saron from "../Assets/Projects/Saron.JPG"
import Bonang from "../Assets/Projects/Bonang.JPG"
import Goong from "../Assets/Projects/Goong.JPG"
import Jengglong from "../Assets/Projects/Jengglong.JPG"
import penclon from "../Assets/Projects/penclon.jpg"

function Waditra() {
  return (
    <Container fluid className="about-section">
      <Container>
      <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-8">
          <div className="p-2 text-center">
            <h2 className="project-heading mb-2 text-white">Waditra Gamelan Degung</h2>
          </div>
      </div>
    
      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <img
            className="h-40 w-80 mt-2 mb-2 object-cover rounded-lg"
            src={Saron}
            alt="Saron"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
          <h5 className="mt-3 mb-3 mx-3 text-xl text-yellow-500" style={{fontSize: "30px"}}>
            Saron
          </h5>
          <p className="mb-4 mx-3 text-justify text-white dark:text-white" style={{fontSize: "20px"}}>
            Terdapat dua buah saron (panerus dan peking). Saron adalah waditra jenis alat pukul berbilah, 
            terbuat dari bahan logam perunggu yang dimainkan dengan cara dipukul, mempergunakan alat bantu pemukul. 
            Saron adalah jenis waditra yang bersuara nyaring/keras. Saron pada Degung berfungsi sebagai pembawa arkuh lagu, 
            ornamen dan akopayemen. Soepandi, A (1974) saron sebagai variasi dalam lagu.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <img
            className="h-40 w-80 mt-2 mb-2 object-cover rounded-lg"
            src={Bonang}
            alt="Bonang"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
        <h5 className="mt-3 mb-3 mx-3 text-xl text-yellow-500" style={{fontSize: "30px"}}>
            Bonang
        </h5>
        <p className="mb-4 mx-3 text-justify text-white dark:text-white" style={{fontSize: "20px"}}>
          Terdapat sebuah bonang dalam Degung. Bonang adalah waditra jenis alat pukul berpenclon, 
          terbuat dari bahan logam perunggu yang dimainkan dengan cara dipukul mempergunakan alat bantu pemukul. 
          Bentuk waditra bonang seperti bentuk goong, namun penclonnya berukuran lebih kecil. 
          Fungsi dari bonang yaitu sebagai pemangku lagu (melodi), piringan, pengatur tempo dalam memperlambat, 
          mempercepat, menurunkan, memberhentikan gending (Soepandi, 1974).
        </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <img
            className="h-40 w-80 mt-2 mb-2 object-cover rounded-lg"
            src={Jengglong}
            alt="Jengglong"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
          <h5 className="mt-3 mb-3 mx-3 text-xl text-yellow-500" style={{fontSize: "30px"}}>
            Jengglong
          </h5>
          <p className="mb-4 mx-3 text-justify text-white dark:text-white" style={{fontSize: "20px"}}>
          Jengglong adalah waditra berpenclon dibuat dari perunggu, kuningan atau besi yang berdiameter 
          antara tiga puluh sampai dengan empat puluh centimeter. Dalam suatu ancak atau kakanco terdiri atas enam buah kromong.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <img
            className="h-40 w-80 mt-2 mb-2 object-cover rounded-lg"
            src={penclon}
            alt="Penclon"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
          <h5 className="mt-3 mb-3 mx-3 text-xl text-yellow-500" style={{fontSize: "30px"}}>
            Penclon
          </h5>
          <p className="mb-4 mx-3 text-justify text-white dark:text-white" style={{fontSize: "20px"}}>
            Penclon pada alat musik jengglong berjumlah enam buah yang terdiri dari nada lima hingga lima 
            di bawahnya dengan wilayah nada yang lebih rendah dari bonang. Penclon-penclon ini digantung dengan 
            tali pada penyangga yangmberbentuk tiang gantungan. Soepandi, A (1974) jenglong berfungsi sebagai rangka gending.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row rounded-lg bg-[#164058] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full mb-2">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <img
            className="h-90 w-80 mt-2 mb-2 object-cover rounded-lg"
            src={Goong}
            alt="Goong"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-left text-black w-full md:w-2/3">
          <h5 className="mt-3 mb-3 mx-3 text-xl text-yellow-500" style={{fontSize: "30px"}}>
            Goong
          </h5>
          <p className="mb-4 mx-3 text-justify text-white dark:text-white" style={{fontSize: "20px"}}>
            Goong adalah waditra jenis alat pukul berpenclon, terbuat dari bahan logam perunggu. 
            Dibunyikan dengan cara dipukul oleh alat bantu pemukul dang menghasilkan suara yang paling besar. 
            Soepandi (1974) fungsi goong dalam Degung yaitu sebagai barometer lagu. Bertugas sebagai pengatur wiletan 
            (birama) atau sebagai tanda akhir periode melodi dan penutup kalimat lagu.
          </p>
        </div>
      </div>
      </Container>
    </Container>
  );
}

export default Waditra;
