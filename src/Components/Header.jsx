import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { ComponentContext } from "../context/ComponentContext";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { componentState, setComponentState } = useContext(ComponentContext);
  const { isLogin } = useContext(LoginContext);
  const [txt, settxt] = useState("");
  const [userData, setUserdata] = useState("");

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1];
      if (!base64Url) {
        throw new Error("Invalid JWT format");
      }

      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Failed to decode JWT:", error.message);
      return null;
    }
  };

  const get_data = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedData = decodeJWT(token);
      console.log("Decoded JWT Payload:", decodedData);
      setUserdata(decodedData);
    } else {
      console.warn("No token found in localStorage");
    }
  };

  useEffect(() => {
    get_data();
    console.log(componentState);

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
      case 5:
        settxt("ภาระค่าใช้จ่าย / ทุน");
        break;
      case 6:
        settxt("ภาระค่าใช้จ่าย / ทุน > ชำระเงิน");
      default:
        settxt("ภาระค่าใช้จ่าย / ทุน");
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
        {isLogin
          ? userData.username + "  " + userData.name + "  " + userData.surname
          : ""}
      </div>
    </div>
  );
};

export default Header;
