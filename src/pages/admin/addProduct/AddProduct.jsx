import React, { useState } from 'react'
import "./AddProduct.scss"
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../../../utils/apis/ProductAPIHandlers';

function AddProduct() {

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleAddProduct = () => {
    console.log("adding product")

    const name = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const stock = document.getElementById('stock').value;

    console.log(name, desc, price, imageUrl, stock);

    const addProductAsync = async (product) => {
      try {
        const res = await addProduct(product);
        console.log("Product added successfully", res);
        navigate('/');
      } catch (error) {
        console.log("Error adding product", error);
        setError("Error adding product");
      }
    }
    const product = {
      name,
      description: desc,
      price,
      imageUrl,
      stock
    };

    addProductAsync(product);
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
              <input type="number" id="price" name="price" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="imageUrl">Image URL:</label>
            </td>
            <td>
              <input type="text" id="imageUrl" name="imageUrl" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="stock">Stock:</label>
            </td>
            <td>
              <input type="number" id="stock" name="stock" />
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
      <p>{error}</p>
    </div>
  )
}

export default AddProduct