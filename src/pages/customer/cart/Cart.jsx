import React, { useEffect, useState } from 'react'
import "./Cart.scss"
import CartProductItem from '../../../components/cartProductItem/CartProductItem'
import { Link } from 'react-router-dom';

function Cart() {

  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    // fetch('http://localhost:8080/cart/products')
    //   .then(response => response.json())
    //   .then(data => setProductIds(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div id='cart-container'>
      <p id='cart-heading'>Cart</p>
      <div id="cart-main">
        <div id='cart-items-container'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
              <CartProductItem key={index} productId={item} />
            )
          }
        </div>
        <div id="cart-right-portion">
          <div id='cart-total-container'>
            <p id='cart-total-heading'>Total</p>
            <span id='cart-total-price'>
              <p>Cart Total</p>
              <p>${"20,000"}</p>
            </span>
          </div>
          <hr />
          <Link to={"/checkout"}>
            <button id='cart-checkout-btn'>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart