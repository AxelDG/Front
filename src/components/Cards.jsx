import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-1 lg:grid-cols-7">
      <Card
        title="Solicitar Turnos"
        description="Solicite su turno online de forma fácil y rápida."
        imageUrl="/images/calendar.png"
      />
      <Card
        title="Laboratorio"
        imageUrl="/images/laboratory.png"
      />
      <Card
        title="Diagnosico por imagenes"
        description="Posible vlog..."
        imageUrl="/images/rayos-x.png"
      />
      <Card
        title="Farmacias, Ópticas y Vacunatorio"
        description="Solicite sus resultados de forma online."
        imageUrl="/images/laboratory.png"
      />
    </div>
  );
}

export default Cards;