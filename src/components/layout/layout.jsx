import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar';



import "./layout.scss"

const Layout = () => {

  return (
    <div className='layout'>
       <Navbar/>  
        <Outlet/>
    </div>
  )
}

export default Layout