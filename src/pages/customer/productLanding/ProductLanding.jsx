import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductLanding.scss"

function ProductLanding() {

  const { pid } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:8080/api/v1/product/' + pid)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.log(error));
  }, [pid]);

  return (
    <div id='product-landing-page'>
      <div id="left-portion">
        <div id="product-image-container">
          <img src="https://m.media-amazon.com/images/I/71enDA8w01L.jpg" alt="product" />
        </div>
      </div>
      <div id="right-portion">
        <div id="product-landing-info">
          <h1>Product Name</h1>
          <p>Product Description</p>
          <p id='product-landing-info-price'>Price: $200.00</p>
        </div>
        <div id="product-landing-cta">
          <button>Add to Cart</button>
          {/* <button>Go to Cart</button> */}
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