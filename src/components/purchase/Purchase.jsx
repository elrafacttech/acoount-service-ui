import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import "./Purchase.css"
import { useNavigate } from 'react-router-dom';
const Purchase = () => {

  const[purchase,setPurchase] = useState([])
 const  navigate = useNavigate()
  useEffect(() => {
    // Make API call when the component mounts or when selectedOptions.column1 changes
  
    // Make an API call using Axios
    axios.get('http://localhost:9090/v1/api/business/purchase/getAll')
      .then(response => {
        // Update revenueOptions state with the API response data
        setPurchase(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching revenue options:', error);
      });
  }
    , []);
const handleAddPurchase=()=>{

navigate('/addpurchase')

}
  return (
    <Layout>
      <section className="container mx-auto p- font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div>
           <button className="button" onClick={handleAddPurchase} >add</button>
          </div>
          <br />
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="md:text-xs text-xs  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 font-Inter">
                  <th className="px-7 py-3">Date</th>
                  <th className="px-4 py-3">Cash/credit</th>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Product category</th>
                  <th className="px-4 py-3">Units Purchased</th>
                  <th className="px-4 py-3">Unit Cost</th>
                  <th className="px-4 py-3"> Invoice Cost </th>
                  {/* <th className="px-4 py-3"> VAT applicable </th> */}
                  <th className="px-4 py-3"> VAT </th>
                  {/* <th className="px-4 py-3"> Other Taxes </th> */}
                  <th className="px-4 py-3"> Total Cost </th>

                </tr>
              </thead>


              <tbody className="bg-white">
              {purchase.map(option => (
                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">{option.date}</td>
                  <td className="px-4 py-3 text-sm  border">{option.paymentReceipt}</td>
                  <td className="px-4 py-3 text-sm border">{option.productName}</td>
                  <td className="px-4 py-3 text-sm  border">{option.productCategory}</td>
                  <td className="px-4 py-3 text-sm border">{option.unitsPurchased}</td>
                  <td className="px-4 py-3 text-sm border">{option.unitCost} </td>
                  <td className="px-4 py-3 text-sm  border"> {option.invoiceCost} </td>
                  {/* <td className="px-4 py-3 text-sm border"> {option.vatApplicable} </td> */}
                  <td className="px-4 py-3 text-sm border"> {option.vat} </td>
                  {/* <td className="px-4 py-3 text-sm  border">{option.otherTaxes}</td> */}
                  <td className="px-4 py-3 text-sm border"> {option.totalCost} </td>
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

export default Purchase