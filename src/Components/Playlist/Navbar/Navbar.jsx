

import "./Navbar.css"
import logo from "./Logo.png"


// import { Dropdown } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {


  



  // const closeMenu = () => {
  //   setOpen(false);
  // };

  return (
    <nav className="navbar">
      
     <img src={logo} style={{width:"80px"}} alt="llu"/>

     <div className="totalanimation">

<div  className="animation"  >
    <span id="animation11" ></span>
    <span id="animation12" ></span>
    <span id="animation13" ></span>
    <span id="animation14" ></span>
    <span id="animation15" ></span>

  </div>
 
  </div>
     
     {/* <div onClick={handleClick1} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div> */}
      
      {/* <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">

    <div>
    
            </div>
        </li>
       
      </ul> */}
    </nav>
  );
};

export default Navbar;
