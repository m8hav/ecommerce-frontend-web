import React, { useEffect, useState } from 'react'
import "./Cart.scss"
import CartProductItem from '../../../components/cartProductItem/CartProductItem'
import { Link } from 'react-router-dom';
import { clearCart, getCart } from '../../../utils/apis/CartAPIHandlers';

function Cart() {

  const [cart, setCart] = useState(null);
  const [change, setChange] = useState(false);

  const updateCart = () => {
    setChange(!change);
  }

  useEffect(() => {
    console.log('fetching cart details')

    const fetchCartDetails = async () => {
      // fetch cart details
      try {
        const res = await getCart();
        setCart(res);
      } catch (error) {
        console.log("User has no cart")
      }
    }
    fetchCartDetails();
  }, [change])

  const emptyCart = async () => {
    try {
      await clearCart();
      updateCart();
    } catch (error) {
      console.log("Error clearing cart")
    }
  }

  return (
    <div id='cart-container'>
      <p id='cart-heading'>Cart</p>
      <div id="cart-main">
        <div id='cart-items-container'>
          {
            !(cart && cart.cartProducts && cart.cartProducts.length) &&
            <p id='cart-empty-msg'>Your cart is empty</p>
          }
          {
            cart?.cartProducts && cart.cartProducts.map((item, index) =>
              <CartProductItem key={index} cartProduct={item} updateCart={updateCart} />
            )
          }
        </div>
        <div id="cart-right-portion">
          <div id='cart-total-container'>
            <p id='cart-total-heading'>Total</p>
            <span id='cart-total-price'>
              <p>Cart Total</p>
              <p>${cart?.total || 0}</p>
            </span>
          </div>
          <hr />
          <Link to={"/checkout"}>
            <button id='cart-checkout-btn' disabled={!(cart && cart.cartProducts && cart.cartProducts.length)}>Checkout</button>
          </Link>
          <button id='clear-cart-btn' onClick={emptyCart} disabled={!(cart && cart.cartProducts && cart.cartProducts.length)}>Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart