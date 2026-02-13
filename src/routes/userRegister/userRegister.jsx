import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import './userRegister.scss';


const UserRegister = () => {
  
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const thisYear = new Date().getFullYear()

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    let newErrors = {};


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }


    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('https://lyft-api.onrender.com/api/userRegister/send', form);

      setRegistrationMessage("✅ Registration successful");
      
       setForm({
      email: '',
      password: '',
      confirmPassword : ""
    });
   
    } catch (error) {
      setRegistrationMessage("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div className='userRegister'>
      <div className="register-card">
        <div className='exit'>
          <Link to="/"><img src="icons/exit.png" alt="" /></Link>
        </div>
        <div>
          <h1>Sign Up</h1>
          <p className="subtitle">Join Lyft  FX and start your investment journey today</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
           <label>Email</label>
          <input type='email' name='email' value={form.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

     
          <div className='names'>
            <div className='name password-field'>
              <label>Password</label>
              <div className="password-input">
                <input type={showPassword ? "text" : "password"} value={form.password} name='password' onChange={handleChange} />
                <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>} </span>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className='name password-field'>
              <label>Confirm Password</label>
              <div className="password-input">
                <input type={showPassword ? "text" : "password"} name='confirmPassword' value={form.confirmPassword} onChange={handleChange} />
                <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</span>
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          </div>

          <button type='submit'>Register</button>
          <div className="divider"><span>or</span> </div>

          <button><img src="icons/google.png" alt="" />Sign Up with Google</button>
          <button><img src="icons/apple.png" alt="" />Sign Up with Apple</button>

           <p className={`${registrationMessage.includes("✅") ? "success" : "fail"}`}>{registrationMessage}</p>
        </form>

        <p className="login-text">
          Already have an account? <Link to='/userLogin'>Login</Link>
        </p>
        <p className="footer">© {thisYear} Lyft Fx . All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default UserRegister;
