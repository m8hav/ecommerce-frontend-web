import React from 'react'
import './ProfileIcon.scss'
import { Link } from 'react-router-dom'

function ProfileIcon() {
  return (
    <Link to={"/profile"}>
      <div id="nav-profile-container">
        <img src="https://picsum.photos/50" alt="Profile" />
        <h3>Username</h3>
      </div>
    </Link>
  )
}

export default ProfileIcon