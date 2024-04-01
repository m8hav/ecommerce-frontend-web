import React, { useContext, useEffect } from 'react'
import './Navbar.scss'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'
import ProfileIcon from './profileIcon/ProfileIcon'
import LoginSignupButtons from './loginSignupButtons/LoginSignupButtons'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <div id='nav-logo-container'>
          <img src="/logos/maf_carrefour_logo.png" alt="maf_carrefour_logo" />
        </div>
      </Link>
      {
        currentUser == null
          ? <LoginSignupButtons />
          : <>
            <SearchBar />
            <ProfileIcon />
            {
              currentUser.role == "USER" &&
              <Link to={"/cart"}>
                <div id="nav-cart-btn">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </Link>
            }
          </>
      }
    </nav>
  )
}

export default Navbar