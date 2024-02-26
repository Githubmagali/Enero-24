import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import './hero.css';


const Hero = () => {

    return (
        <div>
            <section className="hero" id="hero">
                <div className="hero-container container">
                    <div className="hero-data">
                        <h1>The most <br />
                            <span className="gradient-text"> comfortable</span>
                            <br />
                            chair for you
                        </h1>
                        <p>Find  the most comfortable</p>
                        <div className="hero-btns">
                            <a href="#" className="btn shop-now">Shop now</a>
                            <a href="#" className="learn-more gradient-text">
                                <span>Learn more</span>
                                <IoChevronForwardSharp />
                            </a>
                        </div>
                        <div className="hero-numbers">
                            <div className="n-box">
                                <h2>12K <span>+</span>
                                </h2>
                                <p>Happy<br />customer</p>
                            </div>
                            <div className="n-box">
                                <h2>12K <span>+</span>
                                </h2>
                                <p>Award <br />Winning</p>
                            </div>
                            <div className="n-box">
                                <h2>28K <span>+</span>
                                </h2>
                                <p>Award <br />Winning</p>
                            </div>
                        </div>
                    </div>
                    {/*Hero images*/}
                    <div className="hero-images">
                        <img src="./Home.png" className="main-img" alt="" />
                        <img src="./background.png" alt="" className="hero-bg-img" />
                        <img src="./Tag.png" alt="" className="tag-img" />
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Hero;