import React, { useContext, useState } from 'react'
import "./DeleteAccount.scss"
import { useNavigate } from 'react-router-dom';
import { removeUserDetails } from '../../../utils/AuthUtils';
import { AuthContext } from '../../../contexts/AuthContext';
import { deleteUser } from '../../../utils/apis/UserAPIHandlers';

function DeleteAccount() {

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleDeleteAccount = async (e) => {
    try {
      const res = await deleteUser();
      if (res) {
        console.log("Account deleted successfully");
        removeUserDetails();
        setCurrentUser(null);
        navigate('/signup');
      } else {
        console.log("Account deletion failed");
        setError("Account deletion failed");
      }
    } catch (error) {
      console.log('Error during API call', error);
      setError("Error during API call");
    }
  }

  return (
    <div id='delete-account-page-container'>
      <p id='delete-account-heading'>Are you sure you want to delete your account?</p>
      <button id='delete-account-submit' onClick={e => handleDeleteAccount(e)}>Delete Account</button>
      <p>{error}</p>
    </div>
  )
}

export default DeleteAccount