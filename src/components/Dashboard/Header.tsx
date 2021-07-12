import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdHome } from 'react-icons/md'

function Header() {
   return (
      <Navbar bg="info" variant={"dark"} expand="md">
         <Container>
            <Navbar.Toggle className={"ml-auto"} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className={"ml-auto"}>
                  <hr className={"bg-white w-100 d-md-none"} />
                  <Nav.Link as={Link} to="/" className={"active"}>
                     <MdHome size={30} />
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header