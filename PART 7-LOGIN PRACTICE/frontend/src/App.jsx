import Register from './routes/register'
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './routes/login'
import Home from './routes/Home'
import ProtectedRoute from './routes/ProtectedRoutes'


function App() {

  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
