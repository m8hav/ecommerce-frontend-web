import React, { useContext } from 'react'
import "./DeleteAccount.scss"
import { useNavigate } from 'react-router-dom';
import { removeUserDetails } from '../../../utils/AuthUtils';
import { AuthContext } from '../../../contexts/AuthContext';

function DeleteAccount() {

  const navigator = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleDeleteAccount = (e) => {
    console.log("Account deleted successfully");
    removeUserDetails();
    setCurrentUser(null);
    navigator('/signup');
  }

  return (
    <div id='delete-account-page-container'>
      <p id='delete-account-heading'>Are you sure you want to delete your account?</p>
      <button id='delete-account-submit' onClick={e => handleDeleteAccount(e)}>Delete Account</button>
    </div>
  )
}

export default DeleteAccount