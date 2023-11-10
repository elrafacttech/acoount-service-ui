import Layout from '../../Pages/Layout'
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import "./Income_statement.css"





export const Income_Statement = () => {

const[incomeStmt,setIncomeStmt] = useState([])




  useEffect(() => {
    // Make API call when the component mounts or when selectedOptions.column1 changes
  
    // Make an API call using Axios
    axios.get('http://localhost:9090/v1/api/business/incomeStmt/getByBusinessId')
      .then(response => {
        // Update revenueOptions state with the API response data
        setIncomeStmt(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching revenue options:', error);
      });
  }
    , []);
  
  return (
    <Layout>
        <div className='.centered-text-container 'style={{ textAlign: 'center',border : '1px solid black'}} >
          <h3 style={{ border : '1px solid black'}}>ABC.Inc,</h3>
          <h3 style={{ border : '1px solid black'}}>Income Statement</h3>
          <table className='accounts-table' style={{ textAlign: 'center' }} >
            <thead className="md:text-xs  text-xs  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 font-Inter">
              <th className="px-7 py-3">Accural accounting</th>
              <th className="px-7 py-3">Current period</th>
              <th className="px-7 py-3">Prior period</th>
            </thead>
            <tbody className="px-4 py-3 text-sm border ">
              <tr>
                <td>Revenues</td>
                <td style={{ textAlign: 'end'}} >{incomeStmt.revenues}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Interest Income</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.interestIncome}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Other Income</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.otherIncome}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Finance Charge Income</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.financeChargeIncome}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Sales Returns and Allowances</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.salesReturnsAndAllowances}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Sales Discounts</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.salesDiscounts}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Total Revenue</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.totalRevenue}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Cost of products</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.costOfProducts}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr> 
              <tr>
                <td>Freight</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.freight}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Inventory Adjustments</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.inventoryAdjustments}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Purchase Returns and Allowances</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.purchaseReturnsAndAllowances}</td>
                <td style={{ textAlign: 'end'}}></td>
                </tr>
              <tr>
                <td>Reserved</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.reserved}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Total COGS</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.totalCOGS}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Advertising Expenses </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.advertisingExpenses}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Auto Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.autoExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Bad Debt Expenses</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.badDebtExpenses}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Bank charge </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.bankCharge}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Cash Over and Short </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.cashOverAndShort}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Commission Expense </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.commissionExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Employee benefit Program</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.employeeBenefitProgram}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Freight Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.freightExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Gifts Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.giftsExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Insurance - general </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.insuranceGeneral}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Professional  Fees </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.professionalFees}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>License Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.licenseExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Maintenance Expense </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.maintenanceExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Meals and Entertainment </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.mealsAndEntertainment}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Office Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.officeExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Payroll Taxes</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.payrollTaxes}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Printing </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.printing}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Postage </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.postage}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Lease rent </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.leaseRent}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Repairs Expense </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.repairsExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Salaries Expense </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.salariesExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Supplies Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.suppliesExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Utilities Expense </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.utilitiesExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Gain/loss on Sale of Assets </td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.gainOrlossOnSaleOfAssets}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Total Operating Expenses</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.totalOperatingExpenses}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>EBITDA</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.ebitda}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Amortization Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.amortizationExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Depreciation Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.depreciationExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>EBIT</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.ebit}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Interest Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.interestExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Profit before taxes</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.profitBeforeTaxes}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Taxes–FIT Expense</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.taxesAndFITExpense}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Net Profit after taxes NPAT</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.netProfitAfterTaxesNPAT}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Preferred dividends</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.preferredDividends}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td>Net income attributable to common shareholder</td>
                <td style={{ textAlign: 'end'}}>{incomeStmt.netIncAttToCommonShareholders}</td>
                <td style={{ textAlign: 'end'}}></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
               

            </tbody>
          </table>
        </div>
    </Layout>
    )
    }
