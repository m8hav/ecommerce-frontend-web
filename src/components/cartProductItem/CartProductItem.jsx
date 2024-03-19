import React, { useEffect, useState } from 'react'
import "./CartProductItem.scss"
import { Link } from 'react-router-dom';
import { removeFromCart, updateProductQuantityInCart } from '../../utils/apis/CartAPIHandlers';
import { getProduct } from '../../utils/apis/ProductAPIHandlers';

function CartProductItem({ cartProduct, updateCart }) {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(cartProduct.productId);
      setProduct(res);
    }
    fetchProduct();
  }, [])

  const increaseQuantity = async () => {
    console.log('increasing quantity')
    try {
      await updateProductQuantityInCart({ productId: cartProduct.productId, quantity: cartProduct.quantity + 1 });
      updateCart();
    } catch (error) {
      console.log(error);
    }
  }

  const decreaseQuantity = async () => {
    console.log('decreasing quantity')
    try {
      await updateProductQuantityInCart({ productId: cartProduct.productId, quantity: cartProduct.quantity - 1 });
      updateCart();
    } catch (error) {
      console.log(error);
    }
  }

  const removeProduct = async () => {
    console.log('removing product')
    try {
      await removeFromCart(cartProduct.productId);
      updateCart();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='cart-product-item'>
      <Link to={`/product/${cartProduct.productId}`}>
        <div className="cart-product-item-info">
          <div className="cart-product-item-img-container">
            <img src={cartProduct?.imageUrl} alt="Product" />
          </div>
          <div className='cart-product-item-details'>
            <p className='cart-product-item-name'>{cartProduct?.name}</p>
            <p className='cart-product-item-desc'>{cartProduct?.description}</p>
            <p className='cart-product-item-price'>${cartProduct?.price}</p>
          </div>
        </div>
      </Link>
      <div className='cart-product-item-cta'>
        <p className="cart-product-item-qty-heading">Quantity</p>
        <div className="cart-product-item-qty-btns">
          <button className='cart-product-item-qty-btn' onClick={decreaseQuantity}>-</button>
          <p className='cart-product-item-qty'>{cartProduct?.quantity}</p>
          <button className='cart-product-item-qty-btn' onClick={increaseQuantity} disabled={product.stock == cartProduct.quantity}>+</button>
        </div>
        <button className='cart-product-item-remove-btn' onClick={removeProduct}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default CartProductItem;
