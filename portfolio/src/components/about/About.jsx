import React, {useState} from "react";
import Mail from './mail/Mail'
import "./about.css";


const About = () => {

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    setOverlayVisible(false);

  };


  return (
    <>
      {/*Home*/}
      <section className="home" id="home">
        <div className="home-text">
          <span>Hola!</span>
          <h2>Programadora de desarrollo web full stack</h2>
          <button to="" className="btn" onClick={() => openOverlay()}>CONTACTAME</button>
        
        </div>
        <div className="home-img">
          <img src="img-.png" alt="" />
        </div>
      </section>
      {overlayVisible && (
          <Mail setOverlayVisible={setOverlayVisible} setSelectedImage={setSelectedImage}/>
      )}
      

      

      {/*About*/}
      <section className="about" id="about">
        <div className="about-title">
          <h1>
            Sobre <span>mi</span>
          </h1>
          <p style={{ lineHeight: "40px" }}>
           
          </p>
        </div>
        <div className="about-text">
          <div className="about-img">
            <img src="about.png" alt="" />
          </div>
        </div>
      </section>
      <div className="social">
        <a href="https://github.com/Githubmagali">
          <i className="bx bxl-github"></i>
        </a>
        <a href="mailto:magalivictoria000@gmail.com">
          <i className="bx bxl-gmail"></i>
        </a>
        <a href="https://www.linkedin.com/in/magali-fernandez-60a207210/">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default About;
