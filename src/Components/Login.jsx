import React, { useContext, useState } from "react";
import "./Login.css";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin } = useContext(LoginContext);

  const handleLogin = () => {
    alert("Email :  " + email + "\nPassword :  " + password);
    setLogin(true);
  };

  return (
    <div className="Login-Container">
      <div className="Login-Border">
        <div className="Login-Header">
          <h1>ยินดีต้อนรับ</h1>
        </div>
        <div className="Login-Form">
          <div className="Login-Email">
            <div className="Login-Emailtxt">Email</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Login-pwd">
            <div className="Login-pwdtxt">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="Login-Button" onClick={handleLogin}>
          เข้าสู่ระบบ
        </div>
      </div>
      <div className="Login-warning">
        {`- รหัสผ่านของนักศึกษา ใช้รหัสผ่านเดียวกับรหัสผ่าน WiFi ของมหาวิทยาลัย
        -ค่าตั้งต้นของรหัสผ่านเป็นตัวอักษร ID (ไอดี) และตามด้วยเลขบัตรประชาชน 13 หลัก`}
      </div>
    </div>
  );
};

export default Login;
