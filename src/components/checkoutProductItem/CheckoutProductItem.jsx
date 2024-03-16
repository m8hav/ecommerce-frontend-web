import React, { useEffect, useState } from 'react'
import "./CheckoutProductItem.scss"
import { Link } from 'react-router-dom';

function CheckoutProductItem({ productId }) {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the server
    // fetch(`http://localhost:8080/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div className='checkout-product-item'>
      <div className="checkout-product-item-info">
        <div className="checkout-product-item-img-container">
          <img src="https://picsum.photos/300/300" alt="Product" />
        </div>
        <div className='checkout-product-item-details'>
          <p className='checkout-product-item-name'>Shampoo</p>
          <p className='checkout-product-item-desc'>{"Very good shampoo. Please buy :') asdlkfaso dnfvlasdfgas"}</p>
          <p className='checkout-product-item-price'>${300}</p>
        </div>
      </div>
      <div className='checkout-product-item-qty-info'>
        <p className="checkout-product-item-qty-heading">Quantity</p>
        <p className='checkout-product-item-qty'>1</p>
      </div>
    </div>
  )
}

export default CheckoutProductItem