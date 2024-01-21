import React from "react";
import "./App.css";

const sections = [
  {
    id: 1,
    title: "Empleador",
    items: ["Nombre y apellido:", "CUIL:", "Fecha de ingreso:"],
  },
  {
    id: 2,
    title: "Trabajador",
    items: ["Nombre y apellido:", "CUIL:", "Fecha de ingreso:"],
  },
];

function App() {
  return (
    <div className="container">
      <div class="header">
        <div class="titulo">Recibo de sueldo</div>
        <div class="subtitulo">Original</div>
      </div>
      {sections.map((section) => (
        <div key={section.id} className="section">
          <div className="title">{section.title}</div>
          {section.items.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      ))}
      <div class="section">
        <div class="title">Detalle del periodo</div>
        <div class="container-item">
          <div class="item">Desde:</div>
          <div class="item-2">Hasta:</div>
          <div class="item-3">Puesto desempeñado:</div>
        </div>

        <div class="container-item">
          <div class="item">Modalidad de liquidacion:</div>
          <div class="item-4">Cantidad de horas:</div>
        </div>
        <div class="container-renumeracion">
          <div class="renumeracion-display">
            <div class="title-renumeracion">Renumeracion</div>
            <div class="item-r">Basico:</div>
            <div class="item-r">SAC:</div>
            <div class="item-r">Valoraciones:</div>
            <div className="item-r" style={{ color: "aliceblue" }}>
              --
            </div>
            <div className="item-r" style={{ color: "aliceblue" }}>
              --
            </div>

            <div class="item-r">Suma total:</div>
          </div>
          <div class="renumeracion-grid">
            <div class="item-g">Son</div>
            <div class="item-g">Lugar y fecha</div>
            <div class="item-g">
              Nro de comprobante de pago de aportes y contribuciones
            </div>
          </div>
        </div>
        <div class="container-firma">
          <div class="item-firma-1">Firma del empleador:</div>
          <div class="item-firma-1">Firma del trabajador:</div>
        </div>
      </div>
    </div>
  );
}

export default App;
