import { useState } from 'react'
import Login from './pages/Login'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/home" element={<Login />} />
        <Route path="/perfil" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
