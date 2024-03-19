import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./ProductLanding.scss"
import { getProduct } from '../../../utils/apis/ProductAPIHandlers';
import { getCart, addToCart } from '../../../utils/apis/CartAPIHandlers';

function ProductLanding() {

  const { pid } = useParams();
  const [cartProductIds, setCartProductIds] = useState([]);

  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product from server
    const fetchProduct = async () => {
      try {
        // Fetch product from server
        const res = await getProduct(pid);
        setProduct(res);
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();

    const fetchCart = async () => {
      try {
        // Fetch cart from server
        const res = await getCart();
        setCartProductIds(res.cartProducts.map(cartProduct => cartProduct.productId));
      } catch (error) {
        console.log(error);
      }
    }
    fetchCart();
  }, [pid]);

  const addProductToCart = async () => {
    try {
      // Fetch product from server
      await addToCart(pid);
      navigate('/cart');
    } catch (error) {
      console.log(error);
    }
  }

  const goToCart = () => {
    navigate('/cart');
  }


  return (
    <div id='product-landing-page'>
      <div id="left-portion">
        <div id="product-image-container">
          <img src={product?.imageUrl} alt="product_image" />
        </div>
      </div>
      <div id="right-portion">
        <div id="product-landing-info">
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <p id='product-landing-info-price'>Price: ${product?.price}</p>
        </div>
        <div id="product-landing-cta">
          {
            product
            && (
              cartProductIds.includes(product.id)
                ?
                <div id="product-cta">
                  <button onClick={goToCart}>Go to Cart</button>
                </div>
                :
                <button onClick={addProductToCart}
                  disabled={product?.stock == 0}>
                    {
                       product?.stock == 0 ? "Out of Stock" : "Add to Cart"
                    }
                </button>
            )
          }
        </div>
        {/* <div id="product-cta">
          <button className='product-cart-management-btn'>-</button>
          <p id="product-cart-qty">10</p>
          <button className='product-cart-management-btn'>+</button>
        </div> */}
      </div>
    </div>
  )
}

export default ProductLanding