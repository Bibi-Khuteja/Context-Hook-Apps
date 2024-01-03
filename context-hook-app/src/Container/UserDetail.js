import React,{useEffect}from 'react'
import { useApi } from '../ContextApp/ContextApi';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

export const UserDetail = () => {

    // Get ID from URL
    const { id } = useParams(); // Get the 'id' parameter from the URL
    
    // from array of object find the data based on id
    // const user = usersData.find((user) => user.id === Number(id));


    const { apiResponse, fetchDat } = useApi();
    
     // Filter the data based on the extracted 'id'
    const filteredData = apiResponse.filter(person => person.id === parseInt(id));

     console.log("----userdeatail page-------", filteredData);


    useEffect(() => {
        fetchDat(id);// Pass the 'id' to the fetchDataId function
    }, [id]);


  return (
    <div className="container my-5 ">
    <Card style={{ width: "22rem" }} className="text-center">
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Card.Title>User Id: {filteredData[0]?.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name: {filteredData[0]?.name}</Card.Subtitle>
        <Card.Text>User Name: {filteredData[0]?.username}</Card.Text>
        <Card.Text>Email: {filteredData[0]?.email}</Card.Text>
        <Card.Text>Address: {filteredData[0]?.address?.street},{filteredData[0]?.address?.city},{filteredData?.address?.zipcode}</Card.Text>
        <Link to="/">Go Back</Link>
      </Card.Body>
    </Card>
  </div>
  )
}













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";

//  function UserDetail() {
//   const [user, setUser] = useState({});
// //   console.log ("======", user)
//   const { id } = useParams();
// //   console.log ("--=>", id)

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
       
//       const userData = res.data;
//       setUser(userData);
//       console.log("=====",userData)
//     });
//   }, []);

//   return (
//     <div className="container my-5 ">
//       <Card style={{ width: "22rem" }} className="text-center">
//         <Card.Body>
//           <Card.Title>User Details</Card.Title>
//           <Card.Title>User Id: {user.id}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Name: {user.name}</Card.Subtitle>
//           <Card.Text>User Name: {user.username}</Card.Text>
//           <Card.Text>Email: {user.email}</Card.Text>
//           <Card.Text>Address: {user.address?.street},{user.address?.city},{user.address?.zipcode}</Card.Text>
//           <Link to="/user">Go Back</Link>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }
// export default UserDetail();
