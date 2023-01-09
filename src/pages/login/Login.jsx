import React from 'react'
import './login.scss'
import backgroundImage from '../../utils/images/medicalimg.jpg'

const Login = () => {
  return (
    <div className='loginPageWrapper'>
      <img
        src={backgroundImage}
        alt='background img'
        className='backgroundImg'
      />
      <div className='loginContentWrapper'>
        <div className='loginTitle'>Admin Login</div>

        <input
          type='text'
          name='userId'
          placeholder='Email'
          className='emailInput'
          autoComplete='off'
        />
        <br />
        <br />

        <input
          placeholder='Password'
          name='password'
          className='passwordInput'
        />

        <button type='submit' className='submitBtn'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
