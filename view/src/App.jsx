
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employeedashboard from './Components/Employeedashboard'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employee from './components/Employee'
import Category from './components/Category'
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCategory from './components/AddCategory'
import AddEmployee from './components/AddEmployee'
import Assets from './components/Assets'
import Visitors from './components/Visitors'


function App() {


  return (
    <BrowserRouter>
    <Routes> 
    <Route path='/employeedashboard' element={<Employeedashboard/>}></Route>
    <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='' element={<Home/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      <Route path='/dashboard/category' element={<Category/>}></Route>
      <Route path='/dashboard/profile' element={<Profile/>}></Route>
      <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/dashboard/assets' element={<Assets/>}></Route>
      <Route path='/dashboard/visitors' element={<Visitors/>}></Route>
    </Routes>
    </BrowserRouter>
  
       )
}

export default App
