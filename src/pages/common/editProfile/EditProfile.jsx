import React, { useEffect, useState } from 'react'
import "./EditProfile.scss"

function EditProfile() {

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    setUserName("Madhav Goyal");
    setUserEmail("madhav@gmail.com");
  }, []);

  return (
    <div id='edit-profile-page-container'>
      <p id='edit-profile-heading'>Edit Profile</p>
      <form id='edit-profile-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='edit-profile-name'>Name</label></td>
              <td><input type='text' id='edit-profile-name' value={userName} onChange={e => setUserName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='edit-profile-email'>Email</label></td>
              <td><input type='email' id='edit-profile-email' value={userEmail} onChange={e => setUserEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='edit-profile-submit'>Save</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default EditProfile