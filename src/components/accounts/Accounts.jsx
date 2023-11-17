import React, { useState, useEffect } from 'react';
import Layout from '../../Pages/Layout'
import "./Accounts.css"; // Import the CSS file for styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const Accounts = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    column1: 'Option 1',
    column2: 'Option o1',
    column3: 'Option 1'
  }); // State to track selected dropdown options for each column

  const handleOptionChange = (event, column) => {
    setSelectedOptions({
      ...selectedOptions,
      [column]: event.target.value
    });
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [firstdropdownOptions, setfirstdropdownOptions] = useState([]);
  const [costOfGoodsOptions, setcostOfGoodsOptions] = useState([]);
  

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    
    setEndDate(date);
  };

  useEffect(() => {
    // Make API call when the component mounts or when selectedOptions.column1 changes

    // Make an API call using Axios
    axios.get('http://localhost:9090/v1/api/business/revenueTransaction/getAll')
      .then(response => {
        // Update revenueOptions state with the API response data
        firstdropdownOptions(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching revenue options:', error);
      });
  }
    , []);

    useEffect(() => {
      // Make API call when the component mounts or when selectedOptions.column1 changes
  
      // Make an API call using Axios
      axios.get('http://localhost:9090/v1/api/business/revenueTransaction/getAll')
        .then(response => {
          // Update revenueOptions state with the API response data
          setcostOfGoodsOptions(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching revenue options:', error);
        });
    }
      , []);

  return (
    <Layout>
      <div className="accounts-table-container" style={{ textAlign: 'center' }}>
        <h2>Account</h2>
        <table className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th className="px-4 py-3 text-sm border ">Accounts:</th>
              <th className="px-4 py-3 text-sm border ">Code:</th>
              <th className="px-4 py-3 text-sm border ">D/C</th>
              <th className="px-4 py-3 text-sm border ">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr  className="px-4 py-3 text-sm border ">
              <td>
                <select  className="px-4 py-3 text-sm border " value={selectedOptions.column1} onChange={(e) => handleOptionChange(e, 'column1')}>
                <option value="Revenue">Revenue</option>
                  <option value="COGS">COGS</option>
                  <option value="operation Expenses">Operation Expenses</option>
                </select>
              </td>
              <td>
                <select  className="px-4 py-3 text-sm border " value={selectedOptions.column2} onChange={(e) => handleOptionChange(e, 'column2')}>
                  {firstdropdownOptions.map(option => (
                    <option key={option.code} value={option.codeDescription}>
                      {option.revenueTransactionId}
                    </option>
                  ))};
                </select>
              </td>
              <td >
                <select  className="px-4 py-3 text-sm border " value={selectedOptions.column3} onChange={(e) => handleOptionChange(e, 'column3')}>
                  <option value="Debit">Debit</option>
                  <option value="Credit">Credit</option>
                </select>
              </td>
              <td >
                <label className="px-4 py-3 text-sm border ">From:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select start date"
                />
                <label className="px-4 py-3 text-sm border ">To:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select end date"
                />
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div>
        <table >
          <thead className="md:text-xs  text-xs  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 font-Inter">
            <tr>
              <th  className="px-4 py-3 text-sm border ">Code</th>
              <th  className="px-4 py-3 text-sm border ">Product Category</th>
              <th className="px-4 py-3 text-sm border ">Amount</th>
            </tr>
            </thead>
            <tbody className="px-4 py-3 text-sm border ">
              <tr className="text-gray-700 ">
                <td className="px-4 py-3 text-sm border ">4010</td>
                <td className="px-4 py-3 text-sm  border">Product A</td>
                <td className="px-4 py-3 text-sm border">567744</td>
              </tr>

              <tr className="text-gray-700 ">
                <td className="px-4 py-3 text-sm border ">4020</td>
                <td className="px-4 py-3 text-sm  border">Product B</td>
                <td className="px-4 py-3 text-sm border">567744</td>
              </tr>
            </tbody>

         
        </table>
      </div>
    </Layout>
  );
};

export default Accounts