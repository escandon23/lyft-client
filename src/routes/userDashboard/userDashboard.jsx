import { useState, React, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHistory, faCreditCard,  faExchangeAlt,
  faBox,
  faUserFriends,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import "./userDashboard.scss";


const UserDashboard = () => {
  const [message, setMessage] = useState("");
  const [activeNav, setActiveNav] = useState();
  const [loading, setLoading] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user-token");

    if (!token) {
      window.location.href = "/userLogin";
      return;
    }

    axios.get("http://localhost:5000/api/userDashboard/send/", {headers: { "user-token": token }})
      .then((res) => {setMessage(res.data.userInfo); setLoading(false);})
      .catch((err) => {console.log(err)});
    }, []);

  const handleLogout = (nav) => {
    setActiveNav(nav);
    localStorage.removeItem("user-token");
    window.location.href = "/";
  };

  const handleNav = (nav) => {
    setActiveNav(nav);
  if (isNavExpanded) {
    setIsNavExpanded(false);
  }
  };

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  

  if (loading) return null;

  return (
    <div className="userDashboard">
      <div className={`navigationMenu ${isNavExpanded ? "expanded" : "collapsed"}`}>
        <div className="menuToggle" onClick={toggleNav}>
          <img src={` ${isNavExpanded ? "icons/menu.png" : "icons/menu.png"}`} alt="menu" />
        </div>

        <ul>
          <Link className="navHeader" to="/">Lyft Fx</Link>
          <Link to="dashboard">
            <li onClick={() => handleNav("home")} className={activeNav === "home" ? "activeNav" : ""}>
              <FontAwesomeIcon className="icon" icon={faHome} /> <span className="label">Dashboard</span>
            </li>
          </Link>  
       
          <Link to="depositWithdrawal">
            <li onClick={() => handleNav("d/w")} className={activeNav === "d/w" ? "activeNav" : ""} >
              <FontAwesomeIcon className="icon" icon={faCreditCard} /><span className="label">Deposit/Withdrawal</span>
            </li>
          </Link>
          
          <Link to="packages">
            <li onClick={() => handleNav("packages")} className={activeNav === "packages" ? "activeNav" : ""}>
              <FontAwesomeIcon className="icon" icon={faBox} /><span className="label">Packages</span>
            </li>
          </Link>
          <Link to="subscriptionTrade">
            <li onClick={() => handleNav("s/t")} className={activeNav === "s/t" ? "activeNav" : ""} >
              <FontAwesomeIcon className="icon" icon={faExchangeAlt} /><span className="label">Subscription Trade</span>
            </li>
          </Link>
             <Link to="transactionHistory">
            <li onClick={() => handleNav("t/h")} className={activeNav === "t/h" ? "activeNav" : ""}>
              <FontAwesomeIcon className="icon" icon={faHistory} /><span className="label">Transaction History</span>
            </li>
          </Link>
          <Link to="referral">
            <li onClick={() => handleNav("referral")} className={activeNav === "referral" ? "activeNav" : ""}>
              <FontAwesomeIcon className="icon" icon={faUserFriends} /><span className="label">Refer Users</span>
            </li>
          </Link>
          <li onClick={() => handleLogout("logout")} className={activeNav === "logout" ? "activeNav" : ""} >
            <FontAwesomeIcon className="icon" icon={faSignOut} /><span className="label">Logout</span>
          </li>
        </ul>
      </div>

      <div className="main">
        <Outlet context={message} />
      </div>
    </div>
  );
};

export default UserDashboard;
