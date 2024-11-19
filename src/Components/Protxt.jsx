import React from "react";
import "./Protxt.css";

const Protxt = ({ name, data }) => {
  return (
    <div className="Protxt-Container">
      <div className="Protxt-Head">{name}</div>
      <div className="Protxt content">{data}</div>
    </div>
  );
};

export default Protxt;
