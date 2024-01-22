"use client"

import Users from "../components/Users"


export default function HomePage(){
  return(
  <section>
    <div>Estoy en la pagina principal</div>
  <button onClick={()=>{alert('hola!')}}>Boton</button>

  <Users />

  </section>
  )
   
}