import {  useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const getEmail = (event) => {
    setEmail(event.target.value)
  }
  const getPassword = (event) => {
    setPassword(event.target.value)
  }

  const registerUser = async() => {
    try {

      const res = await axios.post('/api/auth/login', {
        email,
        password
      })

      const token = res.data.token;
      localStorage.setItem("token", token)
      navigate('/home')
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message || "Login failed")
        setMessage(err.response.data.message);
        console.log(message);
      }
    }
  }
  return (
    <form className="shadow-2xl w-3/5 h-3/4 rounded-lg flex flex-col align-start gap-4 pl-10 pt-3 ">
      <div className="text-3xl text-left pt-2">Login</div>
      <div className="flex flex-col  gap-2">
        <label className="flex flex-col ">
          Email
          <input className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 " type="email"
            onChange={getEmail}
          />
          {message && (<p className="font-sans text-red-500 text-sm text-left">{message}</p>)}
        </label>
        <label className="flex flex-col ">
          Password
          <input type="password" className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 "
            onChange={getPassword} />
          <p className="invisible text-sm text-left">a</p>
        </label>

      </div>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-start font-sans"
        onClick={registerUser}>Login</button>
    </form>
  );
}

export default Form;