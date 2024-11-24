import React from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import Protxt from "../Components/Protxt";

const Profile = () => {
  const data = [
    { name: "เปลี่ยนรูปโปรไฟล์" },
    { name: "แก้ไขข้อมูล" },
    { name: "เปลี่ยนรหัสผ่าน" },
    { name: "ประวัติการเข้าระบบ" },
    { name: "ชั่วโมงกิจกรรม" },
  ];

  const content = [
    { name: "รหัสนักศึกษา", content: "2xxxxxxxxxxxx" },
    { name: "เลขที่บัตรประชาชน", content: "9-9999-99999-99-9" },
    { name: "ชื่อ", content: "นาย หอการค้า รักมอ" },
    { name: "ชื่ออังกฤษ", content: "Mr. Hokankha Rakmo" },
    { name: "ตณะวิชา", content: "คณะวิศวกรรมศาสตร์" },
    { name: "หลักสูตร", content: "วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์" },
    { name: "วิชาโท", content: "อื่นๆ" },
    { name: "ระดับการศึกษา", content: "ปริญญาตรี - ปกติ1" },
    { name: "ชื่อปริญญา", content: "วิศวกรรมศาสตร์บัณฑิต วิศวกรรศาสตร์คอมพิวเตอร์และปัญญาประดิษฐ์" },
    { name: "ปีการศึกษาแรกเข้า", content: "2566/1 (วันที่1 15/08/2566)" },
    { name: "สถานภาพ", content: "กำลังศึกษา" },
    { name: "วันที่จบ / ลาออก / พ้นสภาพ", content: "-" },
    { name: "วันที่สภาอนุมัติ", content: "-" },
    { name: "วิธีเข้า", content: "-" },
    { name: "วุฒิก่อนเข้ารับการศึกษา", content: "มัธยมศึกษาตอนปลาย (4.00)" },
    { name: "จบการศึกษาจาก", content: "โรงเรียนมัธยม" },
    { name: "อ.ที่ปรึกษา", content: "อาจารย์ ดร.XXXX XXXXX" },
    
    
  ];

  return (
    <div className="Profile-Container">
      <div className="Profile-Border">
        <div className="Profile-ProfileBox">
          <CgProfile />
          {data.map((item) => {
            return <div className="Profile-button">{item.name}</div>;
          })}
        </div>
        <div className="Profile-Content">
          <div className="Profile-Contenttxt">
            <h1>ระเบียบประวัติ</h1>
            <li> ข้อมูลด้านการศึกษา</li>
            <div className="Profile-txt">
              {content.map((item) => {
                return <Protxt name={item.name} data={item.content} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
