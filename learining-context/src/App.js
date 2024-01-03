import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Container/Home";
import About from "./Container/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import Context, { AppContext } from "./Context/Context";

function App() {
  // const { apiResponse, setApiResponse } = useContext(AppContext);

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     const personsData = res.data;

  //     setApiResponse(personsData);
  //     console.log(personsData);
  //     //   context.setApi(personsData)
  //   } catch (e) {
  //     console.log("Error:", e);
  //   }
  // };
  return (
    <>
      <Context>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
