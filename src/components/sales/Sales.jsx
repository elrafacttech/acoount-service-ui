import React from 'react'
import Layout from '../../Pages/Layout'

const Sales = () => {
  return (
    <Layout>
      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:no-scrollbar">
        <table className="w-full md:text-sm text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3 font-Inter  ">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Cash/credit
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Invoice #
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Customer #
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Product category
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Units Sold
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Invoice Value
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                VAT applicable (Y/N)
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                VAT
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Other Taxes
              </th>
              <th scope="col" className="px-6 py-3 font-Inter">
                Gross Sales
              </th>
            </tr>
          </thead>



          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 font-Inter">
              <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                7-Jan-15
              </th>
              <td className="px- md:py-4 py-3 font-Inter">
                Cash
              </td>

              <td className="px- md:py-4 py-3 font-Inter">
zczcxzzxczxc
              </td>

              <td className="px- md:py-4 py-3 font-Inter">
zczczxcnncncsdkskvks kwvks  ns kvsdkcsdks vks fsbkfsa flvs fdl 
              </td>

              <td className="px- md:py-4 py-3 font-Inter">
                3 m Double sided Tape
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                Product A
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                2
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                8000
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                16000
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                No
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                ABC, Inc.
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                ABC, Inc.
              </td>
              <td className="px- md:py-4 py-3 font-Inter">
                16000
              </td>

            </tr>



          </tbody>
        </table>
      </div> */}

      <section className="container mx-auto p- font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="md:text-xs  text-xs  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 font-Inter">
                  <th className="px-7 py-3">Date</th>
                  <th className="px-4 py-3">Cash/credit</th>
                  <th className="px-4 py-3">Invoice #</th>
                  <th className="px-4 py-3">Customer #</th>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Product category</th>
                  <th className="px-4 py-3">Units Sold</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Invoice Value</th>
                  <th className="px-4 py-3">VAT applicable (Y/N)</th>
                  <th className="px-4 py-3">VAT</th>
                  <th className="px-4 py-3">Other Taxes</th>
                  <th className="px-4 py-3">Gross Sales</th>
                </tr>
              </thead>


              <tbody className="bg-white  ">
                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-sm  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-ms  border">Cash</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-ms  border"></td>
                  <td className="px-4 py-3 text-sm border">3 m Double sided Tape</td>
                  <td className="px-4 py-3 text-sm border">Product A</td>
                  <td className="px-4 py-3 text-ms  border">2</td>
                  <td className="px-4 py-3 text-sm border">8000</td>
                  <td className="px-4 py-3 text-sm border">16000</td>
                  <td className="px-4 py-3 text-ms  border">No</td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border"></td>
                  <td className="px-4 py-3 text-sm border">16000</td>

                </tr>

                v

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>

  )
}

export default Sales