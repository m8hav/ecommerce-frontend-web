import React, { useContext, useEffect, useState } from 'react'
import "./Signup.scss"
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../../utils/AuthUtils';
import { signUp } from '../../../utils/apis/AuthAPIHandlers';

function Signup() {

  const currentUser = getUserDetails();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) navigate('/');
  }, [])

  const handleSignup = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      setError("All fields are required");
      return;
    }

    // regex validation of email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    console.log("Signing up with name: " + name + " email: " + email + " and password: " + password);
    setError("");
    
    const user = signUp({ name, email, password });
    console.log(user);
    
    navigate('/login')
  }

  return (
    <div id='signup-page-container'>
      <p id='signup-heading'>Signup</p>
      <form id='signup-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='signup-name'>Name</label></td>
              <td><input type='text' id='signup-name' value={name} onChange={e => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='signup-email'>Email</label></td>
              <td><input type='email' id='signup-email' value={email} onChange={e => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='signup-password-input'>Enter New Password</label></td>
              <td><input type='password' id='signup-password-input' value={password} onChange={e => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='signup-confirm-password-input'>Confirm Password</label></td>
              <td><input type='password' id='signup-confirm-password-input' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='signup-submit' onClick={handleSignup}>Signup</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <p className='error-message'>{error}</p>
    </div>
  )
}

export default Signup