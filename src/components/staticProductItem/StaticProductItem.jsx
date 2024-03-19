import React from 'react'
import "./StaticProductItem.scss"
import { Link } from 'react-router-dom'

function StaticProductItem({ product, linkToProduct }) {
  const innerContent = (
    <div className='static-product-item'>
      <div className="static-product-item-info">
        <div className="static-product-item-img-container">
          <img src={product.imageUrl} alt="Product" />
        </div>
        <div className='static-product-item-details'>
          <p className='static-product-item-name'>{product.name}</p>
          <p className='static-product-item-desc'>{product.description}</p>
          <p className='static-product-item-price'>${product.price}</p>
        </div>
      </div>
      <div className='static-product-item-qty-info'>
        <p className="static-product-item-qty-heading">Quantity</p>
        <p className='static-product-item-qty'>{product.quantity}</p>
      </div>
    </div>
  )
  if (linkToProduct) {
    return (
      <Link className='static-product-item-link' to={`/product/${product.productId}`}>
        {innerContent}
      </Link>
    )
  }
  return innerContent
}

export default StaticProductItem