import Register from './routes/register'
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './routes/login'
import Home from './routes/Home'


function App() {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
