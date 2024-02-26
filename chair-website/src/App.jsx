import React from "react";
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Companies from "./components/companies/companies";
import Chair from "./components/chair/chair";
import About from './components/about/about';
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div>
    <Header />
    <Hero />
    <Companies />
    <Chair />
    <About />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
