import React, {useState} from 'react';
import './App.css';
import Shop from './componentes/Shop';
import 'boxicons/css/boxicons.min.css';


function App() {


  return (
    <div>
      <header>
        <div className='bx bx-menu' id='menu-icon' ></div>
        <ul className='navbar'>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#delivery">Delivery</a></li>
          <li><a href="#app">App</a></li>
          <li><a href="#us">Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <section className='home' id="home">
        <div className='home-text'>
          <span>Welcome</span>
          <h1>Coffee shop</h1>
          <h2>Take away</h2>
          <a href="#" >Unirse</a>
        </div>
        <div className='home-img'>
          <img src="img/home.png" />
        </div>
      </section>

      <Shop />


      <section className='delivery' id="delivery">
        <div className='heading'>
          <span>Get now</span>
          <h1>Delivery</h1>
        </div>
        <div className='container-delivery'>
          <div className='delivery-img'>
            <img src="img/delivery.png" alt='' />
          </div>
          <div className='delivery-text'>
            <a href='' className='btn'>Order now</a>
          </div>
        </div>
      </section>


      <section className='app' id='app'>
        <div className='heading'>
          <span>Our app</span>
          <h1>Download app</h1>
          <div className='container-app'>
            <div className='app-text'>
              <a href="" className="btn">Descargar app</a>
            </div>
            <div className="app-img">
              <img src="img/app.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='about-img'>
          <img src="img/about.png" alt="" />
        </div>
        <div className="about-text">
          <h2>About us</h2>
          <a href="" className="btn">Learn more</a>
        </div>
      </section>

      <section className='contact' id="contact">
        <div className='social'>
          <a href=""><i className='bx bxl-instagram'></i></a>
          <a href=""><i className='bx bxl-twitter'></i></a>
          <a href=""><i className='bx bxl-facebook'></i></a>
          <a href=""><i className='bx bxl-youtube'></i></a>
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
