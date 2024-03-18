import React, { useContext, useEffect, useState } from 'react'
import "./Profile.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { getUser } from '../../../utils/apis/UserAPIHandlers'

function Profile() {

  const { currentUser } = useContext(AuthContext);

  const [user, setUser] = useState({});

  const fetchUserDetails = async () => {
    try {
      const res = await getUser(currentUser.id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  return (
    <div id='profile-page-container'>
      <h1>Profile</h1>

      <div id="profile-main">
        <div id='profile-info'>
          <h2>Profile Information</h2>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td id='profile-info-name'>{user.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td id='profile-info-email'>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id='profile-options'>
          <h2>Options</h2>
          <div id="profile-options-btns">
            {
              currentUser.role == "USER" &&
              <Link to="/orders">
                <button>View Orders</button>
              </Link>
            }
            <Link to="/editProfile">
              <button>Edit Profile</button>
            </Link>
            <Link to="/changePassword">
              <button>Change Password</button>
            </Link>
            <Link to="/logout">
              <button>Logout</button>
            </Link>
            <Link to="/deleteAccount">
              <button>Delete Account</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile