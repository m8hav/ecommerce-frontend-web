import React from 'react'
import "./PageRouter.scss"
import { Route, Routes } from 'react-router-dom'
// import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
import Login from '../../pages/common/login/Login'
import Signup from '../../pages/customer/signup/Signup'
import UserRouter from '../userRouters/UserRouter'
import SearchListing from '../../pages/common/searchListing/SearchListing'
import Profile from "../../pages/common/profile/Profile"
import EditProfile from '../../pages/common/editProfile/EditProfile'
import ChangePassword from '../../pages/common/changePassword/ChangePassword'
import Logout from '../../pages/common/logout/Logout'
import DeleteAccount from '../../pages/common/deleteAccount/DeleteAccount'

function PageRouter() {
  return (
    <main>
      {/* <Breadcrumbs /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/products/search/:searchString" element={<SearchListing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </main>
  )
}

export default PageRouter