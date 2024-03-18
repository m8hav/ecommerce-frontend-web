import React, { useEffect, useState } from 'react'
import "./EditProfile.scss"
import { getUser, updateUser } from '../../../utils/apis/UserAPIHandlers';
import { useNavigate } from 'react-router-dom';

function EditProfile() {

  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log('fetching user details for editing')

    const fetchUserDetails = async () => {
      const user = await getUser();
      setName(user.name || "");
    }

    fetchUserDetails();
  }, []);

  const saveProfileChanges = async (e) => {
    e.preventDefault();
    console.log('updating user details')

    // Update user details
    try {
      const res = await updateUser({ name: name });
      console.log(res);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='edit-profile-page-container'>
      <p id='edit-profile-heading'>Edit Profile</p>
      <form id='edit-profile-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='edit-profile-name'>Name</label></td>
              <td><input type='text' id='edit-profile-name' value={name} onChange={e => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button id='profile-edit-submit-btn' onClick={e => saveProfileChanges(e)}>Save</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default EditProfile