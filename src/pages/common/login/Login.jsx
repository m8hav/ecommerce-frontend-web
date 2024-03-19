import React, { useContext, useEffect, useState } from 'react'
import "./Login.scss"
import { getUserDetails, saveUserDetails } from "../../../utils/AuthUtils"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { logIn } from '../../../utils/apis/AuthAPIHandlers';

function Login() {

  const currentUser = getUserDetails();
  const { setCurrentUser } = useContext(AuthContext);
  const [error, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) navigate('/');
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrMsg("Email and Password are required");
      return;
    }

    try {
      const res = await logIn({ email, password });
      saveUserDetails(res);
      setCurrentUser(res);
      navigate('/');
    } catch (error) {
      setErrMsg("Invalid email or password");
    }
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
              <td><label htmlFor='login-password-input'>Enter Password</label></td>
              <td><input type='password' id='login-password-input' value={password} onChange={e => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='login-submit' onClick={handleLogin}>Login</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <p className='error-message'>{error}</p>
    </div>
  )
}

export default Login