import React, { useEffect, useState } from 'react'
import "./AdminHome.scss"
import ProductCard from '../../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../../utils/apis/ProductAPIHandlers'


function AdminHome() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    }
    fetchAllProducts();
  }, [])

  return (
    <div id='admin-home-page'>
      <h1>Available Products</h1>
      <Link to="/addProduct">
        <button id='add-product-btn'>Add Product</button>
      </Link>
      <div>
          {
            products.map((product, index) =>
              <ProductCard
                imageUrl={product.imageUrl}
                key={index}
                pid={product.id}
                name={product.name}
                desc={product.description}
                price={product.price} />
            )
          }
      </div>
    </div>
  )
}

export default AdminHome