import React, { useState, useContext } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import TH from "../assets/TH.png";
import Logo from "../assets/Logo.jpg";
import { ComponentContext } from "../context/ComponentContext";
import { CiLogout } from "react-icons/ci";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setComponentState } = useContext(ComponentContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (state) => {
    setComponentState(state);
    setIsMenuOpen(false);
  };

  return (
    <div className="Nav-Container">
      <div className="Nav-Border">
        <div className="Nav-Hamburger">
          <div className="Nav-Click" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
          <div className="Nav-Logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="Nav-Choice">
          <div className="Nav-TH">
            <img src={TH} alt="TH" />
          </div>
          <div className="Nav-Moon">
            <FaRegMoon />
          </div>
        </div>
      </div>

      <div className={`Nav-SideMenu ${isMenuOpen ? "open" : ""}`}>
        <div className="Nav-SideMenuContent">
          <div className="Nav-Close" onClick={() => setIsMenuOpen(false)}>
            <GiHamburgerMenu />
          </div>
          <div className="Nav-Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(1)}
          >
            หน้าแรก
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(2)}
          >
            โปรไฟล์และข้อมูล
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(3)}
          >
            ประเมินผู้สอน
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(4)}
          >
            ตารางเรียน/สอบ
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(5)}
          >
            ภาระค่าใช้จ่าย/ทุน
          </div>

          <div
            className="Nav-SideMenuItem1"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <CiLogout />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
