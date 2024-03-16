import React from 'react'
import HomeCarousel from '../../../components/homeCaroursel/HomeCarousel'
import ProductItem from '../../../components/productItem/ProductItem'
import "./Home.scss"

function Home() {
  return (
    <>
      <HomeCarousel />
      <div id='home-popular-products'>
        <p id='home-popular-products-heading'>Popular Products</p>
        <div>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) =>
              <ProductItem imgUrl={"https://picsum.photos/300/300"} key={index} pid={index} name={"Shampoo"} desc="Good Shampoo" price="200" />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home