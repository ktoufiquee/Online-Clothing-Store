import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class NavComponent extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="Signup">Signup</Nav.Link>
                <Nav.Link href="Login">Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
        )
    }
}