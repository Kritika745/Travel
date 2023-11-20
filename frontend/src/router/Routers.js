import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import Search from './../pages/Search'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import ThankYou from '../pages/ThankYou'


const Routers = () => {
  return (
   <Routes>
      <Route path ='/' element = {<Navigate to ='/home' />} />
      <Route path = '/home' element={<Home/>} />
      <Route path = '/tours' element={<Tours/>} />
      <Route path = '/tours/:id' element={<TourDetails/>} />
      <Route path = '/login' element={<Login/>} />
      <Route path = '/register' element={<Register/>} />
      <Route path = '/tours/search' element={<Search/>} />
      <Route path = '/thankyou' element={<ThankYou/>} />


   </Routes>
  )
}

export default Routers