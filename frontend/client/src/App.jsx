import { useState } from 'react'
import './App.css'
import Home from './componets/Home'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Register from './componets/Register'
import SignUp from './componets/SignUp'
import Dashboard from './componets/Dashboard'
import AddClients from './componets/AddClients'
import RestoProfile1 from './componets/RestoProfile1'
import Overview from './componets/Overview'

function App() {
  return (
    <div className='bg-white h-screen w-screen text-black'>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/login" element={<Register/>} />
           <Route path="/register" element={<SignUp/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path='/addClient' element={<AddClients/>} />
           <Route path='/restoProfile' element={<RestoProfile1/>} />
           <Route path='/overview' element={<Overview/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
