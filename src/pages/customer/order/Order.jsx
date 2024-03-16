import React, { useEffect, useState } from 'react'
import "./Order.scss"
import OrderProductItem from '../../../components/orderProductItem/OrderProductItem';
import { useParams } from 'react-router-dom';

function Order() {

  const [productIds, setProductIds] = useState([]);

  const { oid } = useParams();

  useEffect(() => {
    // Fetch products from the server
    // fetch('http://localhost:8080/order/products')
    //   .then(response => response.json())
    //   .then(data => setProductIds(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div id='order-container'>
      <p id='order-heading'>Order</p>
      <div id="order-date">
        <p>Order Date: {"2021-05-20"}</p>
      </div>
      <div id="order-main">
        <div id='order-items-container'>
          <h2 id='order-items-heading'>Order Items</h2>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
              <OrderProductItem key={index} productId={item} />
            )
          }
        </div>
        <div id="order-right-portion">
          <div id='order-total-container'>
            <p id='order-total-heading'>Total</p>
            <span id='order-total-price'>
              <p>Order Total</p>
              <p>${"20,000"}</p>
            </span>
          </div>
          <hr />
          <div id="order-address-info">
            <p id='order-address-heading'>Shipping Address</p>
            <p id='order-address-details'>Nalagarh, Himachal Pradesh</p>
          </div>
          <hr />
          <div id="order-payment-info">
            <p id='order-payment-heading'>Payment</p>
            <div id="order-payment-options">
              <label className='order-payment-option-label'>
                <p>{"COD (Cash on Delivery)"}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order