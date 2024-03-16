import React from 'react'
import "./OrdersOrderItem.scss"
import { Link } from 'react-router-dom'

function OrdersOrderItem() {
  return (
    <Link to='/order/1'>
      <div className='orders-order-item'>
        <div className="orders-order-item-header">
          <h2>Order #1</h2>
          <p>Order Date: 2020-01-01</p>
        </div>
        <div className="orders-order-item-details">
          <div className="orders-order-item-details-left">
            <h3>Items</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="orders-order-item-details-right">
            <h3>Shipping Address</h3>
            <p>1234 Main St</p>
            <p>Springfield, IL 62701</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrdersOrderItem