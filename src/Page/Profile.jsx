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
    { name: "asd", content: "asdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
    { name: "asdasd", content: "asdasdasd" },
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
