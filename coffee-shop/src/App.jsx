import React, { useState, useEffect } from "react";
import "./header.css";
import StoreCoffee from "./componentes/storeCoffee/storeCoffee";
import "boxicons/css/boxicons.min.css";
import Coffee from "./componentes/coffee/Coffee";
import DemoCarousel from "./componentes/carousel/carousel";
import { CartProvider } from "./CartContext";
import CartDisplay from "./componentes/storeCoffee/cartDisplay";
import Menu from "./componentes/menu/menu";


const Card = ({ toggleCard }) => (
  <div className="card">
    <button onClick={toggleCard}>X</button>
    <h2>Our location</h2>
    <p>Honduras 3754, C1180ACB CABA</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1372370683007!2d-58.38622642532899!3d-34.676485661342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb8228f238d%3A0x4e7d2cae69803158!2sAv.%20Galicia%20100%2C%20B1868BGA%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1705963186092!5m2!1ses-419!2sar" 
     width="100%"
     height="300"
    style={{ border: 0 }} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
   
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
            <a href="#menu">Menu</a>
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
          <div className="span">Welcome</div>
          <h1>Coffee shop</h1>
          <h2>Take away</h2>
          <button onClick={toggleCard} className="btn">Our location</button>
        </div>
        <div className="home-img">
          <div className="swp-img">
            <DemoCarousel />
          </div>
        </div>
      </section>

   <CartProvider>
     <StoreCoffee />
     <CartDisplay />
     </CartProvider>
      <Coffee />
      <Menu />

      <section className="app" id="app">
        <div className="heading">
          <div className="span">Our app</div>
          <h1>Download app</h1>
          <div className="container-app">
            <div className="app-text">
              <a href="" className="btn">
                Download app
              </a>
            </div>
            <div className="app-img">
              <img src="img/app.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="delivery" id="delivery">
        <div className="heading">
          <div className="span">Us</div>
          <h1>About us</h1>
        </div>
        <div className="container-delivery">
          <div className="delivery-img">
            <img src="img/about.png" alt="" />
          </div>
          <div className="delivery-text">
            <a href="" >
              our history
            </a>
          </div>
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
        <p>&#169; Magali Victoria Fernandez</p>
      </section>
    </div>
  );
}

export default App;
