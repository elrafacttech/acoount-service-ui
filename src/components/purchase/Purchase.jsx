import React from 'react'
import Layout from '../../Pages/Layout'

const Purchase = () => {
  return (
    <Layout>
      <section className="container mx-auto p- font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
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
                  <th className="px-4 py-3"> VAT applicable </th>
                  <th className="px-4 py-3"> VAT </th>
                  <th className="px-4 py-3"> Other Taxes </th>
                  <th className="px-4 py-3"> Total Cost </th>

                </tr>
              </thead>


              <tbody className="bg-white">
                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>

                <tr className="text-gray-700 ">
                  <td className="px-4 py-3 text-sm border ">7-Jan-15</td>
                  <td className="px-4 py-3 text-sm  border">Credit</td>
                  <td className="px-4 py-3 text-sm border">Rhino 3100 "7"</td>
                  <td className="px-4 py-3 text-sm  border">Product A</td>
                  <td className="px-4 py-3 text-sm border">1.00</td>
                  <td className="px-4 py-3 text-sm border"> 2,350.00 </td>
                  <td className="px-4 py-3 text-sm  border">  2,350.00 </td>
                  <td className="px-4 py-3 text-sm border"> Yes </td>
                  <td className="px-4 py-3 text-sm border">  352.50 </td>
                  <td className="px-4 py-3 text-sm  border">No</td>
                  <td className="px-4 py-3 text-sm border">  2,702.50 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>

  )
}

export default Purchase