import './NavbarStyles.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1 style={{color:"#7bdcb5"}}>DevMobs</h1>
      </Link>
      
      <div className="hamburger-options-wrapper">

      <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: "#fff"}}/>)
          : (<FaBars size={30} style={{ color: "#fff"}}/>)
          }
        </div>

        <ul className={click ? "nav-menu.active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar