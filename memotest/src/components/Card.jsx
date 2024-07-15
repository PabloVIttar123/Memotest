import React from "react";

const Card = ({ id, image, handleChange, setearDisabled, coincidencia, filter }) => {
  const cardStyle = {
    border: "1px solid white",
    flex: "0 1 24%",

  };




  return (
    <button
      style={cardStyle}
      disabled={setearDisabled}
      onClick={(e) => {
        e.preventDefault();
        handleChange({ coincidencia, id });
      }}
    >
      <img
        style={filter}
        src={image}
        alt={id}
      />
    </button>
  );
};

export default Card;
