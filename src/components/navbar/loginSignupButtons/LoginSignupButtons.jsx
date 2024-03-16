import React from 'react'
import './LoginSignupButtons.scss'
import { Link } from 'react-router-dom'

function LoginSignupButtons() {
  return (
    <div id='nav-login-signup-btns'>
      <Link to="/login">
        <button id='nav-login-btn'>Login</button>
      </Link>
      <Link to="/signup">
        <button id='nav-signup-btn'>Signup</button>
      </Link>
    </div>
  )
}

export default LoginSignupButtons