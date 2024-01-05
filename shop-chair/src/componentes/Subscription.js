import React, {useState} from "react";


const Subscription = ()=>{

    const [email, setEmail] = useState("");
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlertaError, setMostrarAlertaError] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            // Si el campo de correo electrónico está vacío, mostramos la alerta
            setMostrarAlertaError(true);
          } else {
            // Aquí puedes implementar la lógica para realizar alguna acción adicional
            // por ejemplo, enviar el formulario o mostrar un mensaje de éxito
            // y luego reiniciar los campos de email y ocultar la alerta
            setMostrarAlertaError(false);
            setEmail("");
            setMostrarAlerta(true);
          }
    }
   

    return(
        
        <section className="newsletter" id="contact">
        <h2>Sucribe to Newsletter</h2>
        {mostrarAlertaError &&  (
                    <div className="mensaje-alerta-error">Datos incompletos</div>
                )}
                {mostrarAlerta && (<div className="mensaje-alerta">Suscripcion exitosa!</div>)}
        <div className="news-box"> 
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <a href="" className="btn" onClick={handleClick}>Suscribete</a>
        </div>
      </section>
    )
}

export default Subscription;