import React, { useContext, useState } from "react";
import "./Login.css";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin } = useContext(LoginContext);

  const handleLogin = () => {
    const loginData = {
      username: email,
      password: password,
    };

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          setLogin(true);
          // alert("Login successful! Token stored in localStorage.");
        } else {
          alert("Login failed: " + data.error);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred while logging in.");
      });
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
