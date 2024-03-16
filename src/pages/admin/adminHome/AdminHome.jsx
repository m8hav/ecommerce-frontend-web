import React from 'react'
import "./AdminHome.scss"
import ProductItem from '../../../components/productItem/ProductItem'
import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div id='admin-home-page'>
      <h1>Available Products</h1>
      <Link to="/addProduct">
        <button id='add-product-btn'>Add Product</button>
      </Link>
      <div>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) =>
            <ProductItem imgUrl={"https://picsum.photos/300/300"} key={index} pid={index} name={"Shampoo"} desc="Good Shampoo" price="200" />
          )
        }
      </div>
    </div>
  )
}

export default AdminHome