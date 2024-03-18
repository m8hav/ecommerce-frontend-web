import React, { useEffect, useState } from 'react'
import "./Checkout.scss"
import StaticProductItem from '../../../components/staticProductItem/StaticProductItem'
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../utils/apis/OrderAPIHandlers';
import { getCart } from '../../../utils/apis/CartAPIHandlers';

function Checkout() {

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('fetching cart details')

    let res;

    const fetchCartDetails = async () => {
      // fetch cart details
      try {
        const res = await getCart();
        setCart(res);

        if (!res.cartProducts || res.cartProducts.length === 0) {
          navigate('/');
        }
      } catch (error) {
        console.log("User has no cart")
      }
    }
    fetchCartDetails();
  }, [])

  // Place order
  const handlePlaceOrder = async () => {
    console.log("place order clicked");
    const address = document.getElementById('checkout-address-details').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const orderInfo = { address, paymentMethod };
    console.log(orderInfo)
    try {
      const order = await createOrder(orderInfo);
      console.log("order created: ", order);
      navigate("/order/" + order.id);
    } catch (error) {
      console.log("Error creating order", error)
    }
  }

  return (
    <div id='checkout-container'>
      <p id='checkout-heading'>Checkout</p>
      <div id="checkout-main">
        <div id='checkout-items-container'>
          {
            (!cart || !cart.cartProducts || cart.cartProducts.length === 0) &&
            <p id='cart-empty-msg'>Your cart is empty</p>
          }
          {
            cart?.cartProducts && cart.cartProducts.map((item, index) =>
              <StaticProductItem key={index} product={item} />
            )
          }
        </div>
        <div id="checkout-right-portion">
          <div id='checkout-total-container'>
            <p id='checkout-total-heading'>Total</p>
            <span id='checkout-total-price'>
              <p>Cart Total</p>
              <p>${cart?.total || 0}</p>
            </span>
          </div>
          <hr />
          <div id="checkout-address-info">
            <p id='checkout-address-heading'>Shipping Address</p>
            <textarea id='checkout-address-details' rows={3} placeholder="Enter your address"></textarea>
          </div>
          <hr />
          <div id="checkout-payment-info">
            <p id='checkout-payment-heading'>Payment Method</p>
            <div id="checkout-payment-options">
              <input type="radio" name='payment-method' value="Credit/Debit Card" id="card-payment-mode" disabled />
              <label className='checkout-payment-option-label disabled-radio' htmlFor="card-payment-method">
                <p>Credit/Debit Card (Coming soon)</p>
              </label>
              <input type="radio" name='payment-method' value="COD" id="COD-payment-mode" checked readOnly />
              <label className='checkout-payment-option-label' htmlFor="COD-payment-method">
                <p>COD (Cash on Delivery)</p>
              </label>
            </div>
          </div>
          <hr />
          <button id='checkout-place-order-btn' onClick={handlePlaceOrder} disabled={!(cart && cart.cartProducts && cart.cartProducts.length)}>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout