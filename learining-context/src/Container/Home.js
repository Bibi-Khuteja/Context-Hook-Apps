import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext, useApi } from "../Context/Context";

// const ApiContext = createContext();

// export const useApi = () => {
//   return useContext(ApiContext);
// }

const Home = () => {
  //   const [api, setApi] = useState([]);
  //   const {apiResponse, setApiResponse} = useContext(AppContext)
  const { apiResponse, setApiResponse } = useApi();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const personsData = res.data;

      setApiResponse(personsData);
      console.log(personsData);
      //   context.setApi(personsData)
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {apiResponse.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card, Row, Col, Container } from "react-bootstrap";
// import { Link } from "react";

// export default function Home() {
// const [persons, setPersons] = useState([]);

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const personsData = res.data;
//       setPersons(personsData);
//       console.log(personsData);
//     });
//   }, []);

//   return (
//     <Container>
//       <Row>
//         {persons.map((person) => (
//           <Col lg={4} key={person.id}>
//             <Link to={`/user/${person.id}`} className="cards-link ">
//             <Card style={{ width: "22rem" }} className="text-center my-5">
//               <Card.Body>
//                 <Card.Title>User Details</Card.Title>
//                 <Card.Title>
//                   User Id: {person.id}
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">Name: {person.name}</Card.Subtitle>
//                 <Card.Text>User Name: {person.username}</Card.Text>
//                 <Card.Text>Email: {person.email}</Card.Text>
//                 <Card.Text>Address: {person.address.street},{person.address.city},{person.address.zipcode}</Card.Text>
//               </Card.Body>
//             </Card>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
