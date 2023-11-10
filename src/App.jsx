import Homepage from "./Pages/Homepage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from "./Pages/Login"
import { Dashboard } from "./components/dashboard/Dashboard"
import { Organisation_Details } from "./components/organisation/Organisation_Details"
import Sales from "./components/sales/Sales"
import Purchase from "./components/purchase/Purchase"
import Accounts from "./components/accounts/Accounts"
import { Income_Statement } from "./components/income_statement/Income_Statement"
import Report from "./components/report/Report"
import AddPurchase from "./components/purchase/AddPurchase"

function App() {
  return (
    <>
      <Router>
        <Routes>
        
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/organisation-details' element={<Organisation_Details />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/income-statements' element={<Income_Statement />} />
            <Route path='/report' element={<Report />} />
            <Route path='/addpurchase' element={<AddPurchase />} />
         
        </Routes>
      </Router>

    </>
  )
}

export default App
