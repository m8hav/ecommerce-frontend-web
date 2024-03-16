import React from 'react'
import "./Orders.scss"
import OrdersOrderItem from '../../../components/ordersOrderItem/OrdersOrderItem'

function Orders() {
  return (
    <div id='orders-page-container'>
      <h1>Orders</h1>
      <div id="orders-page-main">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((order, index) =>
            <OrdersOrderItem key={index} oid={order} />
          )
        }
      </div>
    </div>
  )
}

export default Orders