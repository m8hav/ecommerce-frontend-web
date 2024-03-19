import React, { useState } from 'react'
import "./SearchBar.scss"
import { useNavigate } from 'react-router-dom'

function SearchBar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('searching for:', search)
    navigate(`products/search/${search.replace(" ", "+")}`);
  }
  
  return (
    <div id='nav-search-container'>
      <form>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar