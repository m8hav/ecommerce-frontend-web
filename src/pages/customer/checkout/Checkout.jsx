import React, { useEffect, useState } from 'react'
import "./Checkout.scss"
import CheckoutProductItem from '../../../components/checkoutProductItem/CheckoutProductItem'
import { useNavigate } from 'react-router-dom';

function Checkout() {

  const [productIds, setProductIds] = useState([]);

  const navigator = useNavigate();

  const handlePlaceOrder = () => {
    // Place order
    console.log("place order clicked");
    navigator('/order/1');
  }

  useEffect(() => {
    // Fetch products from the server
    // fetch('http://localhost:8080/checkout/products')
    //   .then(response => response.json())
    //   .then(data => setProductIds(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div id='checkout-container'>
      <p id='checkout-heading'>Checkout</p>
      <div id="checkout-main">
        <div id='checkout-items-container'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
              <CheckoutProductItem key={index} productId={item} />
            )
          }
        </div>
        <div id="checkout-right-portion">
          <div id='checkout-total-container'>
            <p id='checkout-total-heading'>Total</p>
            <span id='checkout-total-price'>
              <p>Total Amount</p>
              <p>${"20,000"}</p>
            </span>
          </div>
          <hr />
          <div id="checkout-address-info">
            <p id='checkout-address-heading'>Shipping Address</p>
            <textarea id='checkout-address-details' rows={3} placeholder="Enter your address"></textarea>
          </div>
          <hr />
          <div id="checkout-payment-info">
            <p id='checkout-payment-heading'>Payment</p>
            <div id="checkout-payment-options">
              <input type="radio" name="payment-mode" id="card-payment-mode" disabled />
              <label className='checkout-payment-option-label disabled-radio' htmlFor="card-payment-mode">
                <p>Credit/Debit Card (Coming soon)</p>
              </label>
              <input type="radio" name="payment-mode" id="COD-payment-mode" checked readOnly />
              <label className='checkout-payment-option-label' htmlFor="COD-payment-mode">
                <p>COD (Cash on Delivery)</p>
              </label>
            </div>
          </div>
          <hr />
          <button id='checkout-place-order-btn' onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout