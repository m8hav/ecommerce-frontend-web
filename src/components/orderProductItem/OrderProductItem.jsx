import React, { useEffect, useState } from 'react'
import "./OrderProductItem.scss"
import { Link } from 'react-router-dom';

function OrderProductItem({ productId }) {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the server
    // fetch(`http://localhost:8080/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div className='order-product-item'>
      <Link to={`/product/${productId}`}>
        <div className="order-product-item-info">
          <div className="order-product-item-img-container">
            <img src="https://picsum.photos/300/300" alt="Product" />
          </div>
          <div className='order-product-item-details'>
            <p className='order-product-item-name'>Shampoo</p>
            <p className='order-product-item-desc'>{"Very good shampoo. Please buy :') as;dlifjk qweon asdf;iasd"}</p>
            <p className='order-product-item-price'>${300}</p>
          </div>
        </div>
      </Link>
      <div className='order-product-item-qty-info'>
        <p className="order-product-item-qty-heading">Quantity</p>
        <p className='order-product-item-qty'>1</p>
      </div>
    </div>
  )
}

export default OrderProductItem