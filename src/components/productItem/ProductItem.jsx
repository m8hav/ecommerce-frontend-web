import React, { useContext } from 'react'
import "./ProductItem.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

function ProductItem({ pid, imgUrl, name, desc, price }) {

  const { currentUser } = useContext(AuthContext);
  
  const handleOpenProduct = () => {
    console.log('Open Product')
  }

  return (
    <Link to={currentUser.admin ? `/editProduct/${pid}` : `/product/${pid}`}>
      <div className='product-item'>
        <img src={imgUrl} alt='product' />
        <p className='product-item-name'>{name}</p>
        <p className='product-item-desc'>{desc}</p>
        <span>
          <p className='product-item-price'>${price}</p>
          <button onClick={handleOpenProduct}>{ currentUser.admin ? "Edit" : "View"}</button>
        </span>
      </div>
    </Link>
  )
}

export default ProductItem