import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            {/* <Route path="/" element={<Login />} /> */}
            {/* 
            <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
