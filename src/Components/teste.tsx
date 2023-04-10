import React, { useState } from 'react'
import axios, {AxiosResponse} from 'axios'

export default function teste() {
  const [message, setMessage] = useState(new Response)

  const handleClick = async () => {
    const response = await axios.get("/api/getUsers");
    console.log("Click")
    console.log(response.data)
  }
  
  return (
    <div>
      <button onClick={handleClick}>Call API</button>
    </div>
  )
}
