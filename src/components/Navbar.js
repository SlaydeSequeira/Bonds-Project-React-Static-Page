// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import '.././App.css'; 


const TestBondNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <i className="bi bi-house-door fs-3 text-white"></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/our-values">Values</Nav.Link>
          <Nav.Link href="/leaders">Leadership</Nav.Link>
          <NavDropdown title="Knowledge Hub" id="knowledge-hub-dropdown">
            <NavDropdown.Item>Must Know (प्रथमा)</NavDropdown.Item>
            <NavDropdown.Item>Good to Know (मध्यमा)</NavDropdown.Item>
            <NavDropdown.Item>Great to Know (उत्तम)</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Framework" id="framework-dropdown">
            <NavDropdown.Item>Framework</NavDropdown.Item>
            {/* Nested dropdowns */}
            <NavDropdown title="Hint">
              {Array.from({ length: 12 }, (_, i) => (
                <NavDropdown.Item key={i}>{`company-${i + 1}`}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown.Item>Reach to Us</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/testimonials">Testimonials</Nav.Link>
        </Nav>
        <Button variant="light" onClick={() => document.getElementById('signUpModal').classList.add('show')}>
          Register/Sign In
          <i className="bi bi-arrow-right ms-2"></i>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TestBondNavbar;
