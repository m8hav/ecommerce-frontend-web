import React, { createContext, useEffect, useState } from 'react'
import { getUserDetails } from '../utils/AuthUtils';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(getUserDetails());

  // useEffect(() => {
  //   setCurrentUser(getUserDetails());
  // }, [])

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }} >
      {children}
    </AuthContext.Provider>
  )
}