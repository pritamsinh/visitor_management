import React, { useState } from 'react' 
import './LoginSignup.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {
    // MyForm.js
   const [action,setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    password: '',
    // Your form fields (e.g., username, password, etc.)
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/employee/sign-up');
      const userData = await response.json();
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/employee/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Signup Result:', result);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"onChange={handleInputChange}/>
                    </div>}
                
                    <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"onChange={handleInputChange}/>
                    </div>
                    {action==="login"?<div></div>:<div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="Phone" placeholder="Phone"onChange={handleInputChange}/>
                    </div>}
                    
                    {action==="login"?<div></div>: <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="designation" placeholder="designation"onChange={handleInputChange}/>
                    </div>}
                   
                    <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="password"onChange={handleInputChange}/>
                    </div>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>
}
                    <div className="submit-container">
                    <button onClick={handleGetUserData}>Get User Data</button>
                        <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Login</div>
                        <div className={action==="Sign Up"?"submit gray": "submit"} onClick={handleSignup}>Sign Up</div>
                        </div> 
         </div>
    );
}

export default LoginSignup
