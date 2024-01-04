import './App.css';
import React from 'react';
import ShopContainer from './componentes/ShopContainer';
import ShopNews from './componentes/ShopNews';
import FormularioContacto from './componentes/FormularioContacto';

function App() {

  const shopItems = [
    {
      imgSrc: 'img/p1.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$45'
    },
    {
      imgSrc: 'img/p2.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$66'
    },
    {
      imgSrc: 'img/p3.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$76'
    },
    {
      imgSrc: 'img/p4.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$46'
    },
    {
      imgSrc: 'img/p5.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$46'
    },
    {
      imgSrc: 'img/p6.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$46'
    }

  ];
  const newItems = [
    {
      imgSrc: 'img/new1.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$45'
    },
    {
      imgSrc: 'img/new2.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$45'
    },
    {
      imgSrc: 'img/new3.jpg',
      title: 'Gray chair',
      stars: 5,
      price: '$45'
    }

  ];
  return (
    <div className="App">
      <header>
        <a href="#" className='logo'>Brand <span>X</span></a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li> <a href="#home">Home</a></li>
          <li> <a href="#shop">Shop</a></li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#brands">Our partners</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </header>


      <section className='home' id="home">
        <div className='home-text'>
          <h1><span>Make</span>Your comfort  is our <span>happiness</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis magni omnis quod corporis eligendi a.
            Itaque quam voluptas molestias asperiores</p>
          <a href="shop" className='btn'>Shop now</a>
        </div>
      </section>
      <ShopContainer shopItems={shopItems} />
      <ShopNews newItems={newItems} />




      <section className="about" id="about">
        <div className="about-img">
          <img src="img/about.jpg" alt="" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>About<br />US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eveniet officiis nostrum perferendis nemo a</p>
          <a href="#shop" className="btn">Learn more</a>
        </div>
      </section>


      <section className="brands" id="brands">
        <div className="heading">
          <span>Brands</span>
          <h2>Our brands parners</h2>
        </div>
        <div className="brands-container">
          <img src="img/Google.png" alt="" />
          <img src="img/amazon.png" alt="" />
          <img src="img/tesla.png" alt="" />
          <img src="img/starbucks.png" alt="" />
          <img src="img/zoom.png" alt="" />
          <img src="img/netflix.png" alt="" />
        </div>
      </section>

      <section className="newsletter" id="contact">
        <h2>Sucribe to Newsletter</h2>
        <div className="news-box">
          <input type="text" placeholder="Enter your email" />
          <a href="" className="btn">Suscribete</a>
        </div>
      </section>

  

     <FormularioContacto />

      <section className="footer" id="footer">
        <div className="footer-box">
          <h2>Brands<span>X.</span></h2>
          <p>Marca nacida en Argentina, en el barrio de San Telmo</p>

        </div>
        <div className="footer-box">
          <h3>Servicios</h3>
          <li><a href="">Productos</a></li>
          <li><a href="">Ayuda</a></li>
          <li><a href="">Soporte</a></li>
        </div>
        <div className="footer-box">
          <h3>Productos</h3>
          <li><a href="">Sofa</a></li>
          <li><a href="">Mesas</a></li>
          <li><a href="">Camas</a></li>
          <li><a href="">Sillas</a></li>
        </div>
        <div className="footer-box contact-info">
          <h3>Contacto</h3>
          <span>CABA Argentina</span>
          <span>+54 9 345 345 332</span>
          <span>marcaArgentina@mail.com</span>
        </div>
      </section>

      <div className="copyright">
        <p>&#169; All Right Reserved.</p>
      </div>
      <div className="social">
        <a href=""><i className='bx bxl-instagram'></i></a>
        <a href=""><i className='bx bxl-facebook'></i></a>
        <a href=""><i className='bx bxl-twitter'></i></a>
      </div>

    </div>
  );
}

export default App;
