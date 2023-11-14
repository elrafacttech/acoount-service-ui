import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import { useNavigate } from 'react-router-dom';

const Sales = () => {

  const[sales,setSales] = useState([])
  const  navigate = useNavigate()
  useEffect(() => {
    // Make API call when the component mounts or when selectedOptions.column1 changes
  
    // Make an API call using Axios
    axios.get('http://localhost:9090/v1/api/business/sales/getAll')
      .then(response => {
        // Update revenueOptions state with the API response data
        setSales(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching revenue options:', error);
      });
  }
    , []);

    const handleAddSales=()=>{

      navigate('/addsales')
      
      }

  return (
    <Layout>

      <section className="container mx-auto p- font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div>
           <button className="button" onClick={handleAddSales} >add</button>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="md:text-xs  text-xs  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 font-Inter">
                  <th className="px-7 py-3">Date</th>
                  <th className="px-4 py-3">Cash/credit</th>
                  {/* <th className="px-4 py-3">Invoice #</th>
                  <th className="px-4 py-3">Customer #</th> */}
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Product category</th>
                  <th className="px-4 py-3">Units Sold</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Invoice Value</th>
                  {/* <th className="px-4 py-3">VAT applicable (Y/N)</th> */}
                  <th className="px-4 py-3">VAT</th>
                  {/* <th className="px-4 py-3">Other Taxes</th> */}
                  <th className="px-4 py-3">Gross Sales</th>
                </tr>
              </thead>


              <tbody className="bg-white  ">
              {sales.map(option => (
                  
                <tr className="text-gray-700 ">
             
                  <td className="px-4 py-3 text-sm border "  >{option.date}</td>
                  <td className="px-4 py-3 text-sm  border">{option.paymentReceipt}</td>
                  {/* <td className="px-4 py-3 text-sm border">{option.invoice}</td>
                  <td className="px-4 py-3 text-sm  border">{option.customer}</td> */}
                  <td className="px-4 py-3 text-sm border">{option.productName}</td>
                  <td className="px-4 py-3 text-sm border">{option.productCategory}</td>
                  <td className="px-4 py-3 text-sm  border">{option.unitsSold}</td>
                  <td className="px-4 py-3 text-sm border">{option.unitPrice}</td>
                  <td className="px-4 py-3 text-sm border">{option.invoiceValue}</td>
                  {/* <td className="px-4 py-3 text-sm  border">{option.vatApplicable}</td> */}
                  <td className="px-4 py-3 text-sm border">{option.vat}</td>
                  {/* <td className="px-4 py-3 text-sm border">{option.otherTaxes}</td> */}
                  <td className="px-4 py-3 text-sm border">{option.grossSales}</td>
                </tr>

          
                  ))}          

              </tbody>
             
            </table>
          </div>
        </div>
      </section>
    </Layout>

  )
}

export default Sales