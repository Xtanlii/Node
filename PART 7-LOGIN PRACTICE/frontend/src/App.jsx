import Register from './routes/register'
import { Route, Routes } from 'react-router'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<Register />} />
    </Routes>
  )
}

export default App
