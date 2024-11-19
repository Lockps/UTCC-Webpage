import React from "react";
import "./BoxSelect.css";

const BoxSelect = ({ name, icon }) => {
  return (
    <div className="BoxSec-Container">
      <div className="BoxSec-Icon">{icon}</div>
      <div className="BoxSec-Name">{name}</div>
    </div>
  );
};

export default BoxSelect;
