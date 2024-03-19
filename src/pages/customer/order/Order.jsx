import React, { useEffect, useState } from 'react'
import "./Order.scss"
import StaticProductItem from '../../../components/staticProductItem/StaticProductItem';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../../utils/apis/OrderAPIHandlers'

function Order() {

  const [order, setOrder] = useState({});

  const { oid } = useParams();

  useEffect(() => {
    // Fetch order details from server
    const fetchOrder = async () => {
      try {
        const res = await getOrder(oid);
        res.date = new Date(res.date).toDateString();
        setOrder(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrder();
  }, [])

  return (
    <div id='order-container'>
      <p id='order-heading'>Order #{order.id}</p>
      <div id="order-date">
        <p>Order Date: {order.date}</p>
      </div>
      <div id="order-main">
        <div id='order-items-container'>
          <h2 id='order-items-heading'>Order Items</h2>
          {
            order?.orderProducts && order.orderProducts.map((item, index) =>
              <StaticProductItem key={index} product={item} linkToProduct={true} />
            )
          }
        </div>
        <div id="order-right-portion">
          <div id='order-total-container'>
            <p id='order-total-heading'>Total</p>
            <span id='order-total-price'>
              <p>Order Total</p>
              <p>${order.total}</p>
            </span>
          </div>
          <hr />
          <div id="order-address-info">
            <p id='order-address-heading'>Shipping Address</p>
            <p id='order-address-details'>{order.address}</p>
          </div>
          <hr />
          <div id="order-payment-info">
            <p id='order-payment-heading'>Payment Method</p>
            <div id="order-payment-options">
              <label className='order-payment-option-label'>
                <p>{order.paymentMethod}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order