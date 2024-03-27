
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employeedashboard from './Components/Employeedashboard'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import Assets from './Components/Assets'
import Visitors from './Components/Visitors'


function App() {


  return (
    <BrowserRouter>
    <Routes> 
    
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      
      <Route path='/dashboard/profile' element={<Profile/>}></Route>
      <Route path='/visitorform' element={<VisitorForm/>}></Route>
      
      <Route path='/dashboard/add_assest' element={<AddAssest/>}></Route>
      <Route path='/dashboard/assets' element={<Assets/>}></Route>
      <Route path='/dashboard/visitors' element={<Visitors/>}></Route>
    </Routes>
    </BrowserRouter>
  
       )
}

export default App
