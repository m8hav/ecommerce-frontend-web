import React, { useEffect, useState } from 'react'
import "./SearchListing.scss"
import { useParams } from 'react-router-dom'
import { getProductsBySearch } from '../../../utils/apis/ProductAPIHandlers';
import ProductCard from '../../../components/productCard/ProductCard';

function SearchListing() {
  const { searchString } = useParams();

  const [searchResultProducts, setSearchResultProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProducts = async () => {
      const response = await getProductsBySearch(searchString);
      setSearchResultProducts(response);
      console.log(response)
    }
    fetchAllProducts();
  }, [searchString]);

  return (
    <>
      <div id='search-products'>
        <h1>
          {
            searchResultProducts?.length === 0
              ? "No products found for '"
              : "Products for '"
          }
          {searchString.replace("+", " ")}'
        </h1>
        <div>
          {
            searchResultProducts.map((product, index) =>
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

export default SearchListing