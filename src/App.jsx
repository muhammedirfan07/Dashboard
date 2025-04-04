import React  from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './page/Dashboard'
import Analytics from './page/Analytics'
import Profile from './page/Profile'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/analytic' element={<Analytics/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
