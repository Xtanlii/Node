import { Children } from 'react';
import {useNavigate} from 'react-router';


function ProtectedRoute() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if(!token) {
    navigate('/login')
  }
  return Children
}

export default ProtectedRoute;