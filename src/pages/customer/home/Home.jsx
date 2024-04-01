import React, { useEffect, useState } from 'react'
import HomeCarousel from '../../../components/homeCaroursel/HomeCarousel'
import ProductCard from '../../../components/productCard/ProductCard'
import "./Home.scss"
import { getAllProducts } from '../../../utils/apis/ProductAPIHandlers'

function Home() {

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
    <>
      <HomeCarousel />
      <div id='home-popular-products'>
        <h1 id='home-popular-products-heading'>Popular Products</h1>
        <div>
          {
            products?.map((product, index) =>
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
    </>
  )
}

export default Home