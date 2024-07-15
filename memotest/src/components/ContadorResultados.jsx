import React from "react";

const ContadorResultados = ({ puntoJugador1, puntoJugador2 }) => {
  const contadorStyle = {
    display: "flex",

    justifyContent: "spaceEvenly",
    fontSize: "30px",
  filter: "sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg)"

  };
  return (
    <div style={contadorStyle}>
      <div>Jugador Azul: {puntoJugador1} </div>
      <div>Jugador Rojo: {puntoJugador2}</div>
    </div>
  );
};

export default ContadorResultados;
