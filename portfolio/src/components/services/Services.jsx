import React from "react";
import "./services.css";

const Services = () => {

    return (<>

        <section className="services" id="services">
            <div className="heading">
                <h1>Algunos de mis<span> conocimientos y servicios</span></h1>
            </div>
            <div className="services-container">

            <div className="box">
                    <p><i class='bx bxl-nodejs'></i></p>
                    <h1>Node js</h1>
                </div>

                <div className="box">
                    <p><i class='bx bxl-tailwind-css'></i></p>
                    <h1>Tailwind-css</h1>
                </div>

                

                <div className="box">
                    <p><i class='bx bxl-mongodb'></i></p>
                    <h1>Mongobd</h1>
                </div>


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


               


               

            </div>
        </section>
    </>)
}

export default Services;
