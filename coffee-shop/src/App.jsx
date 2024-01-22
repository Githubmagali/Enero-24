import React, { useState, useEffect } from "react";
import "./header.css";
import Shop from "./componentes/Shop";
import "boxicons/css/boxicons.min.css";
import Coffee from "./componentes/coffee/Coffee";

const Card = ({ toggleCard }) => (
  <div className="card">
    <button onClick={toggleCard}>X</button>
    <h2>Our location</h2>
    <p>Honduras 3754, C1180ACB CABA</p>
    <p>Moreno 502, C1091AAL CABA</p>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => setShowCard(!showCard);

  return (
    <div>
      {showCard && <div className="overlay" onClick={toggleCard}></div>}
      {showCard && <Card toggleCard={toggleCard} />}
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <ul className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#delivery">Delivery</a>
          </li>
          <li>
            <a href="#app">App</a>
          </li>
          <li>
            <a href="#us">Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/*Menu icon */}
        <div
          className={`menu-icon ${isMenuOpen ? "move" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>

      <section className="home" id="home">
        <div className="home-text">
          <span>Welcome</span>
          <h1>Coffee shop</h1>
          <h2>Take away</h2>
          <button onClick={toggleCard}>Our location</button>
        </div>
        <div className="home-img">
          <img src="img/home.png" />
        </div>
      </section>

      <Shop />
      <Coffee />

      <section className="delivery" id="delivery">
        <div className="heading">
          <span>Get now</span>
          <h1>Delivery</h1>
        </div>
        <div className="container-delivery">
          <div className="delivery-img">
            <img src="img/delivery.png" alt="" />
          </div>
          <div className="delivery-text">
            <a href="" className="btn">
              Order now
            </a>
          </div>
        </div>
      </section>

      <section className="app" id="app">
        <div className="heading">
          <span>Our app</span>
          <h1>Download app</h1>
          <div className="container-app">
            <div className="app-text">
              <a href="" className="btn">
                Descargar app
              </a>
            </div>
            <div className="app-img">
              <img src="img/app.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="img/about.png" alt="" />
        </div>
        <div className="about-text">
          <h2>About us</h2>
          <a href="" className="btn">
            Learn more
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="social">
          <a href="">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Our Company</a>
        </div>
        <p>&#169; All Right Reserved.</p>
      </section>
    </div>
  );
}

export default App;
