

import axios from "axios";
import { useEffect, useState } from "react";

export default function Image() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const res = await axios.get('/api/upload')
      setData(res.data)
    }
    getHomeData();
  }, []);

  console.log(data);

  data.map((data) => {
    console.log(data.url)
    
  })

  return (
      <div className="h-20 w-screen bg-yellow-400">
        {data.map((data) => {
          return (
            <p>
              {data.publicId}
            </p>
          )
        })}
      </div>
    )

}
