import React from "react";
import "./Table.css";
import Protxt from "../Components/Protxt";
import Tableimg from "../assets/Table.png";

const Table = () => {
  const data = [
    { name: "ชื่อ", data: "นาย หอการค้า รักมอ" },
    { name: "สถานภาพ", data: "กำลังศึกษา" },
    { name: "คณะ", data: "คณะวิศวกรรมศาสตร์" },
    { name: "หลักสูตร", data: "วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์" },
    { name: "อ.ที่ปรึกษา", data: "อาจารย์ ดร.XXXX XXXXX" },
  ];
  return (
    <div className="Table-Container">
      <div className="Table-Border">
        <h1>ตารางเรียน / สอบของรายวิชาที่ลงทะเบียนไว้แล้ว</h1>
        <div className="Table-Grid">
          {data.map((item) => {
            return <Protxt name={item.name} data={item.data} />;
          })}
        </div>
        <div className="Table-img">
          <img src={Tableimg} />
        </div>
      </div>
    </div>
  );
};

export default Table;
