import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { ComponentContext } from "../context/ComponentContext";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { componentState, setComponentState } = useContext(ComponentContext);
  const { isLogin } = useContext(LoginContext);
  const [txt, settxt] = useState("");
  const { isLogin } = useContext(LoginContext);

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
  }, [componentState]);

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
      <div className="Header-name"> {isLogin? "23xxxxxxxx นาย หอการค้า รักมอ":""}</div>
    </div>
  );
};

export default Header;
