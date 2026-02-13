import { useEffect , useState } from "react";
import { Outlet , Link} from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faCreditCard,faSignOut} from "@fortawesome/free-solid-svg-icons";
import "./adminDashboard.scss";




const AdminDashboard = () => {
      const [activeNav, setActiveNav] = useState();
      const [loading, setLoading] = useState(true);
      const [isNavExpanded, setIsNavExpanded] = useState(false);
  
      

  useEffect(() => {
      const token = localStorage.getItem('admin-token');
      if (!token) {
        window.location.href = '/adminLogin';
        return;
      }
  
      axios.get('https://lyft-api.onrender.com/api/adminDashboard/adminDashboard', {headers: {'x-auth-token': token}, })
      .then((res) => { setLoading(false)} )
      .catch((err) => {console.log(err) });
    }, []);

      
    const handleLogout = (nav) => {
      setActiveNav(nav)
      localStorage.removeItem('admin-token');
      window.location.href = '/adminLogin';
  };


       const handleNav = (nav) => {
          setActiveNav(nav)
           if (isNavExpanded) {
            setIsNavExpanded(false);
          }
        }
     const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
     };


      if(loading) return null;

return (
  <div className='adminDashboard'>
    <div  className={`navigationMenu ${isNavExpanded ? "expanded" : "collapsed"}`}>
      <div className="menuToggle" onClick={toggleNav}>
        <img src={` ${isNavExpanded ? "/icons/cancel.png" : "/icons/menu.png"}`} alt="menu" />
      </div>
      <ul>
        <Link className="navHeader" to="/">LYFT FX</Link>
        <Link to="subscription"><li onClick={() => handleNav("subscription")} className= {activeNav === "subscription" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faUser} /><span className="label">Manage Subscription</span></li></Link>
        <Link to="transaction"><li onClick={() => handleNav("transaction")} className= {activeNav === "transaction" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faCreditCard} /><span className="label">Manage Transaction</span></li></Link>
        <li onClick={() => handleLogout("logout")} className= {activeNav === "logout" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faSignOut} /> <span className="label">Logout</span></li>
      </ul>
    </div>
    <div className="main">
      <Outlet/>
    </div>
  </div>

);
  
}


  

export default AdminDashboard