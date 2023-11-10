import React, { useState, useEffect } from 'react';
import Layout from '../../Pages/Layout'
import "../../components/accounts/Accounts.css"; // Import the CSS file for styles
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
  const [revenueOptions, setRevenueOptions] = useState([]);

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
          setRevenueOptions(response.data);
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
      <table  className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
        <tr>
          <th>Accounts:</th>
          <th>Code:</th>
          <th>D/C</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <select value={selectedOptions.column1} onChange={(e) => handleOptionChange(e, 'column1')}>
                  <option value="Revenue">Revenue</option>
                  {revenueOptions.map(option => (
                    <option key={option.code} value={option.codeDescription}>
                      {option.revenueTransactionId}
                    </option>
                  ))}
                </select>
          </td>
          <td>
            <select value={selectedOptions.column2} onChange={(e) => handleOptionChange(e, 'column2')}>
              <option value="value1"> 1</option>
              <option value="value2">Option 2</option>
              <option value="value3">Option 3</option>
            </select>
          </td>
          <td>
            <select value={selectedOptions.column3} onChange={(e) => handleOptionChange(e, 'column3')}>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </td>
          <td>
        <label>From:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select start date"
        />
        <label>To:</label>
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
    </Layout>
  );
};

export default Accounts