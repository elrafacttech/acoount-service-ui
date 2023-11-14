import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import "./AddSales.css";
import { useNavigate } from 'react-router-dom';

const AddSales = () => {
const [productName, setProductName] = useState('');
const [productCategory, setProductCategory] = useState('');
const [unitsSold, setUnitsSold] = useState('');
const [unitPrice, setUnitPrice] = useState('');
const [invoiceValue, setInvoiceValue] = useState('');
const [vat, setVat] = useState('');
const [paymentReceipt, setPaymentReceipt] = useState('');

const navigate = useNavigate();

const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://your-backend-api.com/purchase', {
      productName,
      productCategory,
      unitsSold,
      unitPrice,
      invoiceValue,
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
      <input  className="form-group"  
        type="text"
        id="productName"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="productCategory" className="lableStyle-cat">Product Category:</label>
      <input className="form-group" 
        type="text"
        id="productCategory"
        name="productCategory"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="unitsSold" className="lableStyle-unitsold">Units Sold:</label>
      <input className="form-group" 
        type="text"
        id="unitsSold"
        name="unitsSold"
        value={unitsSold}
        onChange={(e) => setUnitsSold(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="unitPrice" className="lableStyle-unitprice">Unit Price:</label>
      <input className="form-group" 
        type="text"
        id="unitssPrice"
        name="unitsPrice"
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="invoiceValue" className="lableStyle">Invoice Value:</label>
      <input className="form-group" 
        type="text"
        id="invoiceValue"
        name="invoiceValue"
        value={invoiceValue}
        onChange={(e) => setInvoiceValue(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="vat" className="lableStyle-vat">VAT:</label>
      <input className="form-group" 
        type="text"
        id="vat"
        name="vat"
        value={vat}
        onChange={(e) => setVat(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="paymentReceipt" className="lableStyle-cash">Cash/Credit:</label>
      <input className="form-group" 
        type="text"
        id="paymentReceipt"
        name="paymentReceipt"
        value={paymentReceipt}
        onChange={(e) => setPaymentReceipt(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" className="submit">Add</button>
    </form>
  </Layout>
);
};
export default AddSales
