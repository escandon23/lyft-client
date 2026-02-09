import React, { useState , useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; 

import './navbar.scss';

const Navbar = () => {
  const [menu , setMenu] = useState(false)

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);


  const toggleMenu = () => {
    setMenu(!menu)
  }




  return (
    <div className="navbar">
      <div className="logo">
        <HashLink to="/#home">LYFT FX</HashLink>
      </div>
   
      <div className="accountButtonsMobile">
          <Link to="/userRegister" href="/userRegister" className='button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard" className=' button loginButton'>LOGIN</Link>
      </div>
      <div className="navIcons">
 
        <div onClick={toggleMenu} className={`menuIcon ${menu ? "hide" : ""}`}>
          <Link to="#"><img src="menu.png" alt="" /></Link>
        </div>
        <div onClick={toggleMenu} className={`cancelIcon ${menu?"" : "hide"}`}>
          <Link to="#"><img src="cancel.png" alt="" /></Link>
        </div>

      </div>


      <div className={` links ${menu? "activeMenu" : ""}`}>
        <ul>
          <li>
            <HashLink  to="/#home" onClick={() => setMenu(false)} className="link">Home</HashLink>
          </li>
          <li>
            <HashLink to="/#services"onClick={() => setMenu(false)} className="link">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink to="/#plans" onClick={() => setMenu(false)} className="link">
             Plans
            </HashLink>
          </li>
            <li>
            <HashLink to="/#testimonials" onClick={() => setMenu(false)} className="link">
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