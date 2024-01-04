import React, { useState } from "react";

const FormularioContacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
      
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            // Aquí puedes mostrar un mensaje de error o realizar alguna acción adicional si los campos están vacíos
            return;
        }

        
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('correo', correo);
        localStorage.setItem('mensaje', mensaje);
        setNombre('');
        setCorreo('');
        setMensaje('');
    }

    return (
        <section className="contacto-form" id="contacto-form">
            <div className="contenedor-contacto">
                <h3>Envíanos un mensaje</h3>
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