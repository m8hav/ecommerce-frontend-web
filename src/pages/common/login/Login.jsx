import React, { useContext, useEffect, useState } from 'react'
import "./Login.scss"
import { getUserDetails, saveUserDetails } from "../../../utils/AuthUtils"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

function Login() {

  const currentUser = getUserDetails();
  const { setCurrentUser } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) navigate('/');
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // request to server to log in
    // receive a token

    const token = "test123";
    const admin = false;
    
    const userInfo = { token, admin };
    
    saveUserDetails(userInfo);
    setCurrentUser(userInfo);
    navigate('/');
    
    console.log("Logging in with email: " + email + " and password: " + password);
  }

  return (
    <div id='login-page-container'>
      <p id='login-heading'>Login</p>
      <form id='login-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='login-email'>Email</label></td>
              <td><input type='email' id='login-email' value={email} onChange={e => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='login-password-input'>Enter New Password</label></td>
              <td><input type='password' id='login-password-input' value={password} onChange={e => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='login-submit' onClick={handleLogin}>Login</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Login