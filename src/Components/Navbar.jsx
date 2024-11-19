import React, { useState, useContext } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import TH from "../assets/TH.png";
import Logo from "../assets/Logo.jpg";
import { ComponentContext } from "../context/ComponentContext"; // Import the ComponentContext

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setComponentState } = useContext(ComponentContext); // Access setComponentState

  // Toggle the side menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu item click and change the component state
  const handleMenuItemClick = (state) => {
    setComponentState(state); // Change the component state based on the clicked item
    setIsMenuOpen(false); // Optionally close the menu when an item is clicked
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
            Home
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(2)}
          >
            About
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(3)}
          >
            Services
          </div>
          <div
            className="Nav-SideMenuItem"
            onClick={() => handleMenuItemClick(4)}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
