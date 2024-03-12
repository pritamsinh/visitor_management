import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
import AddAssets from './Components/AddAssets'
import Visitors from './Components/Visitors'
import Signup from './Components/Signup'
import RoleSelection from './Components/RoleSelection'
import Employeelogin from './Components/Employeelogin'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<RoleSelection />} />
      <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/employeelogin' element={<Employeelogin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='' element={<Home/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      <Route path='/dashboard/category' element={<Category/>}></Route>
      <Route path='/dashboard/profile' element={<Profile/>}></Route>
      <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/dashboard/add_assets' element={<AddAssets/>}></Route>
      <Route path='/dashboard/assets' element={<Assets/>}></Route>
      <Route path='/dashboard/visitors' element={<Visitors/>}></Route>     
      

    </Routes>
    </BrowserRouter>
    
     )
}

export default App
