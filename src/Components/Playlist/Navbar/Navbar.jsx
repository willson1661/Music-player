import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css"
import logo from "./Logo.png"
import SongsProduct from "../Audioplayer/SongsProduct"

// import { Dropdown } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {


  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // const closeMenu = () => {
  //   setOpen(false);
  // };

  return (
    <nav className="navbar">
      
     <img src={logo} style={{width:"80px"}} alt="llu"/>
     
     <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">

    <div>
  <SongsProduct  /> 
            </div>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
