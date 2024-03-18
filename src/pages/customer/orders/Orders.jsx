import React, { useEffect, useState } from 'react'
import "./Orders.scss"
import OrdersOrderItem from '../../../components/ordersOrderItem/OrdersOrderItem'
import { getAllOrders } from '../../../utils/apis/OrderAPIHandlers';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from server
    const fetchOrders = async () => {
      try {
        // Fetch orders from server
        const res = await getAllOrders();
        setOrders(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrders();
  }, [])

  return (
    <div id='orders-page-container'>
      <h1>Orders</h1>
      <div id="orders-page-main">
        {
          orders.map((order, index) =>
            <OrdersOrderItem key={index} oNo={index + 1} order={order} />
          )
        }
      </div>
    </div>
  )
}

export default Orders