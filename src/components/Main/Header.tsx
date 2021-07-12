import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaTachometerAlt as DashboardIcon } from 'react-icons/fa'

function Header() {
   return (<Navbar bg="primary" variant={"dark"} expand="md">
      <Container>
         <Navbar.Brand as={Link} to="/">Learn Routing</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"ml-auto"}>
               <hr className={"bg-white w-100 d-md-none"} />
               <Nav.Link as={NavLink} to="/dashboard" activeClassName={"active"}>
                  <DashboardIcon size={32} />
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>);
}

export default Header