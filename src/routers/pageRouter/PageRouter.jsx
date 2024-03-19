import React from 'react'
import "./PageRouter.scss"
import { Route, Routes } from 'react-router-dom'
// import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
import Login from '../../pages/common/login/Login'
import Signup from '../../pages/customer/signup/Signup'
import UserRouter from '../userRouters/UserRouter'
import SearchListing from '../../pages/common/searchListing/SearchListing'

function PageRouter() {
  return (
    <main>
      {/* <Breadcrumbs /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/products/search/:searchString" element={<SearchListing />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </main>
  )
}

export default PageRouter