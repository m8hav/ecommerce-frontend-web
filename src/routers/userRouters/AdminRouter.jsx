import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from "../../pages/admin/adminHome/AdminHome"
import EditProduct from "../../pages/admin/editProduct/EditProduct"
import Profile from "../../pages/common/profile/Profile"
import EditProfile from '../../pages/common/editProfile/EditProfile'
import ChangePassword from '../../pages/common/changePassword/ChangePassword'
import Logout from '../../pages/common/logout/Logout'
import DeleteAccount from '../../pages/common/deleteAccount/DeleteAccount'
import AddProduct from '../../pages/admin/addProduct/AddProduct'

function AdminRouter() {
  console.log("admin router loaded")
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:pid" element={<EditProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />
      </Routes>
    </>
  )
}

export default AdminRouter