import {  useEffect } from "react";
import React from "react";
import { useApi } from "../ContextApp/ContextApi";
import { Row,Col,Card, Container } from "react-bootstrap";
import {Link} from "react-router-dom"

//export default ApiContext;

function HomePage() {
  const { apiResponse, fetchDat } = useApi();
  console.log("----home page-------", apiResponse);
  useEffect(() => {
    fetchDat();
  }, []);
  return (
    <>
      <h1>Home Page</h1>
      {/* <ul>
        {apiData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      <Container>
            <Row>
            {apiResponse?.map((item)=>
                <Col lg={4} key={item.id}>
                <Link to={`/apiResponse/${item.id}`}  className="cards-link ">
                <Card style={{ width: "22rem" }} className="text-center my-5">
                  <Card.Body>
                    <Card.Title>User Details</Card.Title>
                    <Card.Title>
                      User Id: {item.id}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Name: {item.name}</Card.Subtitle>
                    <Card.Text>User Name: {item.username}</Card.Text>
                    <Card.Text>Email: {item.email}</Card.Text>
                    <Card.Text>Address: {item.address.street},{item.address.city},{item.address.zipcode}</Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
               
            )}
            </Row>
            </Container>
       
    </>
  );
}

export default HomePage;
