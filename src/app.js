import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signUp'
import IndexMain from './pages/main-admin-page'
import MainOrder from './pages/app/orderLandingPage/routes'
import { MainHotelDashboard } from './pages/main-hotel-dashboard'
import Hotelroutes from './pages/main-hotel-page/routes'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/MainDashboardIndex' Component={IndexMain} />
        <Route path='/loginSignUp' Component={Login} />
        <Route path='/signUp' Component={SignUp} />
      </Routes>
      <MainOrder />
      <MainHotelDashboard />
      <Hotelroutes/>
    </>
  )
}

export default App
