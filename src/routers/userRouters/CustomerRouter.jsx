import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../../pages/customer/home/Home"
import ProductLanding from "../../pages/customer/productLanding/ProductLanding"
import Cart from "../../pages/customer/cart/Cart"
import Checkout from "../../pages/customer/checkout/Checkout"
import Orders from "../../pages/customer/orders/Orders"
import Order from "../../pages/customer/order/Order"

function CustomerRouter() {
  console.log("customer router loaded")
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:pid" element={<ProductLanding />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:oid" element={<Order />} />
      </Routes>
    </>
  )
}

export default CustomerRouter