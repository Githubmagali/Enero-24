import React, { useState } from "react";
import './../alerta.css';

const FormularioContacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlertaError, setMostrarAlertaError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
      
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            setMostrarAlertaError(true)
            return;
        }

        
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('correo', correo);
        localStorage.setItem('mensaje', mensaje);
        setNombre('');
        setCorreo('');
        setMensaje('');
        setMostrarAlerta(true);

       
    }

    return (
        <section className="contacto-form" id="contacto-form">
            <div className="contenedor-contacto">
                <h3>Envíanos un mensaje</h3>
                {mostrarAlertaError && (
                    <div className="mensaje-alerta-error">Datos incompletos</div>
                )}
                {mostrarAlerta && (
                    <div className="mensaje-alerta">Datos enviados con exito</div>
                )}
                <form action="" className="formulario-contacto" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="10" className="textarea-contacto" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                    <button type="submit" className="btn-contacto">Enviar</button>
                </form>
            </div>
        </section>

    )
}

export default FormularioContacto;