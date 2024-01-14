import React from "react";
import "./about.css";
import Mail from "./Mail";

const About = () => {
  return (
    <>
      {/*Home*/}
      <section className="home" id="home">
        <div className="home-text">
          <span>Hola!</span>
          <h2>Programadora de desarrollo web front end</h2>
          <button to="" className="btn">CONTACTA ME</button>
        
        </div>
        <div className="home-img">
          <img src="img-.png" alt="" />
        </div>
      </section>

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
