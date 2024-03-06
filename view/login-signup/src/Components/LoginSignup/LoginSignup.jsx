import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginSignup.css'


import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';

const LoginSignup = () => {
  const [data, setData] = useState([]);
  const [action, setAction] = useState('login');

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:3000/employee/sign-up');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    // Your logic for handling input change
  };

  const handleGetUserData = () => {
    // Your logic for getting user data
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        {action === "login" ? null : (
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="tel" placeholder="Phone" />
          </div>
        )}

        {action === "login" ? null : (
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Designation" />
          </div>
        )}

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" onChange={handleInputChange} />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      ) : null}

      <div className="submit-container">
        
        <div className={action === "login" ? "submit gray" : "submit"} onClick={() => { setAction("login") }}>Login</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
      </div>
    </div>
  );
}

export default LoginSignup;
