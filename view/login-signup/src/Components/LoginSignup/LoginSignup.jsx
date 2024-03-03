import React, { useState } from 'react' 
import './LoginSignup.css'
import axios from 'axios'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {

  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:3000/employee/sign-up");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);
    return (
    
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                    </div>}
                
                    <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                    </div>
                    {action==="login"?<div></div>:<div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="Phone" placeholder="Phone"/>
                    </div>}
                    
                    {action==="login"?<div></div>: <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="designation" placeholder="designation"/>
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
                        <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("login")}}>Login</div>
                        <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                        </div> 
         </div>
    );
}

export default LoginSignup
