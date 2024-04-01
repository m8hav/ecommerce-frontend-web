import React, { useEffect, useState } from 'react'
import './ProfileIcon.scss'
import { Link } from 'react-router-dom'
import { getUser } from '../../../utils/apis/UserAPIHandlers';

function ProfileIcon() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await getUser();
        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserDetails();
  }, []);

  return (
    <Link to={"/profile"}>
      <div id="nav-profile-container">
        <button id='nav-profile-button'>{currentUser?.name && currentUser.name[0]?.toUpperCase()}</button>
        <p>Profile</p>
      </div>
    </Link>
  )
}

export default ProfileIcon