import React from "react";
import "./SelectBar.css";
import { IoCalendar } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { VscTable } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
import { LuScrollText } from "react-icons/lu";
import BoxSelect from "./BoxSelect";

const SelectBar = () => {
  //! Add Data
  const data = [
    { name: "ปฏิทินการศึกษา", icon: <IoCalendar /> },
    { name: "ปฏิทินการศึกษา", icon: <LuCalendarClock /> },
    { name: "ตารางเรียน/สอบ", icon: <VscTable /> },
    { name: "ผลการศึกษา", icon: <GoChecklist /> },
    { name: "ภาระค่าใช้จ่าย/ทุน", icon: <LuScrollText /> },
  ];

  return (
    <div className="SeBar-Container">
      {data.map((item, index) => (
        <BoxSelect key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default SelectBar;
