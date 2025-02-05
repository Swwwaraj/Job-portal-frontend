import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />    
      </Routes>
    </BrowserRouter>
  )
}
export default App
