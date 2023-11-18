import React from 'react'
import './FeaturedNewsBar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'


function FeaturedNewsBar() {
  return (
    <div className='featuredAddressBar'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Featured News</Nav.Link>
            <Nav.Link href="#home">Solutions</Nav.Link>
            <Nav.Link href="#home">Products and services</Nav.Link>
            <Nav.Link href="#features">Resources by role</Nav.Link>
            <Nav.Link href="#pricing">Customer stories</Nav.Link>
            <Button className='buttonStyle'>Start Free</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default FeaturedNewsBar