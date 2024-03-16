import React from 'react'
import "./EditProduct.scss"
import { useNavigate } from 'react-router-dom'

function EditProduct() {

  const navigate = useNavigate();

  const handleSave = () => {
    console.log('saving product changes')

    navigate('/');
  }

  const handleDelete = () => {
    console.log('deleting product')

    navigate('/');
  }

  return (
    <div id='admin-product-editing-page'>
      <h1>Edit Product</h1>
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
                <button id='save-product-changes-btn' onClick={handleSave}>Save Changes</button>
                <button id='delete-product-btn' onClick={handleDelete}>Delete Product</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EditProduct