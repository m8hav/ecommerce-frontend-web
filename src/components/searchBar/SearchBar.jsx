import React from 'react'
import "./SearchBar.scss"

function SearchBar() {
  return (
    <div id='nav-search-container'>
      <input type="text" placeholder="Search" />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default SearchBar