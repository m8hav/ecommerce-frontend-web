import React from 'react'
import "./AddProduct.scss"
import { useNavigate } from 'react-router-dom'

function AddProduct() {

  const navigate = useNavigate();
  
  const handleAddProduct = () => {
    console.log('adding product')

    navigate('/');
  }
  
  return (
    <div id='admin-product-add-page'>
      <h1>Add Product</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input type="text" id="name" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="desc">Description:</label>
            </td>
            <td>
              <input type="text" id="desc" name="desc" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input type="text" id="price" name="price" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="imgUrl">Image URL:</label>
            </td>
            <td>
              <input type="text" id="imgUrl" name="imgUrl" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div id='edit-product-action-btns'>
                <button id='add-product-btn' onClick={handleAddProduct}>Add Product</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AddProduct