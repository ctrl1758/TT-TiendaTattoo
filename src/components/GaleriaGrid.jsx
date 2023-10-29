import React from "react";
import "./GridComponent.css"; // Asegúrate de tener un archivo CSS para estilizar la cuadrícula

const GridComponent = () => {
  return (
    <div className="grid-container">
      {/* Cada elemento de la cuadrícula */}
      <div className="grid-item">
        <img src="imagen1.jpg" alt="Imagen 1" />
        <h3>Título 1</h3>
      </div>

      <div className="grid-item">
        <img src="imagen2.jpg" alt="Imagen 2" />
        <h3>Título 2</h3>
      </div>

      {/* Agrega más elementos de la cuadrícula aquí */}
    </div>
  );
};

export default GridComponent;
