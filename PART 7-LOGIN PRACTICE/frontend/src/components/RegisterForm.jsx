import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

export default function Form() {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('')
  const [generalMessage, setGeneralMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ email: '', username: '', password: '' });
  const navigate = useNavigate();

  const getEmail = (event) => {
    setEmail(event.target.value);
    setFieldErrors((prev) => ({ ...prev, email: '' }));
  }
  const getUsername = (event) => {
    setUserName(event.target.value);
    setFieldErrors((prev) => ({ ...prev, username: '' }));
  }
  const getPassword = (event) => {
    setPassword(event.target.value);
    setFieldErrors((prev) => ({ ...prev, password: '' }));
  }

  const registerUser = async () => {
    setGeneralMessage('');
    setFieldErrors({ email: '', username: '', password: '' });
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setFieldErrors((prev) => ({ ...prev, email: 'Not a valid email' }));
        return;
      }
      if (!username) {
        setFieldErrors((prev) => ({ ...prev, username: 'Username is required' }));
        return;
      }
      if (!password) {
        setFieldErrors((prev) => ({ ...prev, password: 'Password is required' }));
        return;
      }
      const res = await axios.post('/api/auth/register', {
        email,
        username,
        password
      })
      console.log('Users', res.data)
      navigate('/login')
    } catch (err) {
      if (err.response && err.response.data) {
        // Try to parse field-specific errors if your backend provides them
        const data = err.response.data;
        if (data.errors) {
          setFieldErrors((prev) => ({ ...prev, ...data.errors }));
        } else if (data.field && data.message) {
          setFieldErrors((prev) => ({ ...prev, [data.field]: data.message }));
        } else if (data.message) {
          setGeneralMessage(data.message);
        } else {
          setGeneralMessage("An error occurred. Please try again.");
        }
      }
    }
  }

  return (

    <form className="shadow-2xl w-3/5 h-3/4 rounded-lg flex flex-col align-start gap-4 pl-10 pt-3">
      <div className="text-3xl text-left pt-2">Register</div>
      <div>
        <label className="flex flex-col ">
          Username
          <input
            className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 mb-2"
            onChange={getUsername}
          />
          {fieldErrors.username && (
            <p className="font-sans text-red-500 text-sm text-left">{fieldErrors.username}</p>
          )}
        </label>
        <label className="flex flex-col ">
          Password
          <input
            type="password"
            className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 mb-2"
            onChange={getPassword}
          />
        </label>
        <label className="flex flex-col ">
          Email
          <input className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 "
            type="email"
            value={email}
            onChange={getEmail}
          />
          {fieldErrors.email && (
            <p className="font-sans text-red-500 text-sm text-left">{fieldErrors.email}</p>
          )}
          
          
        </label>
        
      </div >
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-start font-sans"
        onClick={registerUser}
      >
        Register
      </button>
    </form >

  )
}



