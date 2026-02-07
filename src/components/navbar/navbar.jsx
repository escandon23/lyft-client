import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; 

import './navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open , setOpen] = useState(false)


  const toggleSection = (section) => {
    setActiveLink(prev => (prev === section ? "" : section));
  };

  const handleMenu = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }


  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">LYFT FX</Link>
      </div>
   
      <div className="accountButtonsMobile">
          <Link to="/userRegister" href="/userRegister" className=' button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard" className=' button loginButton'>LOGIN</Link>
        </div>
      <div className="navIcons">
 
        <div onClick={handleMenu} className={`menuIcon ${open ? "hide" : ""}`}>
          <Link to="#"><img src="menu.png" alt="" /></Link>
        </div>
        <div onClick={handleCancel} className={`cancelIcon ${open?"" : "hide"}`}>
          <Link to="#"><img src="cancel.png" alt="" /></Link>
  
        </div>

      </div>
    

      <div className={` links ${open? "activeMenu" : ""}`}>
        <ul>
          <li>
            <HashLink  to="#" className={`link ${activeLink === "trade" ? "active" : ""}`}>Home</HashLink>
          </li>
          <li>
            <HashLink to="/#Services" className={`link ${activeLink === "education"   ? "active" : ""}`}>
              Services
            </HashLink>
          </li>
          <li>
            <HashLink to="/#Plans" className={`link ${activeLink === "education"   ? "active" : ""}`}>
             Plans
            </HashLink>
          </li>
          <li>
            <HashLink to="#"  className={`link ${activeLink === "about" ? "active" : ""}`}>
              ABOUT COMPANY 
            </HashLink>
          </li>
            <li>
            <HashLink to="/#Testimonials"  className={`link ${activeLink === "about" ? "active" : ""}`}>
              Testimonials
            </HashLink>
          </li>
     
        </ul>
       
      </div>
        <div className="accountButtons">
          <Link to="/userRegister" className='button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard/dashboard" className='button loginButton'>LOGIN</Link>
      </div>
    </div>
  );
};

export default Navbar;