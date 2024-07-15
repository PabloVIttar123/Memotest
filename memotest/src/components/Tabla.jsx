import React, { useState } from "react";
import Card from "./Card";
import ContadorResultados from "./ContadorResultados";

import DATA2 from "../data/DATA2.json";

const Tabla = () => {
  const tablaStyle = {
    width: "1000px",
    border: "1px solid white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "spaceBetween",
  };

  const IMAGEN_ADVINAR =
    "data:image/png;base64,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";
  const [idState, setIdState] = useState(0);
  const [idAdivinados, setidAdivinados] = useState([]);
  const [disableUnClick, setdisableUnClick] = useState(0);

  // const [turnoJugador, setturnoJugador] = useState("Jugador Azul")
  const [turnoJugador, setturnoJugador] = useState(true);
  const [dobleClick, setdobleClick] = useState(1);

  const filterBlue = {
    filter: "sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg)",
  };
  const filterRed = {
    filter: "sepia(100%) saturate(300%) brightness(70%) hue-rotate(310deg)",
  };

  const [countJugadorAzul, setcountJugadorAzul] = useState(0);
  const [countJugadorRojo, setcountJugadorRojo] = useState(0);

  const handleChange = ({ coincidencia, id }) => {
    setIdState(coincidencia);
    setdisableUnClick(id);
    console.log(idState);
    setdobleClick(dobleClick + 1);


    if (dobleClick === 2) {
      setdobleClick(1);
      setturnoJugador(!turnoJugador);
    }

    if (idState == coincidencia) {
        console.log("acierto");
        setidAdivinados((prevStateArray) => [...prevStateArray, coincidencia]);
        if (turnoJugador) {
          setcountJugadorAzul(countJugadorAzul + 1);
        } else {
          setcountJugadorRojo(countJugadorRojo + 1);
        }
      }
    if (idAdivinados.length == 5) {
        console.log("fin de juego");
        if(countJugadorRojo > countJugadorAzul){
            console.log("ganador jugador rojo")
        }
        else if(countJugadorAzul > countJugadorRojo){
            console.log("ganador jugador azul")
        }
        else {
            console.log("Empate!");
        }
    }


  };

  return (
    <div>
      <div style={turnoJugador ? filterBlue : filterRed}>
        {" "}
        <h1>Turno de: {turnoJugador ? "Jugador azul" : "Jugador Rojo"}</h1>
      </div>
      <div>
        <ContadorResultados
          puntoJugador1={countJugadorAzul}
          puntoJugador2={countJugadorRojo}
        ></ContadorResultados>
      </div>

      <div style={tablaStyle}>
        {console.log(idAdivinados)}
        {DATA2.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            coincidencia={item.coincidencia}
            image={
              idAdivinados.includes(item.coincidencia) ||
              disableUnClick == item.id
                ? item.image
                : IMAGEN_ADVINAR
            }
            handleChange={handleChange}
            setearDisabled={
              idAdivinados.includes(item.coincidencia) ||
              disableUnClick == item.id
                ? true
                : false
            }

            filter={turnoJugador ? filterBlue : filterRed}
          >
            {" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tabla;
