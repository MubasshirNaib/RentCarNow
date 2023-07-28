import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarDetails from '../pages/CarDetails'
import NotFound from '../pages/NotFound'
import CarListing from '../pages/Carlisting'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cars' element={<CarListing/>} />
    <Route path='/cars/:slug' element={<CarDetails/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/admin' element={<Admin/>} />
  </Routes>
}
export default Routers