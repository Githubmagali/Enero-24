import React, { useState, useEffect } from "react";
import './App.css';
import Contact from "./components/contact/Contact";





function App() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [hasScrolled, setHasScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll)
  };
}, []);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};



  return (
    <div>
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <div className="nav container">
          <a href="#" className='logo'>Magali</a>

          <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about"className="nav-link">Sobre mi</a></li>
            <li><a href="#services"className="nav-link">Sevicios</a></li>
            <li><a href="#portfolio"className="nav-link">Portfolio</a></li>
            <li><a href="#contact"className="nav-link">Contacto</a></li>
          </div>
          {/*Menu icon */}
          <div className={`menu-icon ${isMenuOpen ? "move" : ""}`}
            onClick={toggleMenu}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>

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
      {/*Services*/}
      <section className="services" id="services">
        <div className="heading">
          <h1>Mis<span> conocimientos y servicios</span></h1>
        </div>
        <div className="services-container">


          <div className="box">
            <p> <i class='bx bxl-react' ></i></p>
             <h1>React</h1>
          </div>


          <div className="box">
           <p><i class='bx bxl-javascript' ></i></p>
            <h1>Javascript</h1>
          </div>


          <div className="box">
            <p><i class='bx bxl-firebase' ></i></p>
            <h1>Firebase</h1>
          </div>


          <div className="box">
            <p><i class='bx bxl-redux'></i></p>
            <h1>Redux</h1>
          </div>
          

          <div className="box">
            <p><i class='bx bxl-nodejs'></i></p>
            <h1>Node js</h1>
          </div>

        </div>
      </section>
      {/*Portfolio*/}
      <section className="portfolio" id="portfolio">
        <div className="heading">
        <h1>Mi <span>portafolio</span></h1>
        </div>
        <div className="portfolio-container">

          <div className="box">
            <div className="box-img">
              <img src="trabajo-1.png" alt="" />
            </div>
            <div className="content">
              <a href=""><i class="bx bx-link"></i></a>
              <h3>Trabajo 1#</h3>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="trabajo-2.png" alt="" />
            </div>
            <div className="content">
              <a href=""><i class="bx bx-link"></i></a>
              <h3>Trabajo 2#</h3>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img src="trabajo-3.png" alt="" />
            </div>
            <div className="content">
              <a href=""><i class="bx bx-link"></i></a>
              <h3>Trabajo 3#</h3>
            </div>
            
          </div>
        </div>
        
      </section>
      <Contact />

    </div>



  );
}

export default App;
