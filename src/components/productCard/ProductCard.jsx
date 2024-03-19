import React, { useContext } from 'react'
import "./ProductCard.scss"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

function ProductCard({ pid, imageUrl, name, desc, price }) {

  const { currentUser } = useContext(AuthContext);

  return (
    <Link to={currentUser.role == "ADMIN" ? `/editProduct/${pid}` : `/product/${pid}`}>
      <div className='product-item'>
        <div className="product-card-img-container">
          <img src={imageUrl} alt='product' />
        </div>
        <p className='product-item-name'>{name}</p>
        <p className='product-item-desc'>{desc}</p>
        <span>
          <p className='product-item-price'>${price}</p>
          <button>{currentUser.role == "ADMIN" ? "Edit" : "View"}</button>
        </span>
      </div>
    </Link>
  )
}

export default ProductCard