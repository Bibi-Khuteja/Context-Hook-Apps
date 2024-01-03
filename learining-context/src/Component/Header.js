import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="#link">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export  default Header;