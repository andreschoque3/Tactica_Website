import React, {useEffect, useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
  <div className='parent-wrapper'>
  <div className='wrapper'>
      <form action="">
          <h1>Login</h1>
          
          <div className='input-box'>
            <input type="email" name="" id="" placeholder='Email' required />
            <i className='fas fa-user'></i>
          </div>

          <div className='input-box'>
            <input type={showPassword ? "text" : "password"} name="" id="" placeholder='Password' required />
            <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility}></i>
          </div>
  
          <div className='remember-forget'>
            <span>Forgot password?</span>
            <Link to='/Forgot-Password' className='click-here'>Click Here</Link>
          </div>

          <button>Login</button>

          <div className='register-link'>
            <p>Dont have an account? <a href='/register'>Register</a></p>
          </div>
      </form>
  </div>
  </div>
  )
}
export default Login