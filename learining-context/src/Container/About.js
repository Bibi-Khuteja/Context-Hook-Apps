import React, { useContext, useEffect, useState } from "react";
import useApi from "../Context/Context";


const About = (value) => {
  const { apiResponse } = useApi();
  //     useEffect(()=>{
  //         fetchData();
  //     },[])
  //     console.log('--->About',api);
  //   return (
  //     <div>About Page</div>
  //   )
  // const { apiResponse } = useContext(AppContext);

  // console.log("success context", api);
  return (
    <div>
      About screen test
      <ul>
        {apiResponse?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
