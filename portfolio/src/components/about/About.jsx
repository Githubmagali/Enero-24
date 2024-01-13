import React from "react";
import "./about.css";


const About = ()=>{

    return(
        <>
        
      {/*Home*/}
      <section className="home" id="home">
        <div className="home-text">
          <span>Hola!</span>
          <div>Soy Magali</div>
          <h2>Programadora de desarrollo web front end</h2>
          <a  className="btn" href="#">Contactame</a>
        </div>
        <div className="home-img">
          <img src="img-.png" alt="" />
        </div>
      </section>

      {/*About*/}
      <section className="about" id="about">
        <div className="about-title">
               <h1>Sobre <span>mi</span></h1>
              
        </div>
        <div className="about-text">
        <div className="about-img">
                <img src="about.png" alt="" />
               </div>
        </div>
      </section>
      <div className="social">
            <a href=""><i class='bx bxl-github'></i></a>
            <a href=""><i class='bx bxl-gmail'></i></a>
            <a href=""><i class='bx bxl-linkedin' ></i></a>
          </div>
        </>
    )
}

export default About;