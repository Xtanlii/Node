import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


function Home() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('/api/home', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setMsg(res.data.message)
      } catch (err) {
        if(err.response.status === 401 || err.response.status === 500) {
          localStorage.removeItem("token");
          navigate('/login')
        }
        setMsg("Access Denied")
      }
    }
    fetch();
  })
  return (
    <div className="text-4xl text-blue-900">
      {msg}
    </div>
  );
}

export default Home;