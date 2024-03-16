import React, { useEffect, useState } from 'react'
import "./ChangePassword.scss"

function ChangePassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Password changed successfully");
    }
    else {
      console.log("Passwords do not match");
    }
  }

  return (
    <div id='edit-password-page-container'>
      <p id='edit-password-heading'>Change Password</p>
      <form id='edit-password-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='change-password-input'>Enter New Password</label></td>
              <td><input type='password' id='change-password-input' value={password} onChange={e => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='confirm-password-input'>Confirm Password</label></td>
              <td><input type='password' id='confirm-password-input' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='edit-password-submit' onClick={e => handleChangePassword(e)}>Change Password</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default ChangePassword