import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from "../../pages/admin/adminHome/AdminHome"
import EditProduct from "../../pages/admin/editProduct/EditProduct"
import AddProduct from '../../pages/admin/addProduct/AddProduct'

function AdminRouter() {
  console.log("admin router loaded")
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:pid" element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default AdminRouter