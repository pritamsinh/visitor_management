
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employeedashboard from './Components/Employeedashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
    <Routes> 
    <Route path='/employeedashboard' element={<Employeedashboard/>}></Route>

    </Routes>
    </BrowserRouter>
  
       )
}

export default App
