import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employee from './components/Employee'

import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Assets from './components/Assets'
import Visitors from './components/Visitors'
import Signup from './components/Signup'
import AddAssest from './components/AddAssest'





function App() {


  return (
    <BrowserRouter>
    <Routes> 
    
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='' element={<Home/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      
      <Route path='/dashboard/profile' element={<Profile/>}></Route>
      
      
      <Route path='/dashboard/add_assest' element={<AddAssest/>}></Route>
      <Route path='/dashboard/assets' element={<Assets/>}></Route>
      <Route path='/dashboard/visitors' element={<Visitors/>}></Route>
    </Routes>
    </BrowserRouter>
  
       )
}

export default App