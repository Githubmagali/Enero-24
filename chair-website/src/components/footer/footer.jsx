import React from "react";
import "./footer.css";


const Footer = ()=>{
    return(
        <div>
            <div className="footer container">
                <div className="footer-box">
                    <a href="#" className="logo">Le chair</a>
                <p>Our vision is to help  you make</p>
                </div>
                <div className="footer-box">
                    <h3>About</h3>
                    <a href="#">About us</a>
                    <a href="#">Features</a>
                    <a href="#">News and blogs</a>
                </div>
                <div className="footer-box">
                    <h3>Company</h3>
                    <a href="#">How we work?</a>
                    <a href="#">Capital</a>
                    <a href="#">Security</a>
                    
                </div>
                <div className="footer-box">
                    <h3>Support</h3>
                    <a href="#">FaQs</a>
                    <a href="#">Suport center</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
            <p className="copyright"> &#169; Copyright</p>
        </div>
    )
}

export default Footer;