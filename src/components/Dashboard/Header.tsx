import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
   return (
      <Navbar bg="info" variant={"dark"} expand="md">
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className={"ml-auto"}>
                  <hr className={"bg-white w-100 d-md-none"} />
                  <Nav.Link as={NavLink} to="/" exact={true} activeClassName={"active"}>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard" activeClassName={"active"}>Dashboard</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header