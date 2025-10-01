import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
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
        console.log(err)
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