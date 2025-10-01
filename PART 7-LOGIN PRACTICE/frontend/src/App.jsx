import Register from './routes/register'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Login from './routes/login'
import Home from './routes/Home'


function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={token ? <Home /> : navigate('/login')} />
    </Routes>
  )
}

export default App
