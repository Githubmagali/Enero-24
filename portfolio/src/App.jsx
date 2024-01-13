import React from "react";
import './App.css';
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Header from "./components/header/Header";
import About from "./components/about/About";


function App() {

  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      {/*Copyright */}
      <div className="copyright">
        <p>&#169; All right Reserved.</p>
        <p style={{ padding: "20px" }}>magalivictoria000@gmail.com</p>
      </div>


    </div>



  );
}

export default App;
