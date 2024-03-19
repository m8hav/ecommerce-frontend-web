import React, { useEffect, useState } from 'react'
import "./EditProduct.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProduct, getProduct, updateProduct } from '../../../utils/apis/ProductAPIHandlers';

function EditProduct() {

  const productId = useParams().pid;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [stock, setStock] = useState('');
  

  useEffect(() => {
    console.log('fetching product details for editing')

    const fetchProductDetails = async () => {
      const product = await getProduct(productId);
      setName(product.name);
      setDesc(product.description);
      setPrice(product.price);
      setImageUrl(product.imageUrl);
      setStock(product.stock);
    }
    fetchProductDetails();
  }, [])

  const handleSave = async () => {
    console.log('saving product changes')

    const product = {
      id: productId,
      name, 
      description: desc, 
      price, 
      imageUrl,
      stock
    }
    await updateProduct(product);
    navigate('/');
  }

  const handleDelete = async () => {
    console.log('deleting product')
    await deleteProduct(productId);
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
              <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="desc">Description:</label>
            </td>
            <td>
              <input type="text" id="desc" name="desc" value={desc} onChange={e => setDesc(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input type="number" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="imageUrl">Image URL:</label>
            </td>
            <td>
              <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="stock">Stock:</label>
            </td>
            <td>
              <input type="number" id="stock" name="stock" value={stock} onChange={e => setStock(e.target.value)}/>
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