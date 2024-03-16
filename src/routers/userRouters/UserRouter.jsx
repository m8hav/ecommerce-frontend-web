import React, { useContext } from 'react'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import { getUserDetails } from '../../utils/AuthUtils'
import CustomerRouter from './CustomerRouter';
import AdminRouter from './AdminRouter';
import { AuthContext } from '../../contexts/AuthContext';

function UserRouter() {

  const { currentUser } = useContext(AuthContext);
  const localStorageUser = getUserDetails();

  const user = currentUser || localStorageUser;

  return (
    <ProtectedRoute>
      {user?.admin == true ? <AdminRouter /> : <CustomerRouter />}
    </ProtectedRoute>
  )
}

export default UserRouter