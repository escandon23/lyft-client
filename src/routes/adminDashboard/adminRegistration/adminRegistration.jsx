 import React from "react"
 import { useState } from "react";
 import { Eye, EyeOff } from "lucide-react";
 import axios from 'axios';
 import "./adminRegistration.scss"
 
 const AdminRegistration = () => {

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rand: '',
    });

    const [registerMessage , setRegisterMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    

    const handleRegister = async (e) => {
     e.preventDefault();

    try {
       
     
        await axios.post('https://blueledgerfx-api.onrender.com/api/userRegister/send', formData); 

        setRegisterMessage("✅ Registration successful");
    } catch (err) {
       setRegisterMessage("❌ Registration failed. Please try again.");
    }
    };


    return (

    <div className="adminRegistration">
      <form onSubmit={handleRegister} noValidate>
        <h1>Create an Account</h1>
        <div className="names">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
           
          </div>          
            <div className="name">
            <label htmlFor="">Last Name</label>
               <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

          </div>
        </div>
      
        <label htmlFor="">Email</label>
          <input
              type="email"
              value={formData.email}
              placeholder='name@gmail.com'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
     
         <div className='names'>
            <div className='name'>
              <label>Password</label>
              <div className="password-input">
                <input 
                type={showPassword ? "text" : "password"} 
                value={formData.password} name='password' 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                 />
                <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">
                  {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </span>
              </div>
            </div>  
          <div className='name'>
            <label>Confirm Password</label>
            <div className="password-input">
              <input 
              type={showPassword ? "text" : "password"} 
              name='rand' value={formData.rand} 
              onChange={(e) => setFormData({ ...formData, rand: e.target.value })}
              />
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">
                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
              </span>
            </div>
            </div>
          </div>
      
      
        <button type="submit">Register</button>
           <p className={`${registerMessage.includes("✅") ? "success" : "fail"}`}>{registerMessage}</p>
        <p>© Copyright 2025   Blueledger FX   All Rights Reserved.</p>

      </form>

        </div>

    )
      
}


 export default AdminRegistration




  
      
  