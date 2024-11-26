import React, { useEffect, useState } from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import Protxt from "../Components/Protxt";

const Profile = () => {
  const [information, setinformation] = useState(null);

  const getdata = async () => {
    const jwtToken = localStorage.getItem("authToken");

    if (!jwtToken) {
      console.error("No token found in localStorage.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: jwtToken }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setinformation(data.user);
      console.log(information);

      console.log("Response data:", data);
    } catch (error) {
      console.error("Error in POST request:", error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const data = [
    { name: "เปลี่ยนรูปโปรไฟล์" },
    { name: "แก้ไขข้อมูล" },
    { name: "เปลี่ยนรหัสผ่าน" },
    { name: "ประวัติการเข้าระบบ" },
    { name: "ชั่วโมงกิจกรรม" },
  ];

  const content = [
    {
      name: "รหัสนักศึกษา",
      content: information?.StudentCode || "กรุณา login ก่อนดูข้อมูล",
    },
    { name: "เลขที่บัตรประชาชน", content: information?.NationalID || "-" },
    { name: "ชื่อ", content: information?.FullName || "-" },
    { name: "ชื่ออังกฤษ", content: information?.FullNameEnglish || "-" },
    { name: "คณะวิชา", content: information?.Faculty || "-" },
    { name: "หลักสูตร", content: information?.Program || "-" },
    { name: "วิชาโท", content: information?.MinorSubject || "-" },
    { name: "ระดับการศึกษา", content: information?.EducationLevel || "-" },
    {
      name: "ชื่อปริญญา",
      content: information?.DegreeName || "-",
    },
    { name: "ปีการศึกษาแรกเข้า", content: information?.AdmissionYear || "-" },
    { name: "สถานภาพ", content: information?.Status || "-" },
    {
      name: "วันที่จบ / ลาออก / พ้นสภาพ",
      content: information?.GraduationDate || "-",
    },
    {
      name: "วันที่สภาอนุมัติ",
      content: information?.CouncilApprovalDate || "-",
    },
    { name: "วิธีเข้า", content: information?.AdmissionMethod || "-" },
    {
      name: "วุฒิก่อนเข้ารับการศึกษา",
      content: information?.PreEducation || "-",
    },
    { name: "จบการศึกษาจาก", content: information?.GraduatedFrom || "-" },
    { name: "อ.ที่ปรึกษา", content: information?.Advisor || "-" },
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
