import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'

import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <BrowserRouter>
    <Toaster>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />    
      </Routes>
    </Toaster>
    </BrowserRouter>
  )
}
export default App
