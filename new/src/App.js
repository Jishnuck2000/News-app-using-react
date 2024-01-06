import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nab from './components/nav/Nab'
import Home from './components/nav/Home/Home'





function App() {
  return (
    <>

    <Router>
      
      <Routes>
        <Route path='/'element={<Nab/>}/> 
        <Route path='/home'element={<Home/>}/> 
       


        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
