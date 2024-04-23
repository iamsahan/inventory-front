import React from 'react'

import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'

import Cashier from './pages/Cahier'
import SalesList from './pages/SalesList'

const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cashier' element={<Cashier />}></Route>
        <Route path='/sales' element={<SalesList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;