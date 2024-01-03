import React, { useEffect } from 'react'
import { useApi } from '../ContextApp/ContextApi'


const About = () => {
    const { apiResponse,fetchDat } = useApi();
    console.log("----About page-------", apiResponse);
    useEffect(()=>{
        fetchDat();
    },[])

  return (
    <div>
        <h2>About Page</h2>
        <ul>
            {apiResponse?.map((item)=>
                <li key={item.id}>{item.id}</li>
            )}
        </ul>
    </div>
  )
}
export default About
