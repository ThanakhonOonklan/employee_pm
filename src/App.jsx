import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './Components/Menu/menu'
import Deparetment from './Components/Deparetemnt/Deparetment'
import Employee from './Components/Employee/Employee'
import Position from './Components/Position/Position'
import Salary from './Components/Salary/Salary'

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/Deparetment" element={<Deparetment />} />
      <Route path="/Employee" element={<Employee />} />
      <Route path="/Position" element={<Position />} />
      <Route path="/Salary" element={<Salary />} />
    </Routes>
    </>
  )
}

export default App

