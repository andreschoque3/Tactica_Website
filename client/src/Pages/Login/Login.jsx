import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  <div className='wrapper'>
      <form action="">
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" name="" id="" placeholder='username' /> <i className='far fa-user'></i>
          </div>
          <div className='input-box'>
            <input type="text" name="" id="" placeholder='password' /> <i className='fas fa-lock'></i>
          </div>
          <span>Forgot password?</span>
          <Link to='/Forgot-Password'>Click Here</Link>
      </form>
  </div>
  )
}
export default Login