import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
   return (<Navbar bg="primary" variant={"dark"} expand="md">
      <Container>
         <Navbar.Brand as={Link} to="/">Learn Routing</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"ml-auto"}>
               <Nav.Link as={NavLink} to="/" activeClassName={"active"}>Home</Nav.Link>
               <Nav.Link as={NavLink} to="/dashboard" activeClassName={"active"}>Dashboard</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>);
}

export default Header