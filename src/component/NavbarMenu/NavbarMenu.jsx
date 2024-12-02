import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarMenu() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Product">Products</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
