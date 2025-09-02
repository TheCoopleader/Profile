import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './navbar'
import { Home, About, Contact } from './pages'
import React from 'react'

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<div>Projects </div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
