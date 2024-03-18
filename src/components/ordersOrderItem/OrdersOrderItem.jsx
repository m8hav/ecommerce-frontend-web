import React from 'react'
import "./OrdersOrderItem.scss"
import { Link, useParams } from 'react-router-dom'

function OrdersOrderItem({ order, oNo }) {
  return (
    <Link to={'/order/' + order.id}>
      <div className='orders-order-item'>
        <div className="orders-order-item-header">
          <h2>Order #{oNo}</h2>
          <p>Order Date: {order.date}</p>
        </div>
        <div className="orders-order-item-details">
          <div className="orders-order-item-details-left">
            <h3>Items</h3>
            <ul>
              {
                order?.orderProducts && order.orderProducts.map((item, index) =>
                  <li key={index}>{item.name}</li>
                )
              }
            </ul>
          </div>
          <div className="orders-order-item-details-right">
            <h3>Shipping Address</h3>
            <p>{order.address}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrdersOrderItem