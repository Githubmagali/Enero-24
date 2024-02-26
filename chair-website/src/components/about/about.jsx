import React from "react";
import './about.css';
import {SiAdguard} from "react-icons/Si";
import {AiFillStar} from "react-icons/Ai";
import {BsCheckLg} from "react-icons/Bs";
import {IoIosPeople} from "react-icons/Io";


const About = ()=>{

    return(
        <div>
            <section className="about container" id="about">
            <div className="about-img">
                <img src="./about.png" alt="" />
            </div>

            <div className="about-data">
                <h2 className="heading">
                    Why <span className="gradient-text">Choose</span>Us?
                </h2>
                <p>Our products are of best quality</p>
                <div className="about-box-data">
                    <div className="about-box">
                        <span className="about-icon">
                            <SiAdguard />
                            <h3 className="box-title">Longevity</h3>
                            <p>When you problems</p>
                        </span>
                    </div>
                    <div className="about-box">
                        <span className="about-icon">
                            <AiFillStar />
                            <h3 className="box-title">Heritage</h3>
                            <p>When you problems</p>
                        </span>
                    </div>
                    <div className="about-box">
                        <span className="about-icon">
                            <BsCheckLg />
                            <h3 className="box-title">Quality</h3>
                            <p>When you problems</p>
                        </span>
                    </div>
                    <div className="about-box">
                        <span className="about-icon">
                            <IoIosPeople />
                            <h3 className="box-title">Community</h3>
                            <p>We always pay attention</p>
                        </span>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default About;