import React, { useContext, useEffect, useState } from 'react'
import "./Signup.scss"
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../../utils/AuthUtils';
import { AuthContext } from '../../../contexts/AuthContext';

function Signup() {

  const currentUser = getUserDetails();
  const { setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) navigate('/');
  }, [])

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
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
    </div>
  )
}

export default Signup