import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import "./Purchase.css"
import "./AddPurchase.css";
import { useNavigate } from 'react-router-dom';

const AddPurchase = () => {
const [productName, setProductName] = useState('');
const [productCategory, setProductCategory] = useState('');
const [units, setUnits] = useState('');
const [unitCost, setUnitCost] = useState('');
const [invoiceValue,setInvoiceValue] = useState('');
const [VatAppliable,setVatAppliable] = useState('');
const [vat, setVat] = useState('');
const [paymentReceipt, setPaymentReceipt] = useState('');
const [invoice,setInvoice] =useState('');
const [customer,setCustomer] =useState('');
const [otherTaxes,setOtherTaxes] = useState('');
const [total,setTotal]=useState('');

const navigate = useNavigate();

const handleFormSubmit = async (e) => {
  e.preventDefault();

  useEffect(() => {
    const calculatedInvoiceValue = units * unitCost;
    setInvoiceValue(calculatedInvoiceValue);
  }, [units, unitCost])

  try {
    const response = await axios.post('https://your-backend-api.com/purchase', {
      productName,
      productCategory,
      units,
      unitCost,
      invoiceValue,
      VatAppliable,
      vat,
      paymentReceipt,
      invoice,
      customer,
      otherTaxes,
      total,
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
      <select  className="form-group"  
        type="text"
        id="productName"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      >
          <option value="">Select Product</option>
          <option value="Product1">Product 1</option>
          <option value="Product2">Product 2</option>

      </select>
      <br />
      <br />
      <label htmlFor="productCategory" className="lableStyle-cat">Product Category:</label>
      <select className="form-group" 
        type="text"
        id="productCategory"
        name="productCategory"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      >
        <option value="">Select Product</option>
          <option value="Product A">Product A</option>
          <option value="Product B">Product B</option>
      </select>
      <br />
      <br />
      <label htmlFor="units" className="lableStyle-units">Units:</label>
      <input className="form-group" 
        type="text"
        id="units"
        name="units"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="unitCost" className="lableStyle-unitcost">Unit cost:</label>
      <input className="form-group" 
        type="text"
        id="unitCost"
        name="unitCost"
        value={unitCost}
        onChange={(e) => setUnitCost(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="invoiceValue" className="lableStyle-invoiceValue">InvoiceValue:</label>
      <input className="form-group" 
        type="text"
        id="invoiceValue"
        name="uninvoiceValueitCost"
        value={invoiceValue}
        onChange={(e) => setInvoiceValue(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="VatAppliable" className="lableStyle-VatApplicable">VAT Applicable:</label>
      <select className="form-group" 
        type="text"
        id="VatAppliable"
        name="VatAppliable"
        value={VatAppliable}
        onChange={(e) => setVatAppliable(e.target.value)}
      >
       <option value="">Select Product</option>
          <option value="yes">Yes</option>
          <option value="no">No</option> 
      </select>
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
      <label htmlFor="paymentReceipt" className="lableStyle-paymentReceipt">Payment Type:</label>
      <select className="form-group" 
        type="text"
        id="paymentReceipt"
        name="paymentReceipt"
        value={paymentReceipt}
        onChange={(e) => setPaymentReceipt(e.target.value)}
      >
        <option value="">Select Product</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
      </select>
      <br />
      <br />
      <label htmlFor="invoice" className="lableStyle-invoice">Invoice:</label>
      <input className="form-group" 
        type="text"
        id="invoice"
        name="invoice"
        value={invoice}
        onChange={(e) => setInvoice(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="customer" className="lableStyle-customer">Customer:</label>
      <input className="form-group" 
        type="text"
        id="customer"
        name="customer"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="otherTaxes" className="lableStyle-otherTaxes">OtherTaxes:</label>
      <input className="form-group" 
        type="text"
        id="otherTaxes"
        name="otherTaxes"
        value={otherTaxes}
        onChange={(e) => setOtherTaxes(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="total" className="lableStyle-total">Total:</label>
      <input className="form-group" 
        type="text"
        id="total"
        name="total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <br />
      <br />

      <button  id="addbtn" type="submit" className="submit">Add</button>
    </form>
  </Layout>
);
};
export default AddPurchase
