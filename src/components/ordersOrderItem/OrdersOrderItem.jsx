import React, { useEffect, useState } from 'react'
import "./OrdersOrderItem.scss"
import { Link, useParams } from 'react-router-dom'

function OrdersOrderItem({ order }) {
  const [orderDate, setOrderDate] = useState('');
  useEffect(() => {
    setOrderDate(new Date(order.date).toDateString())
  }, [])
  return (
    <Link to={'/order/' + order.id}>
      <div className='orders-order-item'>
        <div className="orders-order-item-header">
          <h2>Order #{order.id}</h2>
          <p>Order Date: {orderDate}</p>
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