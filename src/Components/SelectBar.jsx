import React from "react";
import "./SelectBar.css";
import { IoCalendar } from "react-icons/io5";
import BoxSelect from "./BoxSelect";

const SelectBar = () => {
  //! Add Data
  const data = [{ name: "Calendar", icon: <IoCalendar /> }];

  return (
    <div className="SeBar-Container">
      {data.map((item, index) => (
        <BoxSelect key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default SelectBar;
