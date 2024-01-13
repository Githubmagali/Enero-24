import React from "react";
import "./portfolio.css";


const Portfolio = ()=>{
    return(
        <>
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
        </>
    )
}

export default Portfolio;