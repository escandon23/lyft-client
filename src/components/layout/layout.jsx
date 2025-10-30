import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar';
import EarningsPopup from '../earningsPopup/earningsPopup';
import License from '../license/license';
import Livechat from "../../livechat"


import "./layout.scss"

const Layout = () => {

  return (
    <div className='layout'>
       <Navbar/>  
       <Livechat/>
        <EarningsPopup/>
        <Outlet/>
       <License/>
    </div>
  )
}

export default Layout