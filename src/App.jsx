import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
function App() {

  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <Routes>
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />    
      </Routes>
    </BrowserRouter>
  )
}
export default App
