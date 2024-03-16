import React, { useContext, useEffect } from 'react'
import "./Logout.scss"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext';
import { removeUserDetails } from '../../../utils/AuthUtils';

function Logout() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    removeUserDetails();
    setCurrentUser(null);
    navigate('/login');
  }, []);

  return (
    <div>Logout</div>
  )
}

export default Logout