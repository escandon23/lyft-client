import React, { useState , useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; 

import './navbar.scss';

const Navbar = () => {
  const [menu , setMenu] = useState(false)

  useEffect(() => {

    const onScroll = () => {

      const navbar = document.querySelector(".navbar");

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

  window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);


  const toggleMenu = () => {
    setMenu(!menu)
  }




  return (
    <div className={`navbar ${menu ? "scrolled" : ""}`}>
      <div className="logo">
        <h2><HashLink to="/#home">LYFT FX</HashLink></h2>
      </div>
   
      <div className="accountButtonsMobile">
          <Link to="/userRegister" className='button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard" className=' button loginButton'>LOGIN</Link>
      </div>

      <div className="navIcons">
        <div onClick={toggleMenu} className={`menuIcon ${menu ? "hide" : ""}`}>
          <Link to="#"><img src="icons/menu.png" alt="" /></Link>
        </div>
        <div onClick={toggleMenu} className={`cancelIcon ${menu?"" : "hide"}`}>
          <Link to="#"><img src="icons/cancel.png" alt="" /></Link>
        </div>
      </div>


      <div className={`links ${menu? "linksVertical" : ""}`}>
        <ul>
          <li><HashLink  to="/#home" onClick={() => setMenu(false)} className="link">Home</HashLink></li>
          <li><HashLink to="/#services"onClick={() => setMenu(false)} className="link">Services</HashLink></li>
          <li><HashLink to="/#plans" onClick={() => setMenu(false)} className="link">Plans</HashLink></li>
           <li><HashLink to="/#testimonials" onClick={() => setMenu(false)} className="link">Testimonials</HashLink>
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