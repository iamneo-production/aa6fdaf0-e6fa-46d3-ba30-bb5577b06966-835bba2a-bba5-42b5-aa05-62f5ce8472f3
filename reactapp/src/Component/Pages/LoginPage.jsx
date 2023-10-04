
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , useNavigate } from 'react-router-dom';


import '../Asserts/login.css'; 
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';


function LoginPage() {
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const navigate=useNavigate();
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }; 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Basic form validation
    if (!username || !password) {
      setError('Username and password are required.');
    }
    else if (username && password) {
      dispatch(login(username));
      navigate("/");
    }
      
  };
  

  return ( 
    <div className="containerlog">
      
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
        <h3 className="title">User Login</h3>
        {error && <div className="error">{error}</div>}
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="login-btn" onClick={handleLogin}>LOGIN</button>
        <br/>
        <br/> 
        <div className="create11">
          <Link to="/Signup">Create Your Account</Link>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;