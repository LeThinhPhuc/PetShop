import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimateRoute from './routes/AnimateRoute'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeaderAdmin from './components/Admin/HeaderAdmin/HearderAdmin'

function App() {

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Router>
        {window.location.href.includes("/admin") ? <HeaderAdmin /> : <Header />}
        <AnimateRoute />
        <Footer />
      </Router>
    </div>

  )
}

export default App
