import React from "react";
import "./Estimate.css";
import Profile from "../assets/profile.jpg";

const Estimate = () => {
  return (
    <div className="es-Container">
      <div className="es-Border">
        <div className="es-txtArea">
          <div className="es-Headtxt">
            <h1>การประเมินการสอนของอาจารย์โดยนักศึกษา</h1>
            <div className="es-des">
              {`*หากระบบไม่แสดงรายชื่ออาจารย์ให้เลือกประเมินโปรดแจ้งอาจารย์ผู้สอนก่อนวันสุดท้ายของการประเมิน
              *กรุณาทำการประเมินอาจารย์ผู้สอนภายในวันที่ DD/MM/YYYY (สำหรับบางรายวิชาเท่านั้น) เพื่อความสะดวกในการใช้ระบบบริการการศึกษา`}
            </div>
          </div>
          <div className="es-year">
            <h3>ปีการศึกษา 1/2567</h3>
          </div>
          <div className="es-key">
            <h1>{`(รหัสวิชา) : ( _ _ _ _ _ ชื่อวิชา _ _ _ _ _)`}</h1>
          </div>
          <div className="es-name">
            <h1>ชื่ออาจารย์ผู้สอน _ _ _ _ _ _</h1>
          </div>
          <div className="es-pic">
            <div className="es-pic1">
              <img src={Profile} />
            </div>
            <div className="es-prof">
              <div className="es-prof1">
                <h1>รูปแบบการประเมิน</h1>
                <li>กรณีเรียนที่มหาวิทยาลัยฯ และใช้ iPad ในการเรียนการสอน</li>
                <li>
                  กรณีเรียนที่มหาวิทยาลัยฯ แต่ไม่ใช้ iPad ในการเรียนการสอน
                </li>
                <li>
                  กรณีเรียนแบบออนไลน์ หรือแบบผสมผสาน และใช้ iPad
                  ในการเรียนการสอน
                </li>
                <li>
                  กรณีเรียนแบบออนไลน์ หรือแบบผสมผสาน แต่ไม่ใช้ iPad
                  ในการเรียนการสอน
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
