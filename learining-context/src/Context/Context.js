// import axios from "axios";
import React, { useState, createContext, useContext } from "react";

export const AppContext = createContext([]);

const Context = (props) => {
  console.log(props, "---------------------context");
  const [apiResponse, setApiResponse] = useState([]);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //       const personsData = res.data;

  //       setApiResponse(personsData);
  //       console.log(personsData);
  //       //   context.setApi(personsData)
  //     } catch (e) {
  //       console.log("Error:", e);
  //     }
  //   };

  return (
    <div>
      <AppContext.Provider value={{ apiResponse, setApiResponse }}>
        {props?.children}
      </AppContext.Provider>
    </div>
  );
};
export default Context;

export const useApi = () => {
  return useContext(AppContext);
};
