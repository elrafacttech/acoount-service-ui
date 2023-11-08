import Homepage from "./Pages/Homepage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from "./Pages/Login"

function App() {
  return (
    <>
      {/* <Homepage/> */}
      <Router>
        <Routes>
        
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Homepage />} />
         
        </Routes>
      </Router>

    </>
  )
}

export default App
