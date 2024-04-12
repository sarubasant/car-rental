import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Forgot from './pages/Forgot'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Welcome from './pages/Welcome'
import DashboardLayout from './layouts/DashboardLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
          <Route path='/' element={<DashboardLayout />}>
            <Route path='/' element={<Home/>}/>
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/welcome' element={<Welcome />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
