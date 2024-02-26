import React from "react";
import './contact.css';



const Contact =()=>{
    return(<>
    <section className="contact" id="contact">
        <div className="heading">
            <h1>Contactame</h1>
        </div>
        <div className="contact-form">
        <form action="">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Escribi tu texto" required></textarea>
            <button type="submit" className="btn-form">Enviar</button>
        </form>
        </div>
    </section>
    </>
    );
}

export default Contact;