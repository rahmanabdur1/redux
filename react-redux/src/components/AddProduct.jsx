import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: 0,
    color: '',
    size: [],
    availability: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/products', productData);
      console.log('Product added successfully!');
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <div>
      <h2>Add Product Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={productData.category} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={productData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" name="color" value={productData.color} onChange={handleChange} />
        </label>
        <br />
        <label>
          Size:
          <input type="text" name="size" value={productData.size} onChange={handleChange} />
        </label>
        <br />
        <label>
          Availability:
          <input type="checkbox" name="availability" checked={productData.availability} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;



