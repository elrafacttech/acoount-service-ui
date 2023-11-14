import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import "./Purchase.css"
import "./AddPurchase.css";
import { useNavigate } from 'react-router-dom';

const AddPurchase = () => {
const [productName, setProductName] = useState('');
const [productCategory, setProductCategory] = useState('');
const [unitsPurchased, setUnitsPurchased] = useState('');
const [unitCost, setUnitCost] = useState('');
const [vat, setVat] = useState('');
const [paymentReceipt, setPaymentReceipt] = useState('');

const navigate = useNavigate();

const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://your-backend-api.com/purchase', {
      productName,
      productCategory,
      unitsPurchased,
      unitCost,
      vat,
      paymentReceipt,
    });

    // Assuming your backend responds with data after successful submission
    console.log('Purchase submitted successfully:', response.data);

    // Redirect or navigate to another page
    navigate('/success'); // Replace '/success' with your desired route
  } catch (error) {
    console.error('Error submitting purchase:', error);
  }
};

return (
  <Layout>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="productName" className="lableStyle-name">Product Name:</label>
      <input  class="form-group"  
        type="text"
        id="productName"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="productCategory" className="lableStyle-cat">Product Category:</label>
      <input class="form-group" 
        type="text"
        id="productCategory"
        name="productCategory"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="unitsPurchased" className="lableStyle-unitpurc">Units Purchased:</label>
      <input class="form-group" 
        type="text"
        id="unitsPurchased"
        name="unitsPurchased"
        value={unitsPurchased}
        onChange={(e) => setUnitsPurchased(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="unitCost" className="lableStyle-unitcost">Unit cost:</label>
      <input class="form-group" 
        type="text"
        id="unitCost"
        name="unitCost"
        value={unitCost}
        onChange={(e) => setUnitCost(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="vat" className="lableStyle-vat">VAT:</label>
      <input class="form-group" 
        type="text"
        id="vat"
        name="vat"
        value={vat}
        onChange={(e) => setVat(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="paymentReceipt" className="lableStyle-cash">Cash/Credit:</label>
      <input class="form-group" 
        type="text"
        id="paymentReceipt"
        name="paymentReceipt"
        value={paymentReceipt}
        onChange={(e) => setPaymentReceipt(e.target.value)}
      />
      <br />
      <br />
      <button  id="addbtn" type="submit" className="submit">Add</button>
    </form>
  </Layout>
);
};
export default AddPurchase
