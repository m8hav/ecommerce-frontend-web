import React, { useEffect, useState } from 'react'
import "./CartProductItem.scss"
import { Link } from 'react-router-dom';

function CartProductItem({ productId }) {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the server
    // fetch(`http://localhost:8080/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div className='cart-product-item'>
      <Link to={`/product/${productId}`}>
        <div className="cart-product-item-info">
          <div className="cart-product-item-img-container">
            <img src="https://picsum.photos/300/300" alt="Product" />
          </div>
          <div className='cart-product-item-details'>
            <p className='cart-product-item-name'>Shampoo</p>
            <p className='cart-product-item-desc'>{"Very good shampoo. Please buy :') asdlfkasldfj"}</p>
            <p className='cart-product-item-price'>${300}</p>
          </div>
        </div>
      </Link>
      <div className='cart-product-item-cta'>
        <p className="cart-product-item-qty-heading">Quantity</p>
        <div className="cart-product-item-qty-btns">
          <button className='cart-product-item-qty-btn'>-</button>
          <p className='cart-product-item-qty'>1</p>
          <button className='cart-product-item-qty-btn'>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartProductItem