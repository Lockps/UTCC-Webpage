import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { ComponentContext } from "../context/ComponentContext";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { componentState, setComponentState } = useContext(ComponentContext);
  const { isLogin } = useContext(LoginContext);
  const [txt, settxt] = useState("");
  const [data, setData] = useState(null); // Handle API data state
  const [loading, setLoading] = useState(false); // Handle loading state

  const get_data = () => {
    if (isLogin) {
      setLoading(true); // Start loading

      fetch("http://127.0.0.1:5000/get_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({ userId: "someUserId" }),
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data); // Store fetched data
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        })
        .finally(() => setLoading(false)); // Stop loading
    }
  };

  useEffect(() => {
    switch (componentState) {
      case 1:
        settxt("หน้าแรก");
        break;
      case 2:
        settxt("โปรไฟล์และข้อมูล");
        break;
      case 3:
        settxt("ประเมินผู้สอน");
        break;
      case 4:
        settxt("ตารางเรียน / สอบ");
        break;
      default:
        settxt("");
        break;
    }
  }, [componentState, isLogin]);

  return (
    <div className="Header-Container">
      <h1>
        {txt} |{" "}
        <span>
          <span
            onClick={() => {
              setComponentState(1);
            }}
          >
            หน้าแรก
          </span>
          {componentState === 1 ? "" : ` > ${txt}`}
        </span>
      </h1>

      <div className="Header-name">
        {isLogin ? (
          loading ? (
            <span>กำลังโหลด...</span>
          ) : data ? (
            `ยินดีต้อนรับ, ${data.userName}`
          ) : (
            "ข้อมูลผู้ใช้ไม่พบ"
          )
        ) : (
          "กรุณาล็อกอิน"
        )}
      </div>
    </div>
  );
};

export default Header;
