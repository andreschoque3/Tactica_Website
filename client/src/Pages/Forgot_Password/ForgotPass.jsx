import React from 'react'


const ForgotPass = () => {
  return (
  <div className='parent-wrapper'>
    <div className='wrapper'>
        <form action="">
          <h1>Forgot Password?</h1>

          <p>Enter the email address associated with your account and we'll email you a link to reset password</p>

          <div className='input-box'>
            <input type="email" name="" id="" placeholder='Email' required />
            <i className='fas fa-user'></i>
          </div>

          <button>Continue</button>

          <div className='register-link'>
            <p>Dont have an account? <a href='/register'>Register</a></p>
          </div>

        </form>
    </div>
  </div>
  )
}
export default ForgotPass